import React, {useState} from "react";
import "./NewPost.css";
import {useNavigate} from "react-router-dom";
import formatReadTime from "../../helpers/formatRead.jsx";


function NewPost() {
    const [formData, setFormData] = useState({
        title: "",
        subtitle: "",
        name: "",
        content: ""
    });
    const [postId, setPostId] = useState(null);

    const navigate = useNavigate();

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...formData,
                    created: new Date().toISOString(),
                    readTime: formatReadTime(formData.content),
                    comments: 0,
                    shares: 0
                })
            });

            if (!response.ok) {
                throw new Error("Er is iets misgegaan bij het plaatsen van de post.");
            }

            const data = await response.json();
            setPostId(data.id);
            navigate("/overview");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="newpost-container">
            <form onSubmit={handleSubmit}>
                <h1>Nieuwe post</h1>
                <label htmlFor="title">Titel</label>
                <input type="text" id="title" name="title" value={formData.title} onChange={handleChange}/>
                <label htmlFor="subtitle">Subtitle</label>
                <input type="text" id="subtitle" name="subtitle" value={formData.subtitle} onChange={handleChange}/>
                <label htmlFor="name">Naam en achternaam</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
                <label htmlFor="content">Blogpost</label>
                <textarea id="content" name="content" cols="30" rows="10" required minLength={300} maxLength={2000}
                          value={formData.content} onChange={handleChange}/>
                <button type="submit">Plaatsen</button>
            </form>
            {postId && (
                <p>De blogpost is succesvol toegevoegd. Je kunt deze <a href={`/posts/${postId}`}>hier</a> bekijken.</p>
            )}
        </div>
    );
}

export default NewPost;
