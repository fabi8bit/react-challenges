import React from 'react'
import css from "./css/Content.module.css"

function PostItem(props) {
    const posts = props.posts;
    console.log('posts from inside PostItem', posts);
  return (
    posts.map(post => {
        return <div key={post.id} className={css.SearchItem}>
          <p>Artwork Type: {post.type}</p>
          <p>{post.user}</p>
          <img src={post.largeImageURL} />
          <p>{post.tags}</p>


        </div>
      })
  )
}

export default PostItem