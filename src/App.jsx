import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormClient from './components/FormClient.jsx';
import FormVehiculo from './components/FormVehiculo.jsx';
import Servicios from './components/Servicios.jsx';
import OrdenTrabajo from './components/OrdenTrabajo.jsx';
import Exito from './components/Exito.jsx';
import { Navbar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './components/styles/App.css'


function App() {
  return (
    <BrowserRouter>
      <Navbar className="navbar-custom py-3" variant="dark">
        <span className="navbar-brand ps-5">CarShop</span>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end pe-5">
          <Button variant="primary" className="me-2">Botón 1</Button>
          <Button variant="secondary">Botón 2</Button>
        </Navbar.Collapse>
      </Navbar>

      <section className="py-5 text-center wipe-in-top-right section-custom">
        <h2>¡Bienvenido a la página de vehículos!</h2>
        <p>Aquí puedes ingresar los datos de tu vehículo.</p>
      </section>

      <main className="container">
        <Fragment>
          <Routes>
            <Route exact path='/' element={<FormClient />} />
            <Route exact path='/cliente' element={<FormClient />} />
            <Route exact path='/vehiculo' element={<FormVehiculo />} />
            <Route exact path='/servicios' element={<Servicios />} />
            <Route exact path='/orden' element={<OrdenTrabajo />} />
            <Route exact path='/exito' element={<Exito />} />
          </Routes>
        </Fragment>
      </main>


      <footer id="pieDePagina" className="d-flex flex-wrap justify-content-between align-items-center py-4 border-top">
        <span className="text-white mb-3 mb-md-0">&copy; Kevin Carriel, FullStack Developer</span>
      </footer>

      <a href="#" class="fixed-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
        </svg>
      </a>


    </BrowserRouter>
  );
}

export default App;
