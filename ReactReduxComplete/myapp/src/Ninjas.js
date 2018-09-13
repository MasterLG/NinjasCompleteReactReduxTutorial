import React from 'react';//In function based components we dont need Component


const Ninjas=({ninjas,deleteNinja})=>{//class Ninjas extends Component {//to use props, take it as input parameter.
    //render() {Remove these two lines,put the above arrow function and it becomes stateless(function based)
      //console.log(this.props)
      //const{name,age,belt}=this.props;
      //const {ninjas}=props;//this.props;//and we don't use this anymore
      const ninjaList=ninjas.map(ninja=>{
        if(ninja.age>20){
        return(
            <div className="ninja" key={ninja.id}>
            <div>Name: {ninja.name}</div>
            <div>Age: {ninja.age}</div>
            <div>Belt: {ninja.belt}</div>
            <button onClick={()=>{deleteNinja(ninja.id)}}>Delete Ninja</button>
          </div>
        )
        }else{
            return null;
        }
      })
      //ninjas.map(ninja=>{return ninja.age>25?(code above):null}) //another example of conditional formatting
    return (
        <div className="ninja-list">
          {ninjaList}
        </div>
    )
  //}
}

export default Ninjas;