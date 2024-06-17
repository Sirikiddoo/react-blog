import React from "react";
import { Link } from "react-router-dom";
import "./Overview.css";
import posts from '../../constants/data.json';

function Overview() {
    return (
        <div className="overview-container">
            <h1>Alle posts</h1>
            <p>Bekijk hier alle {posts.length} blogs.</p>
            <ul>
                {posts.map((post) => {
                    return (
                        <li key={post.id} className="post">
                            <h2>
                                <Link to={`/posts/${post.id}`}>{post.title}</Link> ({post.author})
                            </h2>
                            <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Overview;
