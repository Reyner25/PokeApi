import React, { useEffect, useState } from 'react'
import './componentsCss/Tarjeta.css'


export const Tarjeta = () => {

    const [number, setNumber] = useState(10)
    const [pokemonName, setpokemonName] = useState('')
    const [pokemoImg, setpokemoImg ] = useState('')




    /*LLAMAR API */

  useEffect(()=>{

    fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`)
    .then(result=>result.json())
    .then(data=>setpokemonName(data))
    
  },[number])

//Hacer una solicitud solo de la Imagen
  useEffect(()=>{

    fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`)
    .then(result=>result.json())
    .then(data=>setpokemoImg(data.sprites.front_default))
    
  },[number])


 

  return (
    <>      
      <div className='tarjeta-pokemon'>

        <p className='nombre'>{number} - {pokemonName.name}</p>
        <img className='imagen'   src={pokemoImg} alt="" />
      
      <div className='botones'>
        <button className='btnmenos' onClick={ ()=>{setNumber(number -1)}}> Back</button>
        <button className='btnmas' onClick={ ()=>{setNumber(number +1)}}> Next</button>
        
      </div>
        
      </div>
    </>
  )
}
