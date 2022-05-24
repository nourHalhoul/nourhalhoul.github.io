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
          <h1>Nour H. <a href="https://github.com/nourHalhoul/" className='i'><i class="devicon-github-original" title='GitHub'></i></a>
          </h1>
        </div>
        <div className='aboutme'>
          <p><span className='intro'>Hi, I'm Nour.</span>
            <br />I build things from scratch using letters, numbers, and special characters.
            <br />
            <br />I have been programming since I was 13 years old; creating custom Android ROMs and mods, and definitely doing my school homework.
            <br />Today, I can be found learning a new language or framework, working on my next project idea, or developing my next game for my <a href="https://snowvisionstudio.com">indie game development company</a>.
            <br />I love my Raspberry Pi(s), full-stack development, and relying on <a href="https://justgetflux.com">f.lux</a> for those late-night coding sessions.
            <br />
            <br />On this site, I will be documenting my progress and experience throughout my journey as an aspiring engineer.</p>
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