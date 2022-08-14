import React from 'react';
import { allLaptops } from './LaptopDatabase';

export const App: React.FunctionComponent<any> = () => {
  return (<div className='container'>
    <nav className="navbar bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
         <h1>Can it Mux?</h1>
        </a>
      </div>
    </nav>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Model</th>
          <th scope="col">Manufacturer</th>
          <th scope="col">Mux Status</th>
        </tr>
      </thead>
      <tbody>
        {allLaptops().map((laptop, index) => {
          const itemNumber = index + 1;
          return (
            <tr key={index}>
              <th scope="row">{itemNumber}</th>
              <td>{laptop.modelNumber}</td>
              <td>{laptop.manufacturer}</td>
              <td>{laptop.muxStatus}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>);
};


