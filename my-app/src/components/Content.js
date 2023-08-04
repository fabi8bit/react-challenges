import React, { Component } from 'react'
import css from "./css/Content.module.css"
import {savedPosts} from "../posts.json"
import PostItem from './PostItem'



class Content extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           
        }
      }


  render() {
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
            <h1>My Posts</h1>

        </div>
        <div className={css.SearchResult}>
          <PostItem posts={savedPosts}/>

        </div>
      </div>
    )
  }
}

export default Content