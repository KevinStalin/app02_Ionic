import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.page.html',
  styleUrls: ['./tarjetas.page.scss'],
})
export class TarjetasPage implements OnInit {

  lista: famosos[] = [
    {
      img: "/assets/bunbu.jpg",
      des: "cantante"
    },
    {
      img: "/assets/cristiano.jpg",
      des: "futbolista"
    },
    {
      img: "/assets/shakira.jpg",
      des: "cantante"
    }
  ]

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentArtist() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Artistas',
      // subHeader: 'Subtitle',
      message: 'Cargar informacion del artista',
      buttons: ['OK']
    });

    await alert.present();
  }

}

interface famosos {
  img: string,
  des: string
}