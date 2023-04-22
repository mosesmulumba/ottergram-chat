import React from "react"

export default function Post({image,name}){
    return(
        <li className="post-component">
            <button type='submit'>
                <img src={image} alt={name} width="400px" height="400px" />
                <p className="post-name">{name}</p>
            </button>
        </li>
    );

}