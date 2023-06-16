import TableRow from "./TableRow";

export default function Table({data}) {

    const tableHeader = [
        {name: "id"},
        {name: "Kind"},
        {name: "Author"},
        {name: "Title"},
        {name: "Published Date"},
    ]

    return (
        <table className='my-10 shadow-xl rounded-t-lg rounded-b-lg overflow-hidden mx-4 w-full'>
            <tbody>
            <tr>
                {tableHeader.map((header, index) => (
                    <th
                        key={index}
                        className='text-white h-10 px-2 uppercase text-start bg-cyan-700 overflow-hidden'
                    >
                        <p className='p-2'>{header.name}</p>
                    </th>
                ))}
            </tr>
            {data.map((item, index) => (
                <TableRow
                    index={index}
                    key={item.id}
                    id={item.id}
                    kind={item.volumeInfo.categories}
                    authors={item.volumeInfo.authors}
                    title={item.volumeInfo.title}
                    publishedDate={item.volumeInfo.publishedDate}
                />
            ))}
            </tbody>
        </table>
    )
}