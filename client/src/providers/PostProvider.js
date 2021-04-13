import React, { useState } from "react";

export const PostContext = React.createContext();

export const PostProvider = (props) => {
    const [posts, setPosts] = useState([]);

    const getAllPosts = () => {
        return fetch("/api/post") //fetching all posts
            .then((res) => res.json()) //changing them to json code
            .then(setPosts); //then setting our state
    };

    //adding a new post
    const addPost = (post) => {
        return fetch("/api/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        });
    };

    return (
        <PostContext.Provider value={{ posts, getAllPosts, addPost }}>
            {props.children}
        </PostContext.Provider>
    );
};