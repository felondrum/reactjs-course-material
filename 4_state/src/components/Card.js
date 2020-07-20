import React from 'react'

const Card = props => [
    <hr style={{width: '100px'}}/>,
    <div>
        <h1>Карточка {props.number}</h1>
        <p>{props.title}</p>
        <button onClick={props.onChengeTitle}>Нажми на меня!</button>
    </div>
]
export default Card;
