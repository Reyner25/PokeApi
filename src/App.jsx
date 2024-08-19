import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Tarjeta } from './components/Tarjeta'
import { Navbar } from './components/template/Navbar'
import { Todos } from './components/Todos'
import { TodosDetalle } from './components/TodosDetalle'

function App() {
  

  return (
    <>

       
    
    <BrowserRouter>

      <Navbar/>
      <Routes>  
        <Route path='/' element = {<Todos/>}> </Route>
        <Route path='/Pokemon' element= {<Tarjeta/>}/> 

        <Route path='/ver/:id' element= {<TodosDetalle/>}/> 
      </Routes>

    </BrowserRouter>
        
    </>
  )
}

export default App
