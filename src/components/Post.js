import React from "react"

export default function Post({image,name, setSelectedItemName}){

    // const handleClick = (otterName) =>{
    //     // console.log("Hello thanks for clicking " + otterName);
    //     window.alert("Hello thanks for clicking " + setSelectedItemName);
    // }
    const onMouseEnter = (otterName) =>{
               return console.log("hello you hovered " +  otterName);          
    }

    const onMouseLeave = (otterName) =>{
        return console.log("hello you left " +  otterName);          
}

    return(
        <li className="post-component" onMouseEnter={() =>onMouseEnter(name)} onMouseLeave={()=>onMouseLeave(name)} >
            <button id="btn" onClick={()=>setSelectedItemName(name)}>
                <img src={image} alt={name} width="200px" height="200px" />
                <p className="post-name">{name}</p>
            </button>
        </li>
    );

}