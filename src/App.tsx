import MainPage from "./components/MainPage";
import BookDetails from "./components/BookDetails";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AuthorDetails from "./components/AuthorDetails";
import Navbar from "./components/Navbar";
import Books from "./components/Books";
import Authors from "./components/Authors";
import Footer from "./components/Footer";

function App() {

    return (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/books' element={<Books/>}/>
                    <Route path='/books/:bookId' element={<BookDetails/>}/>
                    <Route path='/authors' element={<Authors/>}/>
                    <Route path='/authors/:author' element={<AuthorDetails/>}/>
                </Routes>
                <Footer/>
            </Router>
        </>
    )
}

export default App
