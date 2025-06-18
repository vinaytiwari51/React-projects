import React from 'react'
import service from '../authServices/conf' 
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuresImage}) {

  return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4'>
                <div className='w-full justify-center mb-4'>
                    <img
                    className='rounded-2xl' 
                    src={service.getFilePreview(featuresImage)} alt={title} 
                    />

                </div>
            </div>
        
        </Link>
  )
}

export default PostCard
