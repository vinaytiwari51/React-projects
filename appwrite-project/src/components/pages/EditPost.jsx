import React, { useEffect, useState } from 'react'
import { Container, PostForm } from '../../container/index'
import service from '../../authServices/conf'
import { useParams, useNavigate } from 'react-router-dom'


function EditPost() {
    const [post, setPosts] = useState();
    const navigate = useNavigate();
    const {slug} = useParams();

    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else{
            navigate('/')
        }
    }, [slug, navigate])
    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
      ) : null
}

export default EditPost
