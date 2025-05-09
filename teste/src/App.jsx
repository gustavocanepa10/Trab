import React, { useState } from "react"
import {useForm, Controller} from 'react-hook-form'



export default function App() {
  const {control, handleSubmit} = useForm({
    defaultValues : {
      sex : '',
      alt : '',
      weight : ''

    }
  })
  const [result, setResult] = useState("")
  const [classi, setClassi] = useState("")


  function onSubmit(data) {
    console.log(data)

    
      const sexo = data.sex
      const altura = parseFloat(data.alt)
      const peso = parseFloat(data.weight)
    

    const imc =  peso / (altura * altura);




    let classificação = ""

   
      if (imc < 19.1) {
          classificação = "abaixo do peso";
      } else if (imc < 25.8) {
          classificação =  "peso normal";
      } else if (imc < 27.3) {
          classificação =  "marginalmente acima do peso";
      } else if (imc < 32.3) {
          classificação =  "acima do peso ideal";
      } else {
          classificação =  "Obeso";
      }

    

    

    setResult(imc.toFixed(2))

    setClassi(classificação)


    
  }


  






  return (
    <div>

      <h2>Calculadora IMC</h2>


      <form onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor="sex">Sexo:</label>
        <Controller control={control} name="sex" render = {({field}) => (
          <input required  type="text" placeholder="digite o seu sexo aqui"  {...field}/> 
  )}  />
        
        <label htmlFor="alt">Altura:</label>
       
        <Controller control={control} name="alt" render = {({field}) => (
          <input required type="number" placeholder="0.00" {...field}  /> 
  )} />
        <label htmlFor="weight">Peso:</label>

        <Controller control={control} name="weight" render = {({field}) => (
          <input required type="number" {...field} placeholder="0.00"  /> 
  )} />


      <button type="submit" >
        Salvar
      </button>
       

      </form>


      {result && (
        <div className="result-container">
          <p>IMC : {result}</p>
        </div>
      )}


      {classi && (
        <div>
          <p>
            Classificação : <br></br>{classi}
          </p>
        </div>
      )}



     
      

      


      
    </div>
  )
}

