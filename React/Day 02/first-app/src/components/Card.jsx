import React from 'react'
import "./Card.css"
const Card = (props) => {
  return (
    <div className='card' style={{overflow:"hidden"}}>
        <img src="https://www.goodwin.edu/enews/wp-content/uploads/2023/03/what-does-a-medical-coder-do-tiny-scaled.jpg" alt="" width={393} style={{border: "2px solid black"}} />
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>

  )
}

export default Card
