import React from 'react';
import "../Skills.css";
import MERN from "../../src/MERN-logo.png";

export default function Skills() {
    return(
        <section id="skills">
            <div id='skills-title' className='skills-container'>
                <h2 className="skills-title">Tools In My Belt</h2>
                <br></br>
                <br></br>
            <div className='stacks'>
                <div className='stack-item'>
                    <p className='technology'>Python</p>
                    <a href="https://cdnlogo.com/logo/python_358.html"><img class="icon" src="https://cdn.cdnlogo.com/logos/p/3/python.svg" alt=''></img></a>
                </div>
                <div className='stack-item'>
                    <p className='technology'>Javascript</p>
                    <a href="https://cdnlogo.com/logo/javascript_36689.html"><img class="icon" src="https://cdn.cdnlogo.com/logos/j/33/javascript.svg" alt=''></img></a>
                </div>
                <div className='stack-item'>
                    <p className='technology'>HTML</p>
                    <a href="https://cdnlogo.com/logo/html-5_8516.html"><img class="icon" src="https://cdn.cdnlogo.com/logos/h/90/html-5.svg" alt=""></img></a>
                </div>
                <div className='stack-item'>
                    <p className='technology'>CSS</p>
                    <a href="https://cdnlogo.com/logo/css_36679.html"><img class="icon" src="https://cdn.cdnlogo.com/logos/c/18/css.svg" alt=''></img></a>
                </div>
                <div className='stack-item'>
                    <p className='technology'>React</p>
                    <a href="https://cdnlogo.com/logo/react_22568.html"><img class="icon" src="https://cdn.cdnlogo.com/logos/r/63/react.svg" alt=''></img></a>
                </div>
                <div className='stack-item'>
                    <p className='technology'>MongoDB</p>
                    <a href="https://cdnlogo.com/logo/mongodb-icon_41043.html"><img class="icon" src="https://cdn.cdnlogo.com/logos/m/30/mongodb-icon.svg" alt=''></img></a>
                </div>
                <div className='stack-item'>
                    <p className='technology'>PostgreSQL</p>
                    <a href="https://cdnlogo.com/logo/postgresql_39744.html"><img class="icon" src="https://cdn.cdnlogo.com/logos/p/93/postgresql.svg" alt=''></img></a>
                </div>
                <div className='stack-item'>
                    <p className='technology'>Django</p>
                    <a href="https://cdnlogo.com/logo/django_40656.html"><img class="icon" src="https://cdn.cdnlogo.com/logos/d/3/django.svg" alt=''></img></a>
                </div>
                <div className='stack-item'>
                    <p className='technology'>Express</p>
                    <img class="icon" src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"alt=""></img>
                </div>
                <div className='stack-item'>
                    <p className='technology'>MERN</p>
                    <img style={{width: 110}} class="icon" src={MERN} alt=""></img>
                </div>
                <div className='stack-item'>
                    <p className='technology'>EJS</p>
                    <img class="icon" src="https://ejs.bootcss.com/assets/images/ejs-logo.png"alt=""></img>
                </div>
            </div>   
            </div>
            <hr></hr>
        </section>
    )
}
