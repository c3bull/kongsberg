import {useEffect, useState} from "react";
import axios from "axios";
import Table from "./Table";

export default function Books() {

    const [books, setBooks] = useState([])
    const [searchInput, setSearchInput] = useState('');

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            search();
        }
    }

    useEffect(() => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=search+terms')
            .then((response) => {
                setBooks(response.data.items)
            })
    }, []);

    const search = () => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchInput}`)
            .then((response) => {
                setBooks(response.data.items)
            })
    }

    return (
        <main className='pt-32 w-screen flex justify-center'>
            {books.length > 0 ?
                <div>
                    <div className='flex gap-2 items-center'>
                        <input className="shadow-md bg-gray-100 h-10 p-4 rounded-full focus:outline-0"
                               placeholder="Szukaj..."
                               onChange={(e) => setSearchInput(e.target.value)}
                               onKeyDown={handleKeyDown}
                        />
                        <img
                            src='https://parspng.com/wp-content/uploads/2022/10/Magnifierpng.parspng.com-2.png'
                            onClick={() => search()}
                            className='w-7 h-7 cursor-pointer'
                            alt='search'/>
                    </div>
                    <div className='mt-10'>
                        <Table data={books}/>
                    </div>
                </div> :
                <img src='https://openclipart.org/image/800px/311354'
                     className='w-20 h-20 animate-spin'
                     alt='spinner'/>
            }
        </main>
    )
}