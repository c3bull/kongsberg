import './App.css'
import MainPage from "./components/MainPage";
import BookDetails from "./components/BookDetails";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import AuthorDetails from "./components/AuthorDetails";

function App() {

    return (
        <>
            <Router>
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
