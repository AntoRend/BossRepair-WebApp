import React from 'react'
import { Container, Row, Col, CardColumns } from "reactstrap";

//css
import './RepairViewsC.css'

//pages

//img
import jerome from './img/Jerome.jpg'
import estrellas from './img/estrellas.png'




function RepairViewsC() {
  return (
    <div className="container">
      <div className="row">
        <div className="rol">
          <h1 className="text-repair-3">Categoria</h1>
          <p className="text-repair-3">Reparadores de categoria</p>
          <hr className="divid-text-2"></hr>
        </div>
      </div>

      <div class="card-group">
        <div class="card">
          <img src={jerome} className="card-img-top" alt="..." />
          <div class="card-body font-color">
            <h5 class="card-title">Nombre del reparador</h5>
            <hr></hr>
            <img src={estrellas} className="card-img-top" alt="..." />
            <p class="card-text">
              <small class="text-muted">$$$$$$$$</small>
            </p>
            <button
              type="button"
              className="btn btn-outline-danger btn-repair-card"
            >
              Enviar
            </button>
          </div>
        </div>

        <div class="card">
          <img src={jerome} className="card-img-top" alt="..." />
          <div class="card-body font-color">
            <h5 class="card-title">Nombre del reparador</h5>
            <hr></hr>
            <img src={estrellas} className="card-img-top" alt="..." />
            <p class="card-text">
              <small class="text-muted">$$$$$$$$</small>
            </p>
            <button
              type="button"
              className="btn btn-outline-danger btn-repair-card"
            >
              Enviar
            </button>
          </div>
        </div>

        <div class="card">
          <img src={jerome} className="card-img-top" alt="..." />
          <div class="card-body font-color">
            <h5 class="card-title">Nombre del reparador</h5>
            <hr></hr>
            <img src={estrellas} className="card-img-top" alt="..." />
            <p class="card-text">
              <small class="text-muted">$$$$$$$$</small>
            </p>
            <button
              type="button"
              className="btn btn-outline-danger btn-repair-card"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
      <div class="card-group">
        <div class="card">
          <img src={jerome} className="card-img-top" alt="..." />
          <div class="card-body font-color">
            <h5 class="card-title">Nombre del reparador</h5>
            <hr></hr>
            <img src={estrellas} className="card-img-top" alt="..." />
            <p class="card-text">
              <small class="text-muted">$$$$$$$$</small>
            </p>
            <button
              type="button"
              className="btn btn-outline-danger btn-repair-card"
            >
              Enviar
            </button>
          </div>
        </div>{" "}
        <div class="card">
          <img src={jerome} className="card-img-top" alt="..." />
          <div class="card-body font-color">
            <h5 class="card-title">Nombre del reparador</h5>
            <hr></hr>
            <img src={estrellas} className="card-img-top" alt="..." />
            <p class="card-text">
              <small class="text-muted">$$$$$$$$</small>
            </p>
            <button
              type="button"
              className="btn btn-outline-danger btn-repair-card"
            >
              Enviar
            </button>
          </div>
        </div>{" "}
        <div class="card">
          <img src={jerome} className="card-img-top" alt="..." />
          <div class="card-body font-color">
            <h5 class="card-title">Nombre del reparador</h5>
            <hr></hr>
            <img src={estrellas} className="card-img-top" alt="..." />
            <p class="card-text">
              <small class="text-muted">$$$$$$$$</small>
            </p>
            <button
              type="button"
              className="btn btn-outline-danger btn-repair-card"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RepairViewsC