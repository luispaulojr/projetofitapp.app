import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DespertadorPage } from './despertador';

@NgModule({
  declarations: [
    DespertadorPage,
  ],
  imports: [
    IonicPageModule.forChild(DespertadorPage),
  ],
})
export class DespertadorPageModule {}
