import React, { useContext } from "react"
import { PostContext } from "./PostProvider"

export const PostSearch = () => {
    const { setSearchTerms, searchTerms } = useContext(PostContext)

    return (
        <>
            <section className="search searchSection">
                <div className="results">
                    <input type="text"
                        className="input--wide"
                        onKeyUp={(event) => setSearchTerms(event.target.value)}
                        placeholder="Search for a post... " />
                    <div className="results-name">Results for <em>{searchTerms}</em> </div>
                </div>
            </section>
        </>
    )
}