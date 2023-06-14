import Breadcrumbs from "./Breadcrumbs";

export default function Navbar(){

    return (
        <nav className='fixed top-0 left-0 w-full bg-cyan-600 h-20 z-10 hover:bg-cyan-700 duration-200'>
            <Breadcrumbs/>
        </nav>
    )
}