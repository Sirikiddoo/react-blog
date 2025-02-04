import { useState, useEffect } from "react";
import "./PostDetail.css";
import { Link, useParams } from "react-router-dom";
import formatDate from "../../helpers/formatDate.jsx";
import axios from "axios";

function PostDetail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [singlePost, setSinglePost] = useState(null);

    const fetchPost = async () => {
        try {
            setLoading(true);
            const url = `http://localhost:3000/posts/${id}`;
            const response = await axios.get(url);
            setSinglePost(response.data);
            console.log(response.data);
        } catch (error) {
            setError("Er is een fout opgetreden bij het ophalen van de post.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPost();
    }, []);


    if (!singlePost) {
        return <p>Loading...</p>;
    }

    const formattedDate = formatDate(singlePost.created);

    return (
        <div className="post-detail-container">
            <h1>Post detail</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <h1 className="post-title">{singlePost.title} ({singlePost.readTime} minuten)</h1>
            <p>Geschreven door {singlePost.author} op {formattedDate}</p>
            <p>{singlePost.content}</p>
            <p>{singlePost.comments} reacties - {singlePost.shares} keer gedeeld</p>
            <Link to="/overview">
                <p>Terug naar de overzichtspagina</p>
            </Link>
        </div>
    );
}

export default PostDetail;
