import React from 'react'
import Vertical from './Vertical'
const Contact = () => {
  return (
    <div>
      <div id='Contact'>
        <div className='contact-sec'>
            <h2>Want to Connect?</h2>
            <h3> Lets Get In Touch!</h3>
            <p> If you would like to contact me, please feel free to send an email to me with a click of the button below! I am currently looking for new opportunities as a software engineer and developer! </p>
            <a href="mailto: bran.nguyen1118@gmail.com" class = "contbut"><span>Lets Connect!</span></a>
            <br></br>
            <Vertical></Vertical>
        </div>
      </div>
    </div>
  )
}

export default Contact