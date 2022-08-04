import React from 'react'

export default function LoginApp() {
  return (
    <div className="container">
            <div className="col-md-7 col-lg-8 my-3">
                <h1 className="d-none">1</h1>
                <h2 className="d-none">2</h2>
                <h3 className="d-none">3</h3>
                <h4 className="mb-3">Ingresa</h4>
                <form 
                    
                >
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input 
                       
                        name="username"
                        
                        
                        type="text" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp"
                    />
                    <div className="invalid-feedback d-block">
                        
                    </div>
                </div>
                
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input
                       
                        name="password"
                       
                        type="password" 
                        className="form-control" 
                        id="exampleInputPassword1"
                    />
                    <div className="invalid-feedback d-block">
                        
                    </div>
                </div>
                <button
                    
                    type="submit"
                    className="btn btn-primary button-standard"
                >
                
                    Enviar
                </button>
                </form>
                <a href="/register">
                    <p>¿No estás registrado?</p>
                </a>
            </div>
        </div>
  )
}
