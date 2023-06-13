import './App.css'
import MainPage from "./components/MainPage";
import BookDetails from "./components/BookDetails";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AuthorDetails from "./components/AuthorDetails";
import Navbar from "./components/Navbar";

function App() {

    return (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/book/:bookId' element={<BookDetails/>}/>
                    <Route path='/author/:author' element={<AuthorDetails/>}/>
                </Routes>
            </Router>
        </>
    )
}

export default App
