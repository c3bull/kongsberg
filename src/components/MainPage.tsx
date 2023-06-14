import {useNavigate} from "react-router";

export default function MainPage() {
    const navigate = useNavigate();

    return (
        <main className='pt-32 w-full min-h-[70vh] flex items-center justify-center gap-10 text-5xl uppercase font-semibold duration-200 overflow-hidden'>
            <div onClick={() => navigate(`/books`)} className='shadow-xl rounded-lg w-1/3 h-96 bg-gradient-to-t from-cyan-200 via-cyan-100 to-cyan-200 flex justify-center items-center cursor-pointer hover:scale-105 duration-200'>
                Books
            </div>
            <div onClick={() => navigate(`/authors`)} className='shadow-xl rounded-lg w-1/3 h-96 bg-gradient-to-t from-cyan-200 via-cyan-100 to-cyan-200 flex justify-center items-center cursor-pointer hover:scale-105 duration-200'>
                Authors
            </div>
        </main>
    )
}