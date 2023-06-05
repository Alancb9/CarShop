import React, {Fragment} from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import FormClient from './components/FormClient.jsx';
import FormVehiculo from './components/FormVehiculo.jsx';
import Servicios from './components/Servicios.jsx';
import OrdenTrabajo from './components/OrdenTrabajo.jsx';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/cliente">
                Datos del cliente
              </Link>
            </li>
            <li>
              <Link to="/vehiculo">
                Datos del vehículo
              </Link>
            </li>
            <li>
              <Link to="/servicios">
                Selección de servicios
              </Link>
            </li>
            <li>
              <Link to="/orden">
                Orden de trabajo
              </Link>
            </li>
          </ul>
        </nav>

        {/* <Routes >
          <Route exact path="/cliente">
            <FormClient />
          </Route>
          <Route path="/vehiculo">
            <FormVehiculo />
          </Route>
          <Route path="/servicios">
            <Servicios />
          </Route>
          <Route path="/orden">
            <OrdenTrabajo />
          </Route>
        </Routes> */}
        <Fragment>
          <Routes>
            <Route exact path='/cliente' element={<FormClient />}/>
            <Route exact path='/vehiculo' element={<FormVehiculo />}/>
            <Route exact path='/servicios' element={<Servicios />}/>
            <Route exact path='/orden' element={<OrdenTrabajo />}/>
          </Routes>
        </Fragment>
      </div>
    </BrowserRouter>
  );
}

export default App;
