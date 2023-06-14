import {useEffect, useState} from 'react';
import {useParams} from "react-router";
import axios from "axios";
import Table from "./Table";

export default function AuthorDetails() {
    const {author} = useParams();
    const [authorDetails, setAuthorDetails] = useState([])
    console.log('id ', author)
    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=inauthor:"${author}"`)
            .then((response) => {
                console.log(response.data.items)
                setAuthorDetails(response.data.items)
            })
    }, []);

    return (
        <main className='min-h-[70vh] pt-32 w-full flex justify-center'>{authorDetails.length > 0 ?
            <Table data={authorDetails}/> :
            <img src='https://openclipart.org/image/800px/311354'
                 className='w-20 h-20 animate-spin'
                 alt='spinner'/>}
        </main>
    );
};
