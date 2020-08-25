import React from 'react'

import { Container, Row, Col, CardColumns } from "reactstrap";

 //css
 import './ModalUser.css'

 //img


 //pages


 function ModalUser() {
   return (
     <div>
       <h1 className="text-color">MODAL</h1>

       <button
         className="btn btn-seccess"
         data-toggle="modal"
         data-target="#ventanamodal"
       >
         asdsd
       </button>

       <div
         className="modal"
         tabIndex="-1"
         role="dialog"
         aria-aria-labelledby="titulaVEntana"
         aria-hidden="true"
       >
         <div className="modal-dialog" role="document">
           <div className="modal-container">
             <div className="modal-header">
               <h1>titulo del modal</h1>
               <button
                 className="close"
                 data-dismiss="modal"
                 aria-label="cerrar"
               >
                 <span aria-hidden="true">@times;</span>asddsad
               </button>
             </div>
             <div className="modal-body">
               <div className="alert alert-seccess">
                 <p>
                   <strong>tus datos de han enviado correctamente</strong>
                 </p>
               </div>
             </div>
             <div className="modal-footer">
               <button
                 className="btn btn-warning color-9"
                 type="button"
                 data-dismiss="modal"
               >
                 cerrar
               </button>
             </div>
           </div>
         </div>
       </div>

       <button
         type="button"
         class="btn btn-primary"
         data-toggle="modal"
         data-target="#staticBackdrop"
       >
         Launch static backdrop modal
       </button>

     
     </div>
   );

 }

 export default ModalUser



