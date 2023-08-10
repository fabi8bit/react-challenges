import React from 'react'
import css from "./css/Content.module.css"

function PostItem(props) {
    const posts = props.posts;
    console.log('posts from inside PostItem', posts);
  return (
    posts.map(post => {
        return <div key={post.title} className={css.SearchItem}>
          <p>{post.title}</p>
          <p>{post.name}</p>
          <img src={post.image} />
          <p>{post.description}</p>


        </div>
      })
  )
}

export default PostItem