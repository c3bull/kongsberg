import {useEffect, useState} from 'react';
import {useParams} from "react-router";
import axios from "axios";
import Table from "./Table";

export default function AuthorDetails() {
    const {author} = useParams();
    const [authorDetails, setAuthorDetails] = useState([])

    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=inauthor:"${author}"`)
            .then((response) => {
                setAuthorDetails(response.data.items)
            })
    }, []);

    return (
        <main
            className='min-h-[70vh] pt-32 w-full flex justify-center px-4 sm:px-8 md:px-10 lg:px-20 xl:px-32 2xl:px-44'>{authorDetails.length > 0 ?
            <div className='flex overflow-auto'>
                <Table data={authorDetails}/>
            </div> :
            <img src='https://openclipart.org/image/800px/311354'
                 className='w-20 h-20 mt-10 animate-spin'
                 alt='spinner'/>}
        </main>
    );
};
