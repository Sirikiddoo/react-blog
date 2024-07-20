import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from './pages/home/Home.jsx'
import NewPost from './pages/newpost/NewPost.jsx'
import Overview from './pages/overview/Overview.jsx'
import Error from './pages/error/Error.jsx'
import Navigation from "./components/navigation/Navigation.jsx";
import PostDetail from "./pages/postdetail/PostDetail.jsx";



function App() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/new-post" element={<NewPost/>}/>
                <Route path="/overview" element={<Overview/>}/>
                <Route path="*" element={<Error/>}/>
                <Route path="/posts/:id" element={<PostDetail/>}/>
            </Routes>
        </>
    );
}

export default App

