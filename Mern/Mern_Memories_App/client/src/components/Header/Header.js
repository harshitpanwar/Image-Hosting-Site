import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='Header'>
            <Link to='/'>

            <div className='pair'>
                <div className='icon'>
                    <img height={'40px'} src='https://cdn-icons-png.flaticon.com/512/1829/1829589.png'></img>
                </div>

                <div className='website_heading'>
                    <p><b>Image Hosting Site</b></p>
                </div>
            </div>

            </Link>

            

            <div className='upload_button'>
                <Link to='/upload'>
                    <button className='button'> UPLOAD </button>
                </Link>
                
            </div>
        </div>
    )
}

export default Header
