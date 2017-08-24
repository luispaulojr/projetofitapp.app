import { Injectable, Component } from '@angular/core';
import { IonicPage, NavController, ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
//import { ModalTreinador } from 'treinador-modal-content';


@IonicPage()
@Component({
  selector: 'page-treinador',
  templateUrl: 'treinador.html',
})
export class TreinadorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {}
  
  openModal(treinadorNum) {
    let modal = this.modalCtrl.create(ModalTreinador, treinadorNum);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReceitasPage');
  }
}

@Component({
  selector: 'page-treinador-modal',
  template: `
  <ion-header>
  <ion-toolbar>
      <ion-title>
          Instrutor - {{treinador.treinador.nome}}
      </ion-title>
      <ion-buttons start>
          <button ion-button (click)="dismiss()">
          <span ion-text color="primary" showWhen="ios">Cancel</span>
          <ion-icon name="md-close" showWhen="android,windows"></ion-icon>
        </button>
      </ion-buttons>
  </ion-toolbar>
</ion-header>

<ion-content padding>
  <ion-card>
      <img src="{{treinador.treinador.foto}}" />

      <ion-card-content>
          <ion-card-title>
              {{treinador.treinador.nome}}
              <ion-note>
                  {{treinador.treinador.cref}}</ion-note>
          </ion-card-title>
          <p>
              {{treinador.treinador.descricao}}
          </p>
      </ion-card-content>

      <ion-item>
          <ion-icon name='md-map' item-start style="color: #d03e84"></ion-icon>
          {{treinador.treinador.regiao}}
      </ion-item>
      <ion-item>
          <ion-icon name='md-trophy' item-start style="color: #55acee"></ion-icon>
          {{treinador.treinador.especialidade}}
          <button ion-button clear large item-end><ion-icon name='checkmark-circle-outline' color="danger"></ion-icon></button>
      </ion-item>
  </ion-card>
</ion-content>
`,
})
export class ModalTreinador {
  treinadores: Array<{treinador: Treinador}>;
  treinador;

  constructor(public platform: Platform, public params: NavParams, public viewCtrl: ViewController) {
    
    this.treinadores = [
      {
        treinador: {
          treinadorId: 1,
          nome: 'Luis',
          regiao: 'Rio de Janeiro',
          foto: 'https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/15492611_1237991352961442_2172345153683030829_n.jpg?oh=0c56f3f6c342cbbd9350f8c6f9538b22&oe=59EEA6D3',
          cref: 'cref123',
          especialidade: 'Crossfit',
          descricao: 'Profissional com mais de 10 anos de experiencia'
        }
      },
      {
        treinador: {
          treinadorId: 2,
          nome: 'Paulo',
          regiao: 'Maricá',
          foto: 'https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/15203193_1213617472065497_7427073242668272267_n.jpg?oh=c55b99fde54ac05d59d954fa31d9f005&oe=5A050FDC',
          cref: 'cref231',
          especialidade: 'Musculação',
          descricao: 'Profissional com mais de 10 anos de experiencia'
        }
      },
      {
        treinador: {
          treinadorId: 3,
          nome: 'Juliana Horta',
          regiao: 'Minas Gerais',
          foto: 'https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/14519692_1082027138578187_7583927299854211033_n.jpg?oh=c0573f1dca772b2c93f39c582398b0c8&oe=59F770A7',
          cref: 'cref321',
          especialidade: 'Funcional',
          descricao: 'Profissional com mais de 10 anos de experiencia'
        }
      }
    ];
    this.treinador = this.treinadores[this.params.get('coachNum')];
  }
  
  dismiss() {
    this.viewCtrl.dismiss();
  }
}

@Injectable()
class Treinador {
  constructor(
    public treinadorId : number,
    public nome : string, 
    public regiao : string, 
    public foto : string, 
    public cref : string, 
    public especialidade : string, 
    public descricao : string){}
}