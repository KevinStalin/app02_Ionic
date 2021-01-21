import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.page.html',
  styleUrls: ['./alertas.page.scss'],
})
export class AlertasPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Informacion',
      subHeader: 'Pruebas',
      message: 'Realizando pruebas de funcionamiento',
      // buttons: ['Cancelar', 'Abrir', 'Eliminar']
      buttons: [
        {
          text: "Ok",
          cssClass: "primary",
          handler: () => {
            console.log("Confirma informacion");
          }
        },
        {
          text: "Cancelar",
          role: "Cancelar rol",
          cssClass: "secondary",
          handler: (blah) => {
            console.log("Confirma cancelacion", blah);
          }
        }
      ]
    });

    await alert.present();
  }

  async cargarFormulario() {
    const formulario = await this.alertController.create(
      {
        cssClass:"my-custom-class",
        header:"Formulario",
        subHeader:"Ingrese datos solicitados",
        message:"Sus datos sera requeriso para si cita medica",
        inputs:[
          {
            name:"txtname",
            type:"text",
            placeholder:"Ingrese su nombre"
          },
          {
            name:"txtcedula",
            type:"text",
            placeholder:"Ingrese su cedula"
          },
          {
            name:"txtemail",
            type:"email",
            placeholder:"Ingrese su correo"
          }
        ],
        buttons:[
          {
            text:"Enviar",
            handler:()=>{
              console.log("Envio confirmado");
            }
          },
          {
            text:"Cancelar",
            role:"cancel",
            cssClass:"secondary",
            handler:()=>{
              console.log("Cancelar Envio");
            }
          }

        ]
      }
    );
    await formulario.present();
  }

}
