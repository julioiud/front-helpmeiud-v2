import React from 'react'


export default function Register() {
  return (
    <div className="container">
       
            <div className="col-md-7 col-lg-8 my-3">
                <h1 className="d-none">1</h1>
                <h2 className="d-none">2</h2>
                <h3 className="d-none">3</h3>
                <h4 className="mb-3">Regístrate</h4>
                <form 
                className="needs-validation" 
                
                autocomplete="off"
                >
                    <div className="row g-3">
                        <div className="col-sm-6">
                        <label htmlFor="nombre" className="form-label">Nombre<span className="text-muted">*</span></label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="nombre"
                            placeholder="Juanito" 
                            required=""
                            name="nombre"
                         
                        />
                        <div className="invalid-feedback d-block">
                            
                        </div>
                        </div>

                        <div className="col-sm-6">
                        <label htmlFor="apellido" className="form-label">Apellido<span className="text-muted">*</span></label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="apellido" 
                            placeholder="Doe" 
                            required=""
                            name="apellido"
                            
                        />
                        <div className="invalid-feedback d-block">
                           
                        </div>
                        </div>

                        <div className="col-12">
                        <label htmlFor="username" className="form-label">Email <span className="text-muted">*</span></label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="username" 
                            placeholder="you@example.com"
                            name="username"
                         
                            autoComplete="off"
                        />
                        <div className="invalid-feedback d-block">
                            
                        </div>
                        </div>

                        <div className="col-12">
                        <label htmlFor="password" className="form-label">Contraseña<span className="text-muted">*</span></label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="password" 
                            placeholder="" 
                            required=""
                            name="password"
                        
                            autocomplete="off"
                        />
                        <div className="invalid-feedback d-block">
                            
                        </div>
                        </div>

                        <div className="col-12">
                        <label htmlFor="fechaNacimiento" className="form-label">Fecha de Nacimiento <span className="text-muted">*</span></label>
                        <input 
                           
                            type="date" 
                            className="form-control" 
                            id="fechaNacimiento" 
                            name="fechaNacimiento"
                            
                        />
                        <div className="invalid-feedback d-block">
                           
                        </div>
                        </div>
                    </div>

                    <hr className="my-4"/>

                    <div className="form-check">
                        <input 
                            type="checkbox" 
                            className="form-check-input" 
                            id="save-info"
                            
                        />
                        <label className="form-check-label" htmlFor="save-info">Aceptar <a href="https://iudigital.edu.co"> términos y condiciones </a></label>
                    </div>

                    <hr className="my-4"/>                    
                    <button
                        
                        type="submit"
                        className="btn btn-primary w-50 btn-lg button-standard"
                    >
                    
                        Enviar
                    </button>
                </form>
                <a href="/login">
                    <p>¿Ya estás registrado?</p>
                </a>
            </div>
        </div>
  )
}
