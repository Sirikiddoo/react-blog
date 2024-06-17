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

    const navigate = useNavigate();

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log({
            ...formData,
            created: new Date().toISOString(),
            readTime: {formatReadTime},
            comments: 0,
            shares: 0
        });
        navigate("/overview")
    }


        return (
            <div className="newpost-container">
                <h1>Nieuwe post</h1>
                <form onSubmit={handleSubmit}>
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
            </div>
        );
    }

    export default NewPost;

