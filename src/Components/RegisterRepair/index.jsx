import React from 'react'
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { useForm } from 'react-hook-form'
import Button from '../Button'
import axios from 'axios'
import swal from 'sweetalert'

const RegisterRepair = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    console.log(data)
    axios.post('http://localhost:8080/users/signup', data)
      .then(function (response) {
        console.log(response)
        swal({
          title: 'Listo!',
          text: 'Puedes consultar las respuestas a tu reparación con tu correo',
          icon: 'success',
          button: 'Entendido'
        })
      })
      .catch(function (error) {
        console.log(error)
        swal({
          title: 'Ups!',
          text: 'Algo salió mal, intentalo de nuevo',
          icon: 'error',
          button: 'Entendido'
        })
      })
  }
  return (
    <Form className='my-5' onSubmit={handleSubmit(onSubmit)}>
      <div className='form-container col-12 d-md-flex'>
        <div className='col-12 col-md-6'>
          <FormGroup>
            <Label for='name'>Nombre</Label>
            <input
              class='form-control'
              type='text'
              name='firstName'
              placeholder='Nombre'
              ref={register}
            />
          </FormGroup>
          <FormGroup>
            <Label for='lastName'>Apellido</Label>
            <input
              class='form-control'
              type='text'
              name='lastName'
              placeholder='Apellido'
              ref={register}
            />
          </FormGroup>
          <FormGroup>
            <Label for='exampleDate'>Fecha</Label>
            <input
              class='form-control'
              type='date'
              name='birthDate'
              placeholder='dd/mm/aa'
              ref={register}
            />
          </FormGroup>
          <FormGroup>
            <Label for='exampleEmail'>Correo Electronico</Label>
            <input
              class='form-control'
              type='email'
              name='email'
              id='exampleEmail'
              placeholder='with a placeholder'
              ref={register}
            />
          </FormGroup>
          <FormGroup>
            <Label for='examplePassword'>Contraseña</Label>
            <input
              class='form-control'
              type='password'
              name='password'
              placeholder='password '
              ref={register}
            />
          </FormGroup>
          {/* <FormGroup>
            <Label for='examplePassword'>Password</Label>
            <input
              class='form-control'
              type='password'
              name='passwordConfirm'
              placeholder='password '
              ref={register}
            />
          </FormGroup> */}
        </div>
        <div className='col-12 col-md-6'>
          <FormGroup>
            <Label for='name'>Calle y número</Label>
            <input
              class='form-control'
              type='text'
              name='streetAddress'
              placeholder='Calle y número'
              ref={register}
            />
          </FormGroup>
          <FormGroup>
            <Label for='name'>Delegación/Municipio</Label>
            <input
              class='form-control'
              type='text'
              name='Municipality'
              placeholder='Delegación/Municipio'
              ref={register}
            />
          </FormGroup>
          <FormGroup>
            <Label for='name'>Ciudad</Label>
            <input
              class='form-control'
              type='text'
              name='city'
              placeholder='Ciudad'
              ref={register}
            />
            <FormGroup>
              <Label for='name'>Código Postal</Label>
              <input
                class='form-control'
                type='text'
                name='zipCode'
                placeholder='Código Postal'
                ref={register}
              />
            </FormGroup>
          </FormGroup>
        </div>
      </div>
      <div>
        <Button text='Regístrate' />
      </div>
    </Form>
  )
}

export default RegisterRepair



// import React, { Component } from "react";
// import { useForm } from 'react-hook-form'
// import Button from '../Button'
// import axios from 'axios'
// import swal from 'sweetalert'
// import { Form, FormGroup, Label, Input, FormText } from 'reactstrap'



// class RegisterForm extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       nombre: "",
//       correo: "",
//       edad: "",
//       mensajeNombre: "",
//       mensajeCorreo: "",
//       mensajeEdad: "",
//       invalidNombre: false,
//       invalidCorreo: false,
//       invalidEdad: false,
//     };
//     this.onChange = this.onChange.bind(this);
//     this.enviarAlaBD = this.enviarAlaBD.bind(this);
//   }

//   onChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value,
//     });
//   };
//   enviarAlaBD = (e) => {
//     e.preventDefault();
//     let valido = true;
//     if (this.state.nombre === "") {
//       this.setState({
//         invalidNombre: true,
//         mensajeNombre: "El campo nombre es obligatorio, indica tu nombre",
//       });
//       valido = false;
//     }
//     if (this.state.correo === "") {
//       this.setState({
//         invalidCorreo: true,
//         mensajeCorreo: "Indica tu dirección de correo",
//       });
//       valido = false;
//     }
//     if (this.state.edad === "") {
//       this.setState({
//         invalidEdad: true,
//         mensajeEdad: "Indica tu edad",
//       });
//       valido = false;
//     }
//     if (valido) {
//       //Enviarlo a la base de datos o a otro componente
//       console.log("Se envian los datos " + JSON.stringify(this.state));
//     }
//   };
//   render() {
//     return (
//       <div>
//         <Row>
//           <Col xs="3"></Col>
//           <Col xs="6">
//             <h2>Registro de Participantes</h2>
//             <Form onSubmit={this.enviarAlaBD}>
//               <FormGroup>
//                 <Label>Nombre</Label>
//                 <Input
//                   type="text"
//                   name="nombre"
//                   value={this.state.nombre}
//                   onChange={this.onChange}
//                   invalid={this.state.invalidNombre}
//                 />
//                 <FormFeedback>{this.state.mensajeNombre}</FormFeedback>
//               </FormGroup>
//               <FormGroup>
//                 <Label>Correo</Label>
//                 <Input
//                   type="email"
//                   name="correo"
//                   value={this.state.correo}
//                   onChange={this.onChange}
//                   invalid={this.state.invalidCorreo}
//                 />
//                 <FormFeedback>{this.state.mensajeCorreo}</FormFeedback>
//               </FormGroup>
//               <FormGroup>
//                 <Label>Edad</Label>
//                 <Input
//                   type="text"
//                   name="edad"
//                   className="col-2"
//                   value={this.state.edad}
//                   onChange={this.onChange}
//                   invalid={this.state.invalidEdad}
//                 />
//                 <FormFeedback>{this.state.mensajeEdad}</FormFeedback>
//               </FormGroup>
//               <FormGroup>
//                 <Button color="success">Guardar</Button>
//               </FormGroup>
//             </Form>
//           </Col>
//         </Row>
//       </div>
//     );
//   }
// }

// export default RegisterForm;