import React from 'react'
const Home = () => {
  return (
    <div className='page'>
      <div className='side-side'>
          <div class="wrapper">
              <div className='home-contents'>
                <h1>Welcome!</h1>
                <div class="typing-demo">
                    My name is <span>Brandon.</span>
                </div>
                <p>I'm a Software Developer based in the Bay Area. As an software developer, my mission is to create a digital experience that users will love to use while also learning new skills to help further perfect my craft!</p>
                <button className='connect' onClick={() => window.location = 'mailto:bran.nguyen1118@gmail.com'}> Connect with me!</button>
              </div>
          </div>
        <div className='img'>
          <div className='recenter'>
            <div class="box">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <img className='selfie' src={require('./headshot.jpeg')} />
            </div>
          </div>
        </div>
      </div>
      <div className='copyright'>
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

export default Home