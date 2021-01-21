import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TarjetasPageRoutingModule } from './tarjetas-routing.module';

import { TarjetasPage } from './tarjetas.page';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TarjetasPageRoutingModule,
    ComponentesModule
  ],
  declarations: [TarjetasPage]
})
export class TarjetasPageModule {}
