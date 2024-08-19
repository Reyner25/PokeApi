import React, { useEffect, useState } from 'react'
import './componentsCss/Todos.css'
import { Link } from 'react-router-dom'

export const Todos = () => {

    const [pokemones, setPokemones] = useState([])




    useEffect(()=>{
      //hacer la solicitud sin async await
      /*fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then(result=>result.json())
      .then(data=>SetlistaPokemon(data))
       */
      let getPokemones = async () =>{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
         const listaPokemon = await response.json()
         const   {results}  = listaPokemon

         
         const newPokemones = results.map(async(pokemon) => {
            const response = await fetch(pokemon.url)
            const poke = await response.json()

            return{  
              id: poke.id,
              name:poke.name,
              img:poke.sprites.other.dream_world.front_default      
             }   

         })
         setPokemones(await Promise.all(newPokemones))                     
      }
      
          
        getPokemones()

    },[])
      
    
  return (
    <div>
          <h1 className='titulo'>POKEMON STORE</h1>

      <section className='listadoPokemones'>
      { 
        pokemones.map(pokemon => {

          return(

            <div className='pokemon'  key={pokemon.id}>
              <Link to={"ver/"+pokemon.id}>
                <img className='imgPokemon' src={pokemon.img} alt={pokemon.name} /> 
              </Link>
              <p>{pokemon.name}</p>                       
            </div>
          )
        } )       
      }
      </section>
           
    </div>
  )

}
