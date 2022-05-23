import React from 'react';
import './App.css';
import ProfilePic from './ProfilePic.jpg';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Contact()
{
    let logged = false;
    if (!logged)
    {
        console.log("There are no 13 ways.");
        logged = true;
    };

    return (
        <div className='contactpage'>
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
            <div className='contactmelayout'>
                <h1 className='title'>Contact me</h1>
                <p className='contactme'>Do you possess the world's greatest joke and would like to share the wondrous discovery with a mere commoner?
                    <br />Here are 13 ways how.</p>
                <div className='links'>
                    <a href="https://github.com/nourHalhoul/"><i class="devicon-github-original-wordmark" title='GitHub'></i></a>&nbsp;
                    <a href='https://www.linkedin.com/in/nour-h-685239131/'><i class="devicon-linkedin-plain colored" title='LinkedIn'></i></a>
                </div>
            </div>
        </div>
    );
}

export default Contact;