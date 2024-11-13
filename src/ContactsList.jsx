import React from 'react'
import ContactItem from './ContactItem'

const ContactsList = ({contacts}) => {
    let ContactsListJSX = contacts.map(
        (contact) => {
          return <ContactItem
          nombre={contact.nombre} 
          key={contact.id}
          foto={contact.foto}
          id={contact.id}
          url={"/contact/" + contact.id}
          />
        }
      )
  return (
    <div className='contact-list-container'>
        {ContactsListJSX}
    </div>
  )
}

export default ContactsList