import { Component, ViewChild, Injectable } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { FotoPage } from '../pages/foto/foto';
import { TreinadorPage } from '../pages/treinador/treinador';
import { SeriesPage } from '../pages/series/series';
import { ReceitasPage } from '../pages/receitas/receitas';
import { DespertadorPage } from '../pages/despertador/despertador';
import { SobrenosPage } from '../pages/sobrenos/sobrenos';
import { PoliticaPrivacidadePage } from '../pages/politica-privacidade/politica-privacidade';

@Component({
  templateUrl: 'app.html'
})
export class ProjetoFitApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;
  user : UserProfile;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.user = {
      nome : 'Luis Paulo Jr',
      fotoProfile : 'https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/15492611_1237991352961442_2172345153683030829_n.jpg?oh=0c56f3f6c342cbbd9350f8c6f9538b22&oe=59EEA6D3',
      titulo : 'Administrador do Sistema'
    };

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Fotos', component: FotoPage },
      { title: 'Treinador', component: TreinadorPage },
      { title: 'Series', component: SeriesPage },
      { title: 'Receitas', component: ReceitasPage },
      { title: 'Despertador', component: DespertadorPage },
      { title: 'Sobre Nós', component: SobrenosPage },
      { title: 'Politica de Privacidade', component: PoliticaPrivacidadePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

@Injectable()
class UserProfile {
  constructor(
  public nome : string,
  public fotoProfile : string,
  public titulo : string) {}
}
