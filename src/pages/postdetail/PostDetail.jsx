import React from "react";
import "./PostDetail.css";
import {Link, useParams} from "react-router-dom";
import posts from '../../constants/data.json';
import formatDate from "../../helpers/formatDate.jsx";

function PostDetail() {
    const { id } = useParams();
    const post = posts.find(post => post.id === parseInt(id));
    const formattedDate = formatDate(post.created);

    return (
        <div className="post-detail-container">
            <h1 className="post-title">{post.title} ({post.readTime} minuten)</h1>
            <p>Geschreven door {post.author} op {formattedDate}</p>
            <p>{post.content}</p>
            <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
            <Link to="/overview">
                <p>Terug naar de overzichtspagina</p>
            </Link>
        </div>
    );
}

export default PostDetail;


