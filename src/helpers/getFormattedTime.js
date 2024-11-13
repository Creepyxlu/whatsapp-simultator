export const getFormattedDateHHMM = () =>{
    const fecha_actual = new Date()
    return `${fecha_actual.getHours()}:${fecha_actual.getMinutes()}`  
}
