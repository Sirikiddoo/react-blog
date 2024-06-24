// Overview.jsx
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./Overview.css";
import axios from "axios";

function Overview() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [posts, setPosts] = useState([])

    const fetchData = async () => {
        try {
            setLoading(true);
            const url = 'http://localhost:3000/posts';
            const response = await axios.get(url);
            setPosts(response.data);
            console.log(response.data);
        } catch (error) {
            setError("Er is een fout opgetreden bij het ophalen van de posts.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="overview-container">
            <h1>Alle posts</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <p>Bekijk hier alle {posts.length} blogs.</p>
            <ul>
                {posts.map((post) => (
                    <li key={post.id} className="post">
                        <h2>
                            <Link to={`/posts/${post.id}`}>{post.title}</Link> ({post.author})
                        </h2>
                        <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Overview;
