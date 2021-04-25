import React, { useState } from 'react';
import { Button, 
	Modal,
	Form,
	Header,
	Input,
	Field,
    Select,
    Option,
    Label
} from 'semantic-ui-react';
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form"

export default function ValidationComponent(){

   // const fechaDeHoy = () => {new Date()}
    const { register, handleSubmit,errors } = useForm();
    const [startDate, setStartDate] = useState(new Date());
    const onSubmit = data => console.log(data);
    
    
    const fechaActual = () => {
      let date = new Date()
      let day = date.getDate()
      let month = date.getMonth() + 1
      let year = date.getFullYear()  
      return `${day}/${month}/${year}`
    } 
    const validarFecha = () => {
      if (startDate <= fechaActual ){
        return true
      }else{
        return false 
      }
    }

	return (

    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Cliente/a</label>
      <input name="Cliente" ref={register({ required: true,maxLength: 20,minLength:10})} />
      {errors.Cliente && <span>este campo es requerido y debe ingresar de 10 a 20 caracteres</span>}
      
      <br></br>
      <label>asignar trabajo</label>
      <select name="gender" ref={register}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <br></br>
      <DatePicker selected={startDate} onChange={date => setStartDate(date)} ref={register({ required:validarFecha()})} />
      <br></br>
      <input type="submit" />
    </form>


  )
	
}

 