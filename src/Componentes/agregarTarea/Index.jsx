import React, { useState } from 'react';
import "./styles.css";


const AgregarTarea = () => {
  const [tarea, setTarea] = useState('');
  const [tareas, setTareas] = useState([]);

  const agregarTarea = () => {
    if (tarea !== '') {
      setTareas([...tareas, tarea]);
      setTarea('');
    }
  };

  //dar check a tarea
  const Check = (id) => {
    const checked = [...tarea];
    let tareas = checked.find((tareas) => tareas.id === id);
    tareas = !tareas;
    setTarea(checked);
  };


  //AQUI devuelve la posicion de la tarea no un id posi==index
  const eliminarTarea = (posi) => {
    let tareasEliminadas = [];
    for (let i = 0; i < tareas.length; i++) {

        if (i !== posi) {
            tareasEliminadas.push(tareas[i]);
        }
      }
  
      setTareas(tareasEliminadas);
  
  };

  

  
  return (
    <div className='task'>
      <input
        type="text"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
      />
      <button onClick={agregarTarea}>Agregar tarea</button>
      
      <table>
       
        <tbody>
          {tareas.map((tarea, index) => (
            <tr key={index}>

                <input type= "checkbox" 
                checked={tareas.isComplete} onChange={()=> Check(tarea.id)}>
                    
                </input>
                
                <td>{tarea}</td>

              <button className='dtl' onClick={ () => eliminarTarea(index)} >🗑</button>
             
            </tr>
            
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default AgregarTarea;