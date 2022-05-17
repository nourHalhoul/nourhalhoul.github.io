import React from 'react';
import './App.css';
import ProfilePic from './ProfilePic.jpg';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Blog()
{
    return (
        <div className='blogpage'>
            <Helmet>
                <title>Blog | Nour H.</title>
            </Helmet>
            <div className='header'>
                <div className='leftHeader'>
                    <img src={ProfilePic} alt='Profile' className='profileicon'></img>
                    <p className='nameHeader'>Nour H.</p></div>
                <div className='buttons'>
                    <Link to='/'>
                        <button className='aboutButtonHeader'>About</button>
                    </Link>
                    <Link to='/Blog'>
                        <button className='blogButtonHeader'>Blog</button>
                    </Link>
                    <Link to='/Contact'>
                        <button className='contactButtonHeader'>Contact</button>
                    </Link>
                </div>
            </div>
            <div className='blogpost'>
                <h1 className='title'>Title</h1>
                <p className='date'>Date</p>
                <p className='blogtext'>Text..</p>
            </div>
        </div>
    );
}

export default Blog;