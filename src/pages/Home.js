import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <>
      <div>hola mundo</div>
      <Link to={'/cursos'}>hola</Link>
    </>
  )
}

export default Home