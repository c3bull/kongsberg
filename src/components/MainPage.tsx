import {useEffect, useState} from "react";
import axios from "axios";
import Table from "./Table";

export default function MainPage() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=search+terms')
            .then((response) => {
                setMovies(response.data.items)
            })
    }, []);


    return (
        <div>
            {movies.length > 0 && <Table data={movies}/>}
        </div>
    )
}