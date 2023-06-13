import {useEffect, useState} from "react";
import axios from "axios";
import Table from "./Table";

export default function MainPage() {

    const [books, setBooks] = useState([])

    useEffect(() => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=search+terms')
            .then((response) => {
                setBooks(response.data.items)
            })
    }, []);


    return (
        <div>
            {books.length > 0 && <Table data={books}/>}
        </div>
    )
}