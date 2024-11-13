import React,{useState} from "react"
import MessagesList from "./MessagesList"
import "./styles/chat.css"
import extractFormData from "./helpers/extractFormData"
import { v4 as uuidv4 } from 'uuid';
import { getFormattedDateHHMM } from "./helpers/getFormattedTime";
import ContactsList from "./ContactsList";
import { useParams } from "react-router-dom";

const ChatScreen = () => {
    //Acá lo tranformo en un coso tipo estado, para que actualice mi HTML al actualizarse pero mentengo os mensajes ya creados dentro del useState
    let contact_id = useParams().contact_id
    if(!contact_id){
        contact_id = 1
    }
    const [errors, setErrors] = useState({content: null})
    const handleSendNewMessage = (event) =>{
        event.preventDefault()//De esta forma voy a prevenir la recarga al accionar el evento
        const form_jsx = event.target
        const inf_message = extractFormData(form_jsx)
        const fecha_actual = new Date()
        const hora_creacion =  `${fecha_actual.getHours()}:${fecha_actual.getMinutes()}`
        const nuevo_mensaje = {
            emisor: 'YO',
            hora: getFormattedDateHHMM(),
            id: uuidv4(),
            texto: inf_message.content,
            status: 'enviado'
        }
        let hayErrores = false
        if (!nuevo_mensaje.texto){
            setErrors((prevStateErrors)=>{return{...prevStateErrors, texto: "Campo incompleto"}
        })
            hayErrores = true
        }

        if (!hayErrores){//impedimos que se envie un mensaje vacio
            setErrors({texto:null})
            setMensajes([...mensajes, nuevo_mensaje])
            console.log(mensajes)
        }

    }
    const contacts = [
        {
            nombre: 'pedro',
            id: 1,
            foto: "https://images.unsplash.com/photo-1450500392544-c2cb0fd6e3b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            mensajes: [
                {
                    emisor: 'YO',
                    hora: '23:10',
                    id: 1,
                    texto: 'Hola que tal?',
                    status: 'visto'
                },
                {
                    emisor: 'USUARIO',
                    hora: '23:11',
                    id: 2,
                    texto: 'Si, hoy aprendi estados',
                    status: 'visto'
                },
                {
                    emisor: 'YO',
                    hora: '23:12',
                    id: 3,
                    texto: 'Eso que significa :nerd_face:?',
                    status: 'no-visto'
                },
                {
                    emisor: 'YO',
                    hora: '23:13',
                    id: 4,
                    texto: 'Estas ahi?',
                    status: 'no-recibido'
                },
            ]
        },
        {
            nombre: 'maria',
            id: 2,
            foto: "https://images.unsplash.com/photo-1450500392544-c2cb0fd6e3b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            mensajes: [
                {
                    emisor: 'YO',
                    hora: '23:10',
                    id: 1,
                    texto: 'Hola que tal?',
                    status: 'visto'
                },
                {
                    emisor: 'USUARIO',
                    hora: '23:11',
                    id: 2,
                    texto: 'Si, hoy aprendi estados',
                    status: 'visto'
                },
                {
                    emisor: 'YO',
                    hora: '23:12',
                    id: 3,
                    texto: 'Eso que significa :nerd_face:?',
                    status: 'no-visto'
                },
                {
                    emisor: 'YO',
                    hora: '23:13',
                    id: 4,
                    texto: 'Estas ahi?',
                    status: 'no-recibido'
                },
            ]
        }
    ]
    const contacto_seleccionado = contacts.find( (contact) =>{
        return contact.id == contact_id
    })

  return (
    <div className="chats-screen">
        <div className="chats-list-container ">
            <div className="chats-header">
                <h1>Chats</h1>
            </div>
            <input type="search" placeholder="search"/>
            <ContactsList contacts={contacts}/>
        </div>
        <div className="chat-container">
            <div className="chat-header">
                <h1>Usuario</h1>
            </div>
            <MessagesList messages={contacto_seleccionado.mensajes}/>
            <form  onSubmit={handleSendNewMessage} className="new-message"action="">
                <input type="text" id="content" name="content" placeholder="Escribe un mensaje" className="new-message-input" />
                {errors.texto && <span>Error</span>}
                <button type="submit">✔</button>
            </form>
        </div>
    </div>
  )
}




export default ChatScreen