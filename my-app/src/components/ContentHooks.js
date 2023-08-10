import React, { useState, useEffect } from 'react'
import css from "./css/Content.module.css"
import {savedPosts} from "../posts.json"
import PostItem from './PostItem'
import Loader from './Loader'



function ContentHooks() {

    const [isLoaded, setIsLoaded] = useState(false);
    const [fetchedPosts, setFetchedPosts] = useState([]);
    
    useEffect(() => {
        console.log('Creating TimeOut')
        console.log(fetchedPosts)
        setTimeout(() => {
            console.log('Time started');
            setIsLoaded(true);
            setFetchedPosts(savedPosts)
        }, 2000);}, [])
        console.log(fetchedPosts)
    
  return (
    <div className={css.Content}>
        <div className={css.TitleBar}>
            <h1>My Posts</h1>
            <form>
                <label htmlFor="searchInput">Search</label>
                <input
                    type = 'search'
                    id = 'searchInput'
                    onChange = {(event) => {
                        const name = event.target.value.toLowerCase()
                        console.log(name)
                        const filteredPosts = savedPosts.filter(post => {
                          return post.name.toLowerCase().includes(name)})
                        console.log('after search', filteredPosts)
                        setFetchedPosts(filteredPosts)
                        }}
                />
                <h4>posts found: {(fetchedPosts.length)}</h4>
            </form>
        </div>
        <div className={css.SearchResult}>
            {isLoaded ? (<PostItem posts={fetchedPosts} />) : (<Loader />)}
        </div>

    </div>
  )
}

export default ContentHooks