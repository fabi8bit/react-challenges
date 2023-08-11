import React, { useEffect, useState } from 'react'
import axios from 'axios'
import API_KEY from './secrets'
import css from "./css/Content.module.css"
import PostItemAPI from './PostItemAPI'
import Loader from './Loader'

function ContentAPIHooks() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [posts, setPosts] = useState([]);
    const [savedPosts, setSavedPosts] = useState([]);
    const fetchImages = async () => {
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100`);
        console.log('APIHooks',response)
        const fetchedPosts = response.data.hits;
        setIsLoaded(true);
        setPosts(fetchedPosts);
        setSavedPosts(fetchedPosts);
    }
    useEffect(() => {
        fetchImages()
    }, [])
    return (
        <div className={css.Content}>
          <div className={css.TitleBar}>
              <h1>My Posts</h1>
              <form>
                <label htmlFor= "searchInput">Search</label>
                <input
                  type='search'
                  id = "searchInput"
                  onChange = {(event) => {
                    const name = event.target.value.toLowerCase()
                    console.log(name)
                    const filteredPosts = savedPosts.filter(post => {
                      return post.user.toLowerCase().includes(name)})
                    console.log(filteredPosts)
                    setPosts(filteredPosts);
                    }}
                />
                <h4>posts found: {(posts.length)}</h4>
              </form>
  
          </div>
          <div className={css.SearchResult}>
            {isLoaded ? (<PostItemAPI posts={posts} />) : (<Loader />)}
            {/* {this.state.isLoaded && <PostItem posts={savedPosts} />} */}
            {/* <PostItem posts={savedPosts}/> */}
            
  
          </div>
        </div>
      )
    
}

export default ContentAPIHooks