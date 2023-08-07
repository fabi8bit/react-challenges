import React, { Component } from 'react'
import css from "./css/Content.module.css"
import {savedPosts} from "../posts.json"
import PostItem from './PostItem'
import Loader from './Loader'



class Content extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           isLoaded: false,
           posts: []
        }
      }

    getData() {
      console.log('getData() called')
      setTimeout(() => {
          console.log('data fetched')
          this.setState({
              isLoaded: true
          })
      }, 3000)
  }

  componentDidMount() {
    console.log('component mounted')
    this.getData()
    this.setState({
      posts: savedPosts
    })
}


  render() {
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
                    return post.name.toLowerCase().includes(name)})
                  console.log(filteredPosts)
                  this.setState({
                    posts: filteredPosts
                  })
                  }}
              />
              <h4>posts found: {(this.state.posts.length)}</h4>
            </form>

        </div>
        <div className={css.SearchResult}>
          {this.state.isLoaded ? (<PostItem posts={this.state.posts} />) : (<Loader />)}
          {/* {this.state.isLoaded && <PostItem posts={savedPosts} />} */}
          {/* <PostItem posts={savedPosts}/> */}
          

        </div>
      </div>
    )
  }
}

export default Content