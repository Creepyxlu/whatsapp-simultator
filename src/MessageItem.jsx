import React from 'react'

const MessageItem = ({emisor,texto,hora,id,status}) => {

    let StatusRender = () =>{
        if (status === 'enviando'){
            return <span>Enviando</span>
        }
        else if (status === 'enviado'){
            return <span>Enviado</span>
        }
        else if (status === 'recibido' ){
            return <span>Recibido</span>
        }
        else{
            return <span>Leído</span>
        }
    }

  return (
    <div className={`message-item  enviado-por-${emisor}`}>
        <p className='content'>{texto}</p>
        {emisor === "YO"  
        ?
            <div className="details">
                <span>{hora}</span>
                <span className='puntito'>·</span>
                <StatusRender/>
            </div>  
            :         
            <div className="details">
                <span>{hora}</span>
        </div>
        }
    </div>
  )
}

export default MessageItem