import React from 'react'
import { Container, row, Col, CardColumns } from "reactstrap";

//css
import './RepairUserView.css'

//img 
import placa from '../img/placa.jpg'
import Rp from '../img/Rp.jpg'
import ed from '../img/ed.jpg'
import perfil_Repair from '../img/perfil_Repair.png'
import estrellas from '../img/estrellas.png'


function RepairUserView() {
  return (
    <div className="col-md-12 col-ms-12">
      <h1 className="name-user-1">Nombre del reparador</h1>
      <hr className="solid-divid"></hr>


      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row row-cols-1 row-cols-md-12">
              <div className="col mb-4 card-carl">
                <div className="card">
                  <img
                    src={perfil_Repair}
                    className="imangen-user card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Carl Cox@gmail.com
                      <br></br>
                      Domicilio
                      <br></br>
                      Ciudad
                    </p>
                    <img
                      src={estrellas}
                      className="imangen-star card-img-top"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cards-user-3 col col-md-8">
            <div className="col-sm-12 col-md-12">
              <div className="card cards-user-v">
                <div className="card-body">
                  <div className="font-text-user">
                    <h5 className="card-title">Reparaciones</h5>
                  </div>
                  <p className="card-text">
                    This is a simple hero unit, a simple jumbotron-style...
              </p>
                  <div className="btn-cards">
                    <button
                      className="btn-cards"
                      type="button"
                      className="btn btn-danger"
                    >
                      Danger
                </button>
                    <button
                      className="btn-cards"
                      type="button"
                      className="btn btn-outline-danger"
                    >
                      BTN
                </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-dep">Actualizaciones</h1>
      <p className="color_linea"></p>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={placa} className="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={ed} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Rp} className="d-block w-100" alt="..." />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <h1 className="text-dep">Certificaciones y Experiencia</h1>
      <div className="cards-user-3 col col-md-8">
        <div className="col-sm-12 col-md-12">
          <div className="card cards-user-v">
            <div className="card-body">
              <div className="font-text-user">
                <h5 className="card-title">Certificacion</h5>
              </div>
              <p className="card-text">
                This is a simple hero unit, a simple jumbotron-style...
              </p>
              <div className="btn-cards">
                <button type="button" className="btn btn-outline-danger">
                  BTN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cards-user-3 col col-md-8">
        <div className="col-sm-12 col-md-12">
          <div className="card cards-user-v">
            <div className="card-body">
              <div className="font-text-user">
                <h5 className="card-title">Certificacion</h5>
              </div>
              <p className="card-text">
                This is a simple hero unit, a simple jumbotron-style...
              </p>
              <div className="btn-cards">
              
                <button
                  className="btn-cards"
                  type="button"
                  className="btn btn-outline-danger"
                >
                  BTN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RepairUserView







  // < div class="col" >
  //   { " "}
  //   < div className = "row row-cols-1 row-cols-md-12" >
  //     <div className="col mb-4">
  //       <div className="card color-font">
  //         <div className="card-body">
  //           <h5 className="card-title text-ali">Reparacion</h5>
  //           <p className="card-text">
  //             This is a simple hero unit, a simple jumbotron-style...
  //                   </p>
  //           <hr className="solid-divi-cards"></hr>

  //           <p className="text-cards">texto de reñeno</p>
  //           <button
  //             type="button"
  //             className="user-boton btn btn-outline-danger"
  //           >
  //             Danger
  //                   </button>
  //         </div>
  //       </div>
  //     </div>
  //           </ >
  // <div className="row row-cols-1 row-cols-md-12">
  //   <div className="col mb-4">
  //     <div className="card color-font">
  //       <div className="card-body">
  //         <h5 className="card-title text-ali">Reparacion</h5>
  //         <p className="card-text">
  //           This is a simple hero unit, a simple jumbotron-style...
  //                   </p>
  //         <hr className="solid-divi-cards"></hr>

  //         <p className="text-cards">texto de reñeno</p>
  //         <button
  //           type="button"
  //           className="user-boton btn btn-outline-danger"
  //         >
  //           Danger
  //                   </button>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  //         </div >