import React from 'react'
import { Container, Row, Col, CardColumns } from "reactstrap";

//css
import './UserView.css'

//img 
import xt from '../img/xt.jpg'
import Rp from '../img/Rp.jpg'
import ed from '../img/ed.jpg'
import CarlCox from '../img/Carl Cox.jpg'
import estrellas from '../img/estrellas.png'


function UserView() {
  return (
    <div className="col-md-12 col-ms-12">
      <h1 className="name-user">Jerome Isma ea</h1>
        <hr className="solid-divid"></hr>
      

      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row row-cols-1 row-cols-md-12">
              <div className="col mb-4 card-carl">
                <div className="card">
                  <img
                    src={CarlCox}
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
          <div class="col">
            {" "}
            <div className="row row-cols-1 row-cols-md-12">
              <div className="col mb-4">
                <div className="card color-font">
                  <div className="card-body">
                    <h5 className="card-title text-ali">Reparacion</h5>
                    <p className="card-text">
                      This is a simple hero unit, a simple jumbotron-style...
                    </p>
                    <hr className="solid-divi-cards"></hr>

                    <p className="text-cards">texto de reñeno</p>
                    <button
                      type="button"
                      className="user-boton btn btn-outline-danger"
                    >
                      Danger
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="row row-cols-1 row-cols-md-12">
              <div className="col mb-4">
                <div className="card color-font">
                  <div className="card-body">
                    <h5 className="card-title text-ali">Reparacion</h5>
                    <p className="card-text">
                      This is a simple hero unit, a simple jumbotron-style...
                    </p>
                    <hr className="solid-divi-cards"></hr>

                    <p className="text-cards ">texto de reñeno</p>
                    <button
                      type="button"
                      className="user-boton btn btn-outline-danger"
                    >
                      Danger
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            {" "}
            <div className="row row-cols-1 row-cols-md-12">
              <div className="col mb-4">
                <div className="card color-font">
                  <div className="card-body">
                    <h5 className="card-title text-ali">Reparacion</h5>
                    <p className="card-text">
                      This is a simple hero unit, a simple jumbotron-style...
                    </p>
                    <hr className="solid-divi-cards"></hr>

                    <p className="text-cards">texto de reñeno</p>
                    <button
                      type="button"
                      className="user-boton btn btn-outline-danger"
                    >
                      Danger
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-12">
              <div className="col mb-4">
                <div className="card color-font">
                  <div className="card-body">
                    <h5 className="card-title text-ali">Reparacion</h5>
                    <p className="card-text">
                      This is a simple hero unit, a simple jumbotron-style...
                    </p>
                    <hr className="solid-divi-cards"></hr>

                    <p className="text-cards">texto de reñeno</p>
                    <button
                      type="button"
                      className="user-boton btn btn-outline-danger"
                    >
                      Danger
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
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={xt} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={ed} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={Rp} class="d-block w-100" alt="..." />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <h1 className="text-dep">Reparaciones Abiertas</h1>
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
                <button type="button" className="btn btn-danger">
                  Danger
                </button>

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
  );
}

export default UserView





//       </Container>




















// <div className="row justify-content-between">
//         <div className="col-4 color-1">
//           <div className="row">
//             <div class="col-sm-12">
//               <div class="card">
//                 <div class="card-body">
//                   <h5 class="color_text-card card-title">Reparaciones</h5>
//                   <img src={CarlCox} className="card-img-top" alt="..." />
//                   <p className="color_text-card card-text">
//                     This is a simple hero unit, a simple jumbotron-style...
//                   </p>
//                   <p>
//                     <hr></hr>
//                   </p>
//                   <p className="color_text-card">Text test</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/*  */}
//           <div class="row row-cols-1 row-cols-md-2">
//             <div class="col mb-4">
//               <div class="card">
//                 <img src="..." class="card-img-top" alt="..." />
//                 <div class="card-body">
//                   <h5 class="card-title">Card title</h5>
//                   <p class="card-text">
//                     This is a longer card with supporting text below as a
//                     natural lead-in to additional content. This content is a
//                     little bit longer.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div class="col mb-4">
//               <div class="card">
//                 <img src="..." class="card-img-top" alt="..." />
//                 <div class="card-body">
//                   <h5 class="card-title">Card title</h5>
//                   <p class="card-text">
//                     This is a longer card with supporting text below as a
//                     natural lead-in to additional content. This content is a
//                     little bit longer.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div class="col mb-4">
//               <div class="card">
//                 <img src="..." class="card-img-top" alt="..." />
//                 <div class="card-body">
//                   <h5 class="card-title">Card title</h5>
//                   <p class="card-text">
//                     This is a longer card with supporting text below as a
//                     natural lead-in to additional content.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div class="col mb-4 ">
//               <div class="card">
//                 <img src="..." class="card-img-top" alt="..." />
//                 <div class="card-body">
//                   <h5 class="card-title">Card title</h5>
//                   <p class="card-text">
//                     This is a longer card with supporting text below as a
//                     natural lead-in to additional content. This content is a
//                     little bit longer.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/*  */}
//         </div>
//       </div>