import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className='Header'>
            <div className='pair'>
                <div className='icon'>
                    <img height={'40px'} src='https://cdn-icons-png.flaticon.com/512/1829/1829589.png'></img>
                </div>

                <div className='website_heading'>
                    <p><b>Image Hosting Site</b></p>
                </div>
            </div>
            

            <div className='upload_button'>
                <button className='button'> UPLOAD </button>
            </div>
        </div>
    )
}

export default Header
