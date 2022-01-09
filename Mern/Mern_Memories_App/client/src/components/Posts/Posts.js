import React from 'react'
import Post from './Post/Post'
import useStyles from './styles';
import './Posts.css'

const Posts = () => {
    const classes = useStyles();
    return (
        <div>
            <h1 className={classes.title}>
                Posts
            </h1>
            <div className='container'>
                  
                    <div className='PostCard'><Post/></div>
                    <div className='PostCard'><Post/></div>
                    <div className='PostCard'><Post/></div>
                    <div className='PostCard'><Post/></div>
                    <div className='PostCard'><Post/></div>
                    <div className='PostCard'><Post/></div>
                    <div className='PostCard'><Post/></div>
                    <div className='PostCard'><Post/></div>
                
            </div>  
        </div>
    );
}

export default Posts;