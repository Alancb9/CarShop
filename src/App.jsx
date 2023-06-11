import React, { Fragment, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormClient from './components/FormClient.jsx';
import FormVehiculo from './components/FormVehiculo.jsx';
import Servicios from './components/Servicios.jsx';
import OrdenTrabajo from './components/OrdenTrabajo.jsx';
import Exito from './components/Exito.jsx';
import { Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './components/styles/App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';


function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipVisibleGithub, setTooltipVisibleGithub] = useState(false);

  const handleTooltipClick = () => {
    setTooltipVisible(true);
    setTimeout(() => {
      setTooltipVisible(false);
    }, 2000);
  };

  const handleGithubLinkClick = () => {
    setTooltipVisibleGithub(true);
    setTimeout(() => {
      setTooltipVisibleGithub(false);
    }, 2000);
  };


  const handleClick = () => {
    setIsDarkMode(!isDarkMode);

  };

  

  return (

    <BrowserRouter>
      <Navbar className="navbar-custom py-3 fixed-top" variant="dark">
        <span className="navbar-brand ms-5 ps-5">CarShop</span>
        <div className="ms-auto me-5 pe-5">
          <OverlayTrigger overlay={<Tooltip id="tooltip-DarkMode">DarkMode</Tooltip>} placement="bottom" show={tooltipVisible}>
            <button className={`switch ${isDarkMode ? 'active' : ''}`}
              id='switch' 
              onClick={handleClick}
              onMouseEnter={handleTooltipClick}
              >
              <span id="iconoMO"><FontAwesomeIcon icon={faSun} /></span>
              <span id="iconoMO"><FontAwesomeIcon icon={faMoon} /></span>
            </button>
          </OverlayTrigger>
        </div>
      </Navbar>



      <section className={`mt-5 py-5 text-center wipe-in-top-right section-custom ${isDarkMode ? 'dark-mode' : ''}`}>
        <h2>¡Bienvenido a la página de CarShop!</h2>
        <p>Aquí puedes ingresar los datos de tu vehículo.</p>
      </section>

      <main className={`container-fuild ${isDarkMode ? 'dark-mode' : ''}`} >
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


      <footer id="pieDePagina" className="d-flex flex-wrap justify-content-between align-items-center py-4">
        <span className="text-white ms-5 mb-3 mb-md-0">&copy; Kevin Carriel, FullStack Developer</span>
      </footer>

      <OverlayTrigger overlay={<Tooltip id="tooltip-github">Ir a GitHub</Tooltip>} show={tooltipVisibleGithub}>
        <a href="https://github.com/Alancb9/CarShop" target='_blank' class="fixed-icon me-5" onMouseEnter={handleGithubLinkClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>
      </OverlayTrigger>



    </BrowserRouter>
  );
}

export default App;
