export default function TableRow({id, kind, authors, title, publishedDate, index}) {

    return (
        <tr key={id} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'} hover:bg-gray-300`}>
            <td className='border border-primary px-4'>{id ? id : "N/A"}</td>
            <td className='border border-primary px-4'>{kind ? kind : "N/A"}</td>
            <td className='border border-primary px-4 py-2'>{authors ? authors.map(author => (
                <p onClick={author.split(' ').join('')} className='cursor-pointer text-center w-fit hover:underline'>{author}</p>)) : "N/A"}
            </td>
            <td className='border border-primary px-4'>{title ? title : "N/A"}</td>
            <td className='border border-primary px-4'>{publishedDate ? publishedDate : "N/A"}</td>
        </tr>
    )
}