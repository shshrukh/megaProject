import React from 'react'
import appWriteServise from '../appWrite/database'
import {Link} from 'react-router-dom'


const PostCard = ({$id, title, featuredImage }) => {
  return (
    <div>
      <Link to= {`/post/${$id}`} >
        <div className='w-full bg-gray-100 rounded-xl p-4'>
          <div className='w-full justify-center mb-4'>
            <img src={appWriteServise.getFilePreview(featuredImage)} alt={title} />
          </div>
        </div>
        <h2>{title }</h2>
      </Link>
    </div>
  )
}

export default PostCard
