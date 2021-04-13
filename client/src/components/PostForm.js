import React, { useContext, useEffect, useState } from "react"
import { PostContext } from "./PostProvider"

export const PostForm = () => {
    const { addPost, getAllPosts } = useContext(PostContext)


    //With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

    //Define the initial state of the form inputs with useState()


    //for edit, hold on to state of travelNote in this view
    const [post, setPost] = useState({
        title: "",
        imageURL: "",
        caption: "",
        userProfileId: 0,
        dateCreated: ""
    });

    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true);

    // Now that the form can be used for editing as well as adding a travel note, you need access to the travel note id for fetching the travel note you want to edit
    //const { postId } = useParams();
    //const history = useHistory();

    /*
    //image upload handling
    const [loading, setLoading] = useState(false)
    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append("file", files[0])
        data.append("upload_preset", "ZuringTheWorld")
        setLoading(true)
        const response = await fetch(
            "https://api.cloudinary.com/v1_1/sosina/image/upload",
            {
                method: "POST",
                body: data
            }
        )
        const file = await response.json()
        setImageURL(file.secure_url)
        setLoading(false)
    }

    */
    //when a field changes, update state. The return will re-render and display based on the values in state
    //Controlled component
    const handleControlledInputChange = (event) => {
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
        const newPost = { ...post }

        /* post is an object with properties.
        Set the property to the new value
        using object bracket notation. */
        newPost[event.target.id] = event.target.value
        // update state
        setPost(newPost)
    }
    useEffect(() => {
    }, [post])

    const handleClickSaveTravelNote = () => {

        const title = post.title
        const imageUrl = post.imageURL
        const caption = post.caption
        const userProfileId = parseInt(post.userProfileId)
        const dateCreated = post.dateCreated


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

        else if (dateCreated === "" || dateCreated === NaN) {
            window.alert("Please select a date")
        }

        else {
            //disable the button - no extra clicks
            setIsLoading(true); //this ensures the user cannot repeatedly click the button while the API is being updated
            /*
            if (travelNoteId) {   //if this is the note that already exists in our api
                //PUT - update
                updateTravelNote({ //the notes will be populated the input fields with current values from the api
                    id: travelNote.id,
                    location: travelNote.location,
                    startDate: startDate,
                    endDate: endDate,
                    planeTicketPrice: travelNote.planeTicketPrice,
                    costOfFood: travelNote.costOfFood,
                    costOnHotel: travelNote.costOnHotel,
                    noteDetails: travelNote.noteDetails,
                    overallExperience: travelNote.overallExperience,
                    userId: currentUser,
                    imageURL: imageURL
                })
                    .then(() => history.push(`/travelNotes`)) //then push it to the travel notes list
            } else {
                */
            //POST - add
            addPost({ //if not, this must be a new note so the input fields will be empty
                title: post.title,
                imageUrl: post.imageUrl,
                caption: post.caption,
                userProfileId: parseInt(post.userProfileId),
                dateCreated: post.dateCreated
            })
                .then(getAllPosts)
        }
    }



    /*
    Reach out to the world and get travel notes state
    and locations state on initialization.
    
    useEffect(() => {
        if (travelNoteId) { //if we have this travel note id in the URL(api)
            getTravelNoteById(travelNoteId) //get that id(we're passing the id)
                .then(travelNote => { //get the object
    
                    setTravelNote(travelNote) //set the travel note state with the new object
                    setIsLoading(false)
                })
        } else {
            setIsLoading(false)
        }
    
    }, [])
    
    */


    return (
        <>
            <form className="postForm">
                <h2 className="postForm__title">"Add new post</h2>

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

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="dateCreated">Date created: </label>
                        <input type="date" id="dateCreated" onChange={handleControlledInputChange} required autoFocus className="form-control"
                            placeholder="Date created" value={post.dateCreated} />
                    </div>
                </fieldset>


                {/* <textarea type="text" id="noteDetails" placeholder="notes"></textarea> */}


                <button className="btn btn-primary"
                    disabled={isLoading}
                    onClick={event => {
                        event.preventDefault()
                        handleClickSaveTravelNote()
                    }}>
                    Add post</button>
            </form>
        </>
    )
}