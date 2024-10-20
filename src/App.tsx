import { useEffect, useState, FormEvent } from 'react'
import axios from 'axios'

import SearchBar from './components/SearchBar'
import ImageGallery from './components/ImageGalleryAndImageCard/ImageGallery'
import Loader from './components/Loader'
import ErrorMessage from './components/ErrorMessage'
import LoadMoreBtn from './components/LoadMoreBtn'
import ImageModal from "./components/ImageModal/ImageModal";


function App() {
  const [inputValue, setinputValue] = useState<string>("")
  const [photos, setPhotos] = useState<null | any[]>(null)
  const [isLoading, setisLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [pages, setPages] = useState<number>(1)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [imgSrc, setimgSrc] = useState<string | null>(null)

  const handleModalOpen = (img: null | string) => {
      setIsOpen(true)
      setimgSrc(img)
  }

  const handleModalClose = () => {
      setIsOpen(false)
      setimgSrc(null)
  }

  const increasePageNumber = () => {
    setPages(pages + 1)
    console.log(pages);
  }


  const onSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault()
    let inpVal = ((e.target as HTMLFormElement).elements.namedItem('headerInput') as HTMLInputElement).value
    setinputValue(inpVal)
    setPages(1) 
    console.log(inpVal); 
    
  }

  useEffect(() => {
    async function fetchPhotos() {
    if (!inputValue) return  
    try {
        setisLoading(true)
        const resp = await axios.get(`https://api.unsplash.com/search/photos?query=${inputValue}&page=${pages}&per_page=30&client_id=7Gk9pS4Ls4uzfEgT6eqkkLXjzZnzPpWTp5toauRn0Mo`)
        setPhotos((prevPhotos) => pages == 1 ? resp.data.results : [...(prevPhotos || []), ...resp.data.results] )
        console.log(resp.data.results);
      }
      catch (error) {
        setError(true)
      }
      finally {
        setisLoading(false)
      }  
    } 
    fetchPhotos()
  }, [inputValue, pages])


  return (
    <>
    <SearchBar onSubmit={onSubmit}/>

    <ImageGallery photos={photos} handleModalOpen={handleModalOpen}/>

    {isLoading && <Loader/>}
    {error && <ErrorMessage/>} 


    {Array.isArray(photos) && (photos.length > 0 ? <LoadMoreBtn page={increasePageNumber}/> : <ErrorMessage/>)}

    {isOpen && <ImageModal imgSrc={imgSrc} isOpen={isOpen} onClose={handleModalClose}/>}

    </>
  )
}

export default App