import { use, useEffect, useState } from 'react'



function App() {
  const [datoGato, setDato] = useState(null)
  const [errorDato, setErrorDato] = useState(null)

  const obtenerFact = async () =>{

    try {
      const respuesta = await fetch('https://catfact.ninja/fact')
      const data = await respuesta.json()

      if(Object.keys(data).length ===0){
        setErrorDato("datos no encontrados")
      }else{
        setDato(data.fact)
      }
    } catch (error) {
      setErrorDato("datos no encontrados")
    }
  }

  const primerasPalabras = (datoGato) =>{

    if(datoGato == null){
    return "parece ser que no hay datos encontrados"
    }
    const  palabras = datoGato.split(" ")
    const primeras = [] ;

    for(let i = 0;i<=2;i++ ){
    primeras.push(palabras[i]) 
    }

    return primeras

  }

  console.log(primerasPalabras(datoGato))
 
  useEffect(()=>{

    obtenerFact()
  },[])

  return (
    <>
      <div className='container'>
        <div  className='header'>

        </div>
        <div className='body'>

          <h1>
           {errorDato ? (
            <p style={{color: "red"}}>{errorDato}</p>

           ) : datoGato ? (
            <p>{datoGato}</p>

           ) : (

            <p>Cargando...</p>

           )}
          </h1>
          
        </div>
      </div>
    </>
  )
}

export default App
