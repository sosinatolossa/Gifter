import React, { useContext, useEffect, useState } from "react"
import { PostContext } from "./PostProvider"

export const PostForm = () => {
    const { addPost, getAllPosts } = useContext(PostContext)

    //With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.
    //Define the initial state of the form inputs with useState()
    const [post, setPost] = useState({
        title: "",
        imageUrl: "",
        caption: "",
        userProfileId: 0
    });

    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(false);

    //when a field changes, update state. The return will re-render and display based on the values in state
    //Controlled component
    const handleControlledInputChange = (event) => {
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
        const newPost = { ...post }

        /* post is an object with properties.
        Set the property to the new value using object bracket notation. */
        newPost[event.target.id] = event.target.value
        // update state
        setPost(newPost)
    }
    useEffect(() => {
    }, [post])

    const handleClickSavePost = () => {

        const title = post.title
        const imageUrl = post.imageUrl
        const caption = post.caption
        const userProfileId = parseInt(post.userProfileId)
        const dateCreated = Date.now


        if (title === "") {
            window.alert("Please type in title of post")
        }

        else if (imageUrl === "") {
            window.alert("Please insert image")
        }

        else if (caption === "") {
            window.alert("Please type in caption")
        }

        else if (userProfileId === 0 || userProfileId === NaN) {
            window.alert("Please select a user")
        }

        else {
            //disable the button - no extra clicks
            setIsLoading(true); //this ensures the user cannot repeatedly click the button while the API is being updated

            //POST - add
            addPost({ //if not, this must be a new note so the input fields will be empty
                title: post.title,
                imageUrl: post.imageUrl,
                caption: post.caption,
                userProfileId: parseInt(post.userProfileId),
                dateCreated: Date.now
            })
                .then(() => setIsLoading(false))
                .then(getAllPosts)
        }
    }

    return (
        <>
            <form className="postForm">
                <h2 className="postForm__title">"Add new post</h2>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="title">Title: </label>
                        <input type="text" id="title" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Title" value={post.title} />
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="imageUrl">Image: </label>
                        <input type="text" id="imageUrl" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Image" value={post.imageUrl} />
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="caption">Caption: </label>
                        <input type="text" id="caption" onChange={handleControlledInputChange} required autoFocus className="form-control"
                            placeholder="Caption" value={post.caption} />
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="userProfileId">User Profile: </label>
                        <input type="text" id="userProfileId" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="User profile" value={post.userProfileId} />
                    </div>
                </fieldset>


                <button className="btn btn-primary"
                    disabled={isLoading}
                    onClick={event => {
                        event.preventDefault()
                        handleClickSavePost()
                    }}>
                    Add post</button>
            </form>
        </>
    )
}

export default PostForm;