import React from 'react';
import './App.css';
import ProfilePic from './ProfilePic.jpg';
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function App()
{
  const isTabletOrMobile = useMediaQuery({ maxWidth: 600 })
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 601 })

  return (
    <div className='homepage'>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <img src={ProfilePic} alt='Profile' className='profilepic'></img>
      <div className='layout'>
        {isTabletOrMobile && <div className='badges'>
          <i class="devicon-javascript-plain colored" title="JavaScript"></i><i class="devicon-csharp-plain colored" title="C#"></i><i class="devicon-html5-plain colored" title="HTML"></i><i class="devicon-css3-plain colored" title="CSS"></i><i class="devicon-sqlite-plain colored" title="SQL"></i>
        </div>} {/*Mobile*/}
        {isDesktopOrLaptop && <div className='badges'>
          <i class="devicon-javascript-plain colored" title="JavaScript"></i>&nbsp;<i class="devicon-csharp-plain colored" title="C#"></i>&nbsp;<i class="devicon-html5-plain colored" title="HTML"></i>&nbsp;<i class="devicon-css3-plain colored" title="CSS"></i>&nbsp;<i class="devicon-sqlite-plain colored" title="SQL"></i>
        </div>} {/*Desktop*/}
        <div className='name'>
          <h1>Nour H.</h1>
        </div>
        <div className='aboutme'>
          <p>Hi, I'm Nour. <br />I build things from scratch using letters, numbers, and special characters.
            <br />
            <br />I started messing around with Chrome's Devtools at the age of 11, which really peaked my interest in coding and development.
            <br />At 13, I started messing around with linux, creating custom Android ROMs and mods, and definitely doing my school homework.
            <br />After graduating from secondary school, I helped bring a friend's family-run shop to the digital age by building and designing their official online store; resparking my excitement for programming and development.
            <br />Shortly afterwards, I started an <a href="https://snowvisionstudio.com/">indie game development company</a> that focused on the mobile platform. This allowed me to learn many new things through trial and error such as sprite and asset creation, targeted ad-marketing, and healthy UX/UI development.
            <br />
            <br />On this site, I will be documenting my progress and journey throughout my experience as an aspiring engineer.</p>
        </div>
        <div className='languages'>
          <p> Languages: JavaScript | C# | HTML | CSS | SQL
          </p>
        </div>
        <div className='buttons'>
          <Link to='/'>
            <button className='aboutbutton'>About</button>
          </Link>
          <Link to='/Blog'>
            <button className='blogbutton'>Blog</button>
          </Link>
          <Link to='/Contact'>
            <button className='contactbutton'>Contact</button>
          </Link>
        </div>
      </div>
    </div >
  );
}

export default App;