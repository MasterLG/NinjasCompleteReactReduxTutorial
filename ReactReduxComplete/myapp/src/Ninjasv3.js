import React from 'react';//In function based components we dont need Component

const Ninjasv3=({ninjas})=>{
    return (
        <div className="ninja-list">
          {
                  ninjas.map(ninja=>{
                    return ninja.age>25
                    ?
                    (
                    <div className="ninja" key={ninja.id}>
                             <div>Name: {ninja.name}</div>
                             <div>Age: {ninja.age}</div>
                             <div>Belt: {ninja.belt}</div>
                           </div>
                    )
                    :
                    null
                  }) 
          }
        </div>
    )
  
}

export default Ninjasv3;