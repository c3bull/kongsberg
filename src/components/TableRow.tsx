import {useNavigate} from "react-router-dom";

export default function TableRow({id, kind, authors, title, publishedDate, index}) {
    const navigate = useNavigate();
    const authorDetailsButton = (url) => {
        console.log(url)
        navigate(`/author/${url}`);
        window.location.reload();
    };

    const bookDetailsButton = (id) => {
        console.log(id)
        navigate(`/book/${id}`);
        window.location.reload();
    };

    return (
        <tr
            key={id}
            className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'} hover:bg-gray-300`}
        >
            <td
                onClick={() => bookDetailsButton(id)}
                className='border border-primary px-4 cursor-pointer'
            >
                {id ? id : "N/A"}
            </td>
            <td className='border border-primary px-4'>{kind ? kind : "N/A"}</td>
            <td className='border border-primary px-4 py-2'>{authors ? authors.map(author => (
                <p onClick={() => authorDetailsButton(author.replaceAll('.', '').split(' ').join('+'))}
                   className='cursor-pointer text-start w-fit hover:underline'>{author}</p>)) : "N/A"}
            </td>
            <td className='border border-primary px-4'>{title ? title : "N/A"}</td>
            <td className='border border-primary px-4'>{publishedDate ? publishedDate : "N/A"}</td>
        </tr>
    )
}