import React from 'react'

import { Container, row, Col, CardColumns, InputGroupText } from 'reactstrap';

// Css
import './RepairViews.css'

// img
import perfil_Repair from '../img/perfil_Repair.png'
import estrellas from '../img/estrellas.png'
import ed from '../img/ed.jpg'
import perfil from '../img/perfil.jpg'

function RepairViews () {
  return (

    <div className='col-md-12 col-ms-12'>
      <h1 className='name-user-1'>Nombre del reparador</h1>
      <hr className='solid-divid' />

      <h1 className='name-user-1'>Posts de los Clientes</h1>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='row row-cols-1 row-cols-md-12'>
              <div className='col mb-4 card-carl'>
                <div className='card'>
                  <img
                    src={perfil_Repair}
                    className='imangen-user card-img-top'
                    alt='...'
                  />
                  <div className='card-body'>
                    <p className='card-text'>
                      Carl Cox@gmail.com
                      <br />
                      Domicilio
                      <br />
                      Ciudad
                    </p>
                    <img
                      src={estrellas}
                      className='imangen-star card-img-top'
                      alt='...'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='cards-user-3 col col-md-8'>
            <div className='row row-cols-1 row-cols-md-2'>
              <div className='row no-gutters respon'>
                <div className='col-md-4'>
                  <img src={perfil} class='card-img' alt='...' />
                  <button type='button' className='btn btn-outline-danger boton-repair'>Danger</button>
                </div>
                <div className='col-md-8'>
                  <div className='card-body'>
                    <h5 className='card-title'>Nombre Usuario</h5>
                    <hr />
                      <h6 class='card-title'>Titulo y Reparacion</h6>

                    <p className='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content.</p>

                  </div>
                </div>
              </div>
              <div className='row no-gutters respon'>
                <div className='col-md-4'>
                  <img src={perfil} class='card-img' alt='...' />
                  <button type='button' className='btn btn-outline-danger boton-repair'>Danger</button>
                </div>
                <div className='col-md-8'>
                  <div className='card-body'>
                    <h5 className='card-title'>Nombre Usuario</h5>
                    <hr />
                    <h6 class='card-title'>Titulo y Reparacion</h6>

                    <p className='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content.</p>

                  </div>
                </div>
              </div>
              <div className='row no-gutters respon'>
                <div className='col-md-4'>
                  <img src={perfil} class='card-img' alt='...' />
                  <button type='button' className='btn btn-outline-danger boton-repair'>Danger</button>
                </div>
                <div className='col-md-8'>
                  <div className='card-body'>
                    <h5 className='card-title'>Nombre Usuario</h5>
                    <hr />
                    <h6 class='card-title'>Titulo y Reparacion</h6>

                    <p className='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content.</p>

                  </div>
                </div>
              </div>
              <div className='row no-gutters respon'>
                <div className='col-md-4'>
                  <img src={perfil} class='card-img' alt='...' />
                  <button type='button' className='btn btn-outline-danger boton-repair'>Danger</button>
                </div>
                <div className='col-md-8'>
                  <div className='card-body'>
                    <h5 className='card-title'>Nombre Usuario</h5>
                    <hr />
                    <h6 class='card-title'>Titulo y Reparacion</h6>

                    <p className='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content.</p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className='text-dep'>Reseña del Cliente</h1>
      <p className='color_linea' />
      <div
        id='carouselExampleControls'
        class='carousel slide'
        data-ride='carousel'
      >
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img src={ed} className='d-block w-100' alt='...' />
          </div>
          <div class='carousel-item'>
            <img src={perfil_Repair} className='d-block w-100' alt='...' />
          </div>
          <div className='carousel-item'>
            <img src={perfil_Repair} className='d-block w-100' alt='...' />
          </div>
        </div>
        <a
          className='carousel-control-prev'
          href='#carouselExampleControls'
          role='button'
          data-slide='prev'
        >
          <span className='carousel-control-prev-icon' aria-hidden='true' />
          <span className='sr-only'>Previous</span>
        </a>
        <a
          className='carousel-control-next'
          href='#carouselExampleControls'
          role='button'
          data-slide='next'
        >
          <span className='carousel-control-next-icon' aria-hidden='true' />
          <span className='sr-only'>Next</span>
        </a>
      </div>

      <h1 className='text-dep'>Tus ! Certificaciones y Experiencia</h1>
      <div className='cards-user-3 col col-md-8'>
        <div className='col-sm-12 col-md-12'>
          <div className='card cards-user-v'>
            <div className='card-body'>
              <div className='font-text-user'>
                <h5 className='card-title'>Certificacion</h5>
              </div>
              <p className='card-text'>
                This is a simple hero unit, a simple jumbotron-style...
              </p>
              <div className='btn-cards'>
                <button type='button' className='btn btn-outline-danger'>
                  BTN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='cards-user-3 col col-md-8'>
        <div className='col-sm-12 col-md-12'>
          <div className='card cards-user-v'>
            <div className='card-body'>
              <div className='font-text-user'>
                <h5 className='card-title'>Certificacion</h5>
              </div>
              <p className='card-text'>
                This is a simple hero unit, a simple jumbotron-style...
              </p>
              <div className='btn-cards'>

                <button
                  className='btn-cards'
                  type='button'
                  className='btn btn-outline-danger'
                >
                  BTN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RepairViews
