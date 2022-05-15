import React from 'react';
import './App.css';
import ProfilePic from './ProfilePic.jpg';
import { useMediaQuery } from 'react-responsive'


function App()
{
  const isTabletOrMobile = useMediaQuery({ maxWidth: 600 })
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 601 })

  return (
    <div className='homepage'>
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
          <p>About me.. About me..<br /> About me..<br /> About me..<br /> About me.. About me.. About me.. About me.. About me.. About me.. </p>
        </div>
        <div className='languages'>
          <p> Languages: JavaScript | C# | HTML | CSS | SQL
          </p>
        </div>
        <div className='buttons'>
          <button className='aboutbutton'>About me</button>
          <button className='blogbutton'>Blog</button>
          <button className='contactbutton'>Contact</button>
        </div>
      </div>
    </div >
  );
}

export default App;