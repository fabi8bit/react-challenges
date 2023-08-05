import React, { Component } from 'react'
import css from "./css/Content.module.css"
import {savedPosts} from "../posts.json"
import PostItem from './PostItem'
import Loader from './Loader'



class Content extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           isLoaded: false
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
}


  render() {
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
            <h1>My Posts</h1>

        </div>
        <div className={css.SearchResult}>
          {this.state.isLoaded ? (<PostItem posts={savedPosts} />) : (<Loader />)}
          {/* {this.state.isLoaded && <PostItem posts={savedPosts} />} */}
          {/* <PostItem posts={savedPosts}/> */}
          

        </div>
      </div>
    )
  }
}

export default Content