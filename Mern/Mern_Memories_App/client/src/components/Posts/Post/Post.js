import React from 'react'
import useStyles from './styles';
import './Post.css'

const Post = () => {
    const classes = useStyles();
    return (
        <div className='Postcard'>
            <div className='Card'>
                <p>Post Title</p>
                <img className='Photo' src='http://www.pixelstalk.net/wp-content/uploads/2016/07/Ferrari-1080p-Full-HD-Images-1920x1080.jpg'/>
                <p>Post description is to be added here</p>
            </div>
        </div>
    )
}

export default Post
