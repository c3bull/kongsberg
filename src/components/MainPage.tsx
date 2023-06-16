import {useNavigate} from "react-router";

export default function MainPage() {
    const navigate = useNavigate();

    return (
        <main
            className='pb-10 pt-32 w-full flex items-center justify-center gap-10 text-2xl sm:text-3xl uppercase font-semibold duration-200 '>
            <div className='flex flex-col md:flex-row gap-10 w-3/4'>
                <div onClick={() => navigate(`/books`)}
                     className='p-10 shadow-xl rounded-lg w-full aspect-square bg-gradient-to-t from-cyan-200 via-cyan-100 to-cyan-200 flex justify-center items-center cursor-pointer hover:scale-105 duration-200'>
                    Books
                </div>
                <div onClick={() => navigate(`/authors`)}
                     className='p-10 shadow-xl rounded-lg w-full aspect-square bg-gradient-to-t from-cyan-200 via-cyan-100 to-cyan-200 flex justify-center items-center cursor-pointer hover:scale-105 duration-200'>
                    Authors
                </div>
            </div>
        </main>
    )
}