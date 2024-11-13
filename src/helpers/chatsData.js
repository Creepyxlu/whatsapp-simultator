
const [errors, setErrors] = useState({content: null})
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

