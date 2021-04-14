import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "./PostProvider";
import Post from "./Post";

const PostList = () => {
    const { posts, getAllPosts, searchPost, searchTerms } = useContext(PostContext);

    // Since you are no longer ALWAYS displaying all of the notes
    const [filteredPosts, setFiltered] = useState([])

    //we're reaching out to the world to get the posts which is our Posts api
    useEffect(() => {
        getAllPosts();
    }, []);

    // useEffect dependency array with dependencies - will run if dependency changes (state)
    // searchTerms will cause a change
    useEffect(() => {
        if (searchTerms !== "") {
            // If the search field is not blank, display matching animals
            const subset = posts.filter(post => post.title.includes(searchTerms))
            setFiltered(subset)
        } else {
            // If the search field is blank, display all animals
            setFiltered(posts)
        }
    }, [searchTerms, posts])

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="cards-column">
                    {posts.map((post) => (
                        <Post key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PostList;