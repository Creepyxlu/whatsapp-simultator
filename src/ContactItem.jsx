import React from 'react'
import { Link } from 'react-router-dom'

const ContactItem = ({nombre,foto,url}) => {
  return (
      <Link to={url} className='contact-item'>  
        <img src={foto} alt="" />  
        <div className='text'>  
          <h2>{nombre}</h2>  
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor id in itaque soluta, ex nostrum rerum eius laudantium molestias placeat, voluptate libero quaerat facilis saepe quam atque dolorum vitae voluptatibus.</p>
        </div>  
      </Link> 
  )
}

export default ContactItem           
