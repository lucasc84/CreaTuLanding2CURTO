
//Item es el componente que representa cada producto individual en una tarjeta
//Recibe la prop "prod" que contiene los detalles del producto
//Incluye un enlace para ver más detalles del producto

import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const Item = ({prod}) => {
    console.log(prod)
  return (
     <Card bg = "info" border="primary" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.image}/>
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>
$ {prod.price},00
        </Card.Text>
        <Link className ='btn btn-primary' to={`/item/${prod.id}`}>Ver detalle</Link>
        </Card.Body>
    </Card>
  )
}

export default Item
