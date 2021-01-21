import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  inputValue1:string="";
  inputValue2:string="";

  carpeta: carpetas[] = [
    {
      name: "Ejercicios",
      icon: "barbell-outline"
    },
    {
      name: "Fotos",
      icon: "images-outline"
    },
    {
      name: "Documentos",
      icon: "documents-outline"
    }
  ]

  carrera: carreras[] = [
    {
      name: "Ing en Computacion",
      descripcion: "Carrera tecnica profesionalizante"
    },
    {
      name: "Psicologia",
      descripcion: "Carrera en el area solcial"
    },
    {
      name: "Ingenieria civil",
      descripcion: "Carrera tecnica profesionalizante"
    }



  ]
  constructor(public actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      // backdropDismiss:false,
      buttons: [{
        text: 'Borrar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Eliminar recurso');
        }
      }, {
        text: 'Compartir',
        icon: 'share',
        handler: () => {
          console.log('Compartir recurso');
        }
      }, {
        text: 'Lanzar a una ventana',
        icon: 'caret-forward-circle',
        handler: () => {
          console.log('Lanzando a un Modal');
        }
      }, {
        text: 'A mis favoritos',
        icon: 'heart',
        handler: () => {
          console.log('Favorite');
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancelar recurso');
        }
      }]
    });
    await actionSheet.present();
  }

  opcionesSeleccionadas(check) {
    console.log(check.name);
  }

  datos_registro() {

    console.log("Nombres-->"+ this.inputValue1+" \nedad-->"+ this.inputValue2);
  }

}

interface carpetas {
  name: string;
  icon: string;
}

interface carreras {
  name: string,
  descripcion: string
}