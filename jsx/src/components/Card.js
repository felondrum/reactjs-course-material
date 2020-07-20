import React from 'react'

const Card = props => [
    <hr style={{width: '100px'}}/>,
    <div>
        <h1>Карточка {props.number}</h1>
        <p>{props.title}</p>
        { props.attr && <p>{props.attr.map(attr => <span>{attr}&nbsp;</span>)}</p> }
        { props.children && props.children.map(child => <strong>{ child }</strong>) }
    </div>
]
export default Card;
