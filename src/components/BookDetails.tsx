import {useEffect, useState} from 'react';
import {useParams} from "react-router";
import axios from "axios";

export default function BookDetails() {
    const {bookId} = useParams();
    const [bookDetails, setBookDetails] = useState([])
    console.log('id ', bookId)
    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q="${bookId}"`)
            .then((response) => {
                console.log('details ', response.data.items)
                setBookDetails(response.data.items)
            })
    }, []);

    return (
        <main className='w-full text-start pt-32'>
            {bookDetails.length > 0 &&
                <div className='flex flex-col items-center gap-y-10'>
                    <div className='flex w-2/3 border border-primary'>
                        <div className='w-1/3 bg-red-100'>
                            <img
                                src={bookDetails[0].volumeInfo.imageLinks ? bookDetails[0].volumeInfo.imageLinks.thumbnail : "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"}
                                alt='thumbnail'
                                className='w-full'
                            />
                        </div>
                        <div className='w-2/3 p-2 flex flex-col gap-y-2'>
                            <div className='flex gap-2'>
                                <p className='font-semibold'>{bookDetails[0].volumeInfo.title}</p>
                                •
                                <div>{bookDetails[0].volumeInfo.publishedDate ? bookDetails[0].volumeInfo.publishedDate :
                                    <div role="status" className="animate-pulse">
                                        <div
                                            className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-12"></div>
                                    </div>}
                                </div>
                            </div>
                            <div>
                                {bookDetails[0].volumeInfo.subtitle ? bookDetails[0].volumeInfo.subtitle :
                                    <div role="status" className="animate-pulse">
                                        <div
                                            className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-3/4 mb-2.5"></div>
                                    </div>
                                }
                            </div>
                            Authors:
                            {bookDetails[0].volumeInfo.authors ? <div className='flex flex-col'>
                                    {bookDetails[0].volumeInfo.authors.map((author, index) => (
                                        <p key={index}>
                                            {author}
                                        </p>
                                    ))}
                                </div>
                                :
                                <div role="status" className="animate-pulse">
                                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-1/3 mb-2.5"></div>
                                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-1/4 mb-2.5"></div>
                                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-2.5"></div>
                                </div>
                            }
                        </div>
                    </div>
                    <div className='w-2/3'>
                        <p className='text-2xl font-semibold pb-2'>Description</p>
                        {bookDetails[0].volumeInfo.description ? bookDetails[0].volumeInfo.description :
                            <div role="status" className="animate-pulse">
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-4/5 mb-2.5"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-3/4 mb-2.5"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-2/3 mb-2.5"></div>
                            </div>
                        }

                    </div>
                </div>
            }


        </main>
    );
};
