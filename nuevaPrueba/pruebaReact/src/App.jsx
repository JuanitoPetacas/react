import { use, useEffect, useState } from 'react'



function App() {
  const [count, setCount] = useState(0)

  const [data, setData] = useState(null)

  const [dataError, setDataError] = useState(null)

  const [pokemon, setPokemon] = useState("")


  const dataPokemon = async () =>{ 

    const url = 'https://pokeapi.co/api/v2/pokemon/'

    const request = await fetch(url+""+pokemon)

    const response = await request.json()
     
    if(Object.keys(response).length === 0){

      setDataError("Datos no encontrados")

    }
    else{

      setData(response)
      
    }
  }

  useEffect(()=>{
  dataPokemon()
  console.log(data)
  },[])

  return (
    <>
    <table className='tablita'>
     <thead>
      <th>Nombre</th>
      <th>Url</th>
     </thead>
      <tbody>
     {dataError ?(
     <tr>
      <th style={{color:red, display:'none'}}>{dataError}</th>
     </tr>
    ): data ? (

      (data.results.map((element)=>(

        <tr>
          <td>
           {element.name}
          </td>
          <td>
           {element.url}
          </td>

        </tr>
        

        


    )))

    ):(

      <tr>
        <th>...Cargando</th>
      </tr>
    )}
      </tbody>
    </table>
   
    </>
  )
}

export default App
