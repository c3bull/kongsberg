import {useEffect, useState} from 'react';
import {useParams} from "react-router";
import axios from "axios";
import Table from "./Table";

export default function AuthorDetails() {
    const {author} = useParams();
    const [authorDetails, setAuthorDetails] = useState([])
    console.log('id ',author)
    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=inauthor:"${author}"`)
            .then((response) => {
                console.log(response.data.items)
                setAuthorDetails(response.data.items)
            })
    }, []);

    return (
        <div className='pt-32'>{authorDetails.length > 0 && <Table data={authorDetails}/>}</div>
    );
};
