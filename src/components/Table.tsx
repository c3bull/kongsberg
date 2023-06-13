import TableRow from "./TableRow";

export default function Table({data}) {
    console.log(data)

    const tableHeader = [
        {name: "id"},
        {name: "Kind"},
        {name: "Author"},
        {name: "Title"},
        {name: "Published Date"},
    ]

    return (
        <table className='border border-primary'>
            <tr className='border border-primary'>
                {tableHeader.map((header, index) => (
                    <th
                        key={index}
                        className='border border-primary px-2 uppercase bg-gray-400'
                    >
                        {header.name}
                    </th>
                ))}
            </tr>
            {data.map((item, index) => (
                <TableRow
                    index={index}
                    key={item.id}
                    id={item.id}
                    kind={item.kind}
                    authors={item.volumeInfo.authors}
                    title={item.volumeInfo.title}
                    publishedDate={item.volumeInfo.publishedDate}
                />
            ))}
        </table>
    )
}