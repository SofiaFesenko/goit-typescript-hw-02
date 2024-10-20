import toast, { Toaster } from 'react-hot-toast';
import { FormEvent } from 'react';

type Props = {
    onSubmit: (event: FormEvent<HTMLElement>) => void
}

function SearchBar({ onSubmit }: Props) {

    const notify = () => toast("Необхідно ввести текст для пошуку зображень.");

    const searchFunctions = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (((e.target as HTMLFormElement).elements.namedItem('headerInput') as HTMLInputElement).value.trim() === ""){
            notify()
        }
        else {
           onSubmit(e) 
        }
    }

    return (
        <header>
            <form onSubmit={searchFunctions}>
                <input
                    type="text"
                    name="headerInput"
                    placeholder="Search images and photos"

                />
                <button type="submit">Search</button>                
            </form>
            <Toaster/>
        </header>
    )
}
  
export default SearchBar