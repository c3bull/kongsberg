import {useNavigate} from "react-router-dom";

export default function TableRow({id, kind, authors, title, publishedDate, index}) {
    const navigate = useNavigate();
    const authorDetailsButton = (url) => {
        navigate(`/authors/${url}`);
        window.location.reload();
    };

    const bookDetailsButton = (id) => {
        navigate(`/books/${id}`);
        window.location.reload();
    };

    return (
        <tr
            key={id}
            className={`${index % 2 === 0 ? 'bg-cyan-50' : 'bg-cyan-100'} hover:bg-cyan-200 duration-150`}
        >
            <td className='p-4'>
                <p onClick={() => bookDetailsButton(id)}
                   className='cursor-pointer text-start w-fit hover:underline'
                >
                    {id ? id : "N/A"}
                </p>
            </td>
            <td className='p-4'>{kind ? kind.map((kind, index) => (
                <p key={index} className='text-start w-fit max-w-[350px]'>{kind}</p>)) : "N/A"}</td>
            <td className='px-4 py-2'>{authors ? authors.map((author, index) => (
                <p key={index} onClick={() => authorDetailsButton(author.replaceAll('.', '').split(' ').join('+'))}
                   className='cursor-pointer text-start w-fit hover:underline min-w-[12rem]'>{author}</p>)) : "N/A"}
            </td>
            <td className='p-4'>
                <p onClick={() => bookDetailsButton(id)}
                   className='cursor-pointer text-start w-fit hover:underline w-52'>{title ? title : "N/A"}</p>
            </td>
            <td className='p-4'>
                <p className='text-end w-28'>{publishedDate ? publishedDate : "N/A"}</p>
            </td>
        </tr>
    )
}