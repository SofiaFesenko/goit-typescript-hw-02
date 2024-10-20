import css from './ImageGallery.module.css'

import ImageCard from "./ImageCard"

type Photo = {
    id: string;
    urls: {
        thumb: string;
        regular: string;
    }
}

type Props = {
    photos: Photo[] | null;
    handleModalOpen: (imgSrc: string) => void
}

function ImageGallery({photos, handleModalOpen}: Props) {
    return (
        <div className={css.block}>
            {
                Array.isArray(photos) && 
                photos.map((photo) => {
                    return (
                        <>
                            <ImageCard key={photo.id} src={photo.urls.thumb} onImageClick={() => handleModalOpen(photo.urls.regular)}/>
                        </>
                    )
                })
            }            
        </div>
    )
}

export default ImageGallery