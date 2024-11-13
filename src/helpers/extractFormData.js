const extractFormData = (form_jsx) =>{
     // .target es el elemento html que emitió el evento, en este caso el form
     const form_data = new FormData(form_jsx)//Es cmo una función que devuelve un objeto con el que puedo manipular mi formulario. Espera recibir el formulario
     
     //Devuelve una lista de strings correspondientes a los nombres de mis campos
     const form_keys = form_data.keys().toArray()
     //Creamos un objeto para ir llenando con los valores y los campos

     //Creamos un objeto vacío que se llenará con los nombres y valores de los campos
     const form_values = {}
     for (let key of form_keys) {
         //Creo nuevas propiedades
         form_values[key] = form_data.get(key)
     }
     return form_values
}


export default extractFormData
