import React from 'react'

const Project = () => {
  return (
    <div className='parent-proj-border'>
      <h1>Projects</h1>
      <div className='grid-layout'>
        <div className='proj'>
          <img className='top' src={require('./Netflix.png')}>
          </img>
          <div className='descp'>
            <div className='contents'>
              <span>Netflix</span>
              <br></br>
              A Netflix clone that incorporates Firebase and Firestore to authorize secure logins to users while also keeping track of user's saved movies.
              <br></br>
              <a href='https://netflixcloner.netlify.app/'>See the project live!</a><a href='https://github.com/nguyenbrandon101/netflixcloner'><img src={require('./github.png')} className="git"/></a>
            </div>
          </div>
        </div>
        <div className='proj'>
          <img className='top' src={require('./todo2.0.png')}>
          </img>
          <div className='descp'>
            <div className='contents'>
              <span>Daily Planner 2.0</span>
              <br></br>
              A todo list app that allows the user to organize their task for the day. Incoporated a weather API to also display the weather of any city. Used Node.js and Express.js to create a back-end server that connects with MongoDB to store data.
            </div>
          </div>
        </div>
        <div className='proj'>
          <img className='top' src={require('./todopic.png')}>
          </img>
          <div className='descp'>
            <div className='contents'>
              <span>Daily Planner 1.0</span>
              <br></br>
              A todo list app that allows the user to organize their task for the day. Users can categorize their task into either business or personal.
            </div>
          </div>
        </div>
        <div className='proj'>
          <img className='top' src={require('./dino.gif')}>
          </img>
          <div className='descp'>
            <div className='contents'>
              <span>Dino Game</span>
              <br></br>
              A Google Chrome clone of the infamous Dino Game. Users can control the dino to jump over cactus. Users scores are kept and memorized.
              <br></br>
              <a href='https://chrome-dinoclone.netlify.app/'>See the project live!</a><a href='https://github.com/nguyenbrandon101/dino-game-master'><img src={require('./github.png')} className="git"/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='copyright-2'>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div className='center'>
          <div id="social-test">
            <ul class="social">
              <li><a href="https://www.instagram.com/brvndon_nguyen/" class="fa fa-instagram" aria-hidden="true"></a></li>
              <li><a class="fa fa-github" aria-hidden="true" href='https://github.com/nguyenbrandon101?tab=repositories'></a>
              </li>
              <li><a class="fa fa-linkedin" aria-hidden="true" href='https://www.linkedin.com/in/bran-nguyen/'></a>
              </li>
              <li><a class="fa fa-twitter" aria-hidden="true" href='https://twitter.com/Brvndon_nguyen'></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project