import {useEffect, useState} from "react";
import axios from "axios";
import Table from "./Table";

export default function Authors() {

    const [books, setBooks] = useState([])

    useEffect(() => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=search+terms')
            .then((response) => {
                setBooks(response.data.items)
            })
    }, []);


    return (
        <div className='pt-32 w-screen flex justify-center'>
            {books.length > 0 && <Table data={books}/>}
        </div>
    )
}