import React from 'react'
import { Image } from 'react-bootstrap'

const Home = () => {
  return (
    <>
        <h1>Bienvenido a <span style={{fontWeight: 'bold'}}>Happy Cake</span> </h1>
        <p>El lugar de los pasteles felices</p>
        <Image style={{width: '20%', height: "20%"}}  src="https://upload.wikimedia.org/wikipedia/commons/4/49/Cartoon_Happy_Birthday_Cake.svg" />
    </>
  )
}

export default Home