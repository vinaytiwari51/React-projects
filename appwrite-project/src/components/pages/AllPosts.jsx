import React, { useEffect, useState } from 'react'
import { Container, PostCard } from '../../container/index'
import service from '../../authServices/conf'


function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {},[])
    service.getPosts([]).then((posts) =>{
        if (posts) {
            setPosts(posts.documents)
        }
    })
  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
            {posts.map((post) =>{
                <div key={post.$id} className='py-2 w-1/4'>
                    <PostCard {...post} />
                </div>
            })}
        </div>
      </Container>
    </div>
  )
}

export default AllPosts
