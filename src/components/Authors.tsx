import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router";

export default function Authors() {
    const navigate = useNavigate();
    const [fetchedData, setFetchedData] = useState([])
    const [allAuthors, setAllAuthors] = useState([])
    let fetchedAuthors = [];

    useEffect(() => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=search+terms')
            .then((response) => {
                setFetchedData(response.data.items)
            })
    }, []);

    const allAuthorsToArray = () => {
        fetchedData.map((item) => (
            item.volumeInfo.authors && fetchedAuthors.push(item.volumeInfo.authors)
        ))
        setAllAuthors(fetchedAuthors.join().split(','))
    }

    const authorDetailsButton = (url) => {
        navigate(`/authors/${url}`);
        window.location.reload();
    };

    useEffect(() => {
        allAuthorsToArray()
    }, [fetchedData]);

    return (
        <main className='pt-32 w-full flex justify-center min-h-[70vh]'>
            {allAuthors.length > 1 ?
                <article className='grid grid-cols-1 w-5/6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    {allAuthors.map((author, index) => (
                        <div key={index} onClick={() => authorDetailsButton(author.replaceAll('.', '').split(' ').join('+'))}
                             className='hover:scale-105 duration-200 aspect-square bg-gradient-to-t from-cyan-200 via-cyan-100 to-cyan-200 shadow-md rounded-md m-2 flex items-center justify-center text-center p-5 cursor-pointer'>
                            <p className='text-xl'>{author}</p>
                        </div>
                    ))}
                </article> : <img src='https://openclipart.org/image/800px/311354' className='w-20 h-20 animate-spin' alt='spinner'/>}

        </main>
    )
}