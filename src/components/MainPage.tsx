import {useNavigate} from "react-router";

export default function MainPage() {
    const navigate = useNavigate();

    return (
        <div className='pt-32 w-screen flex justify-center gap-2 text-4xl uppercase font-semibold'>
            <div onClick={() => navigate(`/books`)} className='w-96 h-96 bg-gray-100 flex justify-center items-center cursor-pointer'>
                Books
            </div>
            <div onClick={() => navigate(`/authors`)} className='w-96 h-96 bg-gray-100 flex justify-center items-center cursor-pointer'>
                Authors
            </div>
        </div>
    )
}