import {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router";
import axios from "axios";

export default function BookDetails() {
    const {bookId} = useParams();
    const [bookDetails, setBookDetails] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q="${bookId}"`)
            .then((response) => {
                console.log('details ', response.data.items)
                setBookDetails(response.data.items)
            })
    }, []);

    const authorDetailsButton = (url) => {
        console.log(url)
        navigate(`/authors/${url}`);
        window.location.reload();
    };

    return (
        <main className='min-h-[70vh] w-full text-start flex justify-center pt-32 '>
            {bookDetails.length > 0 ?
                <div className='flex flex-col items-center gap-y-10 w-[1200px]'>
                    <article className='flex w-2/3 rounded-md bg-gray-100 shadow-lg'>
                        <aside className='w-1/3 p-2'>
                            <img
                                src={bookDetails[0].volumeInfo.imageLinks ? bookDetails[0].volumeInfo.imageLinks.thumbnail : "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"}
                                alt='thumbnail'
                                className='w-full rounded-md'
                            />
                        </aside>
                        <aside className='w-2/3 p-2 flex flex-col gap-y-2'>
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
                                        <p key={index}
                                           onClick={() => authorDetailsButton(author.replaceAll('.', '').split(' ').join('+'))}
                                           className='hover:underline w-fit cursor-pointer'>
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
                        </aside>
                    </article>
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
                </div> :
                <img src='https://openclipart.org/image/800px/311354' className='w-20 h-20 animate-spin' alt='spinner'/>
            }


        </main>
    );
};
