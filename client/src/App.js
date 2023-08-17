import './App.css';
import { useState } from 'react';
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';



// function App() {

// const [nombre,setNombre] = useState("");
// const [cantidad,setCantidad] = useState(0);
// const [categoria,setCategoria] = useState("");
// const [notas,setNotas] = useState("");


// const [perfumeList,setPerfumes] = useState([]);

// const add = () =>{
//   Axios.post("http://localhost:3001/create", {
//     nombre:nombre,
//     cantidad:cantidad,
//     categoria:categoria,
//     notas:notas
//   }).then(()=>{

//     alert("perfume registrado");
//   });
// }

// const getPerfumes = () =>{
//   Axios.get("http://localhost:3001/perfumes").then((response)=>{
//      setPerfumes(response.data);
//   });
 
// }



  // return (
  //   <div className="container">
   
    {/* <div className="card text-center">
        <div className="card-header">
          GESTION DE PERFUMES
        </div>
        <div className="card-body">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Nombre:</span>
              <input type="text" 
              onChange={(event)=>{
                setNombre(event.target.value);
              }}
              className="form-control" placeholder="" aria-label="cantidad" aria-describedby="basic-addon1" />
              </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon2">Cantidad:</span>
              <input type="number" 
              onChange={(event)=>{
                setCantidad(event.target.value);
              }}
              className="form-control" placeholder="" aria-label="categoria" aria-describedby="basic-addon1" />
            </div>  
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon2">Categoria:</span>
              <input type="text" 
              onChange={(event)=>{
                setCategoria(event.target.value);
              }}
              className="form-control" placeholder="" aria-label="notas" aria-describedby="basic-addon1" />
            </div>  
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon2">Notas:</span>
              <input type="text" 
             onChange={(event)=>{
              setNotas(event.target.value);
            }}
              className="form-control" placeholder="" aria-label="Anios" aria-describedby="basic-addon1" />
            </div>  
         
          

             
            

        
        </div>
        <div className="card-footer text-muted">
        <button className='btn btn-primary' onClick={add}>Registrar</button>
       
   
        </div>
    </div>

        <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">cantidad</th>
                <th scope="col">categoria</th>
                <th scope="col">notas</th>
                <th scope="col">Ubicación</th>
              </tr>
            </thead>
            <tbody>

            {
              
         perfumeList.map((val,key)=>{
           return  <tr key={val.id}>
                      <th scope="row">{val.id}</th>
                      <td>{val.nombre}</td>
                      <td>{val.cantidad}</td>
                      <td>{val.pais}</td>
                      <td>{val.notas}</td>
                   
           
                   </tr>
          })
         }
             
            </tbody>

        </table> */}
//     </div>
//   );
// }

// export default App;
