import {useLocation} from "react-router";
import {Link} from "react-router-dom";

export default function Breadcrumbs() {

    const location = useLocation()
    let currentLink = ''

    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentLink += `/${crumb}`

            return (
                <div key={crumb} className='flex'>
                    <p className='mx-2'>•</p> <Link to={currentLink}>{crumb.split('+').join(' ')}</Link>
                </div>
            )
        })

    return (
        <div className='h-full flex w-full justify-center items-center text-white'>
            <Link to="/">Home</Link>{crumbs}
        </div>
    )
}