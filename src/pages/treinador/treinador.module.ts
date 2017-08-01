import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TreinadorPage } from './treinador';

@NgModule({
  declarations: [
    TreinadorPage,
  ],
  imports: [
    IonicPageModule.forChild(TreinadorPage),
  ],
})
export class TreinadorPageModule {}
