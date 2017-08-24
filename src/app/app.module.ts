import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { ProjetoFitApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FotoPage } from '../pages/foto/foto';

// modal treinador
import { TreinadorPage } from '../pages/treinador/treinador';
import { ModalTreinador } from '../pages/treinador/treinador'
import { SeriesPage } from '../pages/series/series';
import { ReceitasPage } from '../pages/receitas/receitas';
import { DespertadorPage } from '../pages/despertador/despertador';
import { SobrenosPage } from '../pages/sobrenos/sobrenos';
import { PoliticaPrivacidadePage } from '../pages/politica-privacidade/politica-privacidade';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    ProjetoFitApp,
    HomePage,
    FotoPage,
    TreinadorPage,
    ModalTreinador,
    SeriesPage,
    ReceitasPage,
    DespertadorPage,
    SobrenosPage,
    PoliticaPrivacidadePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(ProjetoFitApp, {
      statusbarPadding: true,
     },
     {
       links: [
        { component: TreinadorPage, name: 'TreinadorPage', segment: 'modal-basic' },
        { component: ModalTreinador, name: 'ModalTreinador', segment: 'modal-content' },
       ]
     }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ProjetoFitApp,
    HomePage,
    FotoPage,
    TreinadorPage,
    ModalTreinador,
    SeriesPage,
    ReceitasPage,
    DespertadorPage,
    SobrenosPage,
    PoliticaPrivacidadePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
