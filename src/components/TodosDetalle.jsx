import React, { useEffect, useState } from 'react';
//CSS
import './componentsCss/todosDetalle.css'
//REACT-ICOONS
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'



export const TodosDetalle = () => {

    const [pokemon, setPokemon]= useState([])
    const [imgPokemon, SetimgPokemon ] = useState("")
    const [habilidad, sethabilidad ] = useState("")
    const [tipo, setTipo ] = useState("")

   const {id} = useParams()

   let aumentarId = parseInt(id) + 1;
   let decrementarId = id -1;

   
   

    useEffect(()=>{


        let getPokemons = async() =>{

                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
                const peticionPokemon = await response.json()
                const data = peticionPokemon

               //obtenerImagen del pokemon
                const imgCompleta =  peticionPokemon.sprites.other.dream_world.front_default
               //obtner habilidad del pokemon
               const habili = peticionPokemon.moves[0].move.name
               //obtner tipo
               const tipo = peticionPokemon.types[0].type.name


                setPokemon(data)
                SetimgPokemon(imgCompleta)

                sethabilidad(habili)
                setTipo(tipo)

            }

        getPokemons();

    },[aumentarId,decrementarId])

        
    

  return (

    <div className='TodosDetalle'>
        <button className='btnAnterior' ><Link to={'/ver/'+decrementarId}><FaArrowLeft className='flechaAnterior'/></Link></button>
        <section className='detallePokemon'> 

            <div className='headerPokemon'>
                <p className='txtNombrePokemon'>{pokemon.name} </p>
                <p className='txtExperiencia'>Exp: {pokemon.base_experience}</p>
            </div>
                        
            <img className='imgPokemonDetalles' src={imgPokemon} alt="" /> 
            
            <p className='txtTipo'>Tipo: {tipo} </p>
            <p className='txtHabilidad'>Habilidad: {habilidad}</p>
            <p className='txtPeso'>Peso: {pokemon.weight} LB</p>  

                        
        </section>
        <button className='btnSiguiente'><Link to={'/ver/'+aumentarId}><FaArrowRight  className='flechaSiguiente'/></Link></button>

    </div>
  )
}
