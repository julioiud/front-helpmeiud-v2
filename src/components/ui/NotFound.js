import React from 'react'

export default function NotFound() {
  return (
    <div className='container'>
        <h1 className='d-none'>None</h1>
        <h2>404 Not Found!</h2>
        <figure className='figure'>
            <img 
                width="50%"
                src="https://c.tenor.com/bDlzu1tRfowAAAAC/negrito-llorando-african-kid-crying.gif" 
                alt=""
                className='figure-img img-fluid d-block'
            />
            <figcaption 
                className='figure-caption mx-auto'
            >
                Página no disponible
            </figcaption>
        </figure>
    </div>
  )
}
