import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConnnectionService } from '../../providers/connnection-service';

@Component({
  selector: 'page-generated-test',
  templateUrl: 'generated-test.html'
})
export class GeneratedTestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private connectionService: ConnnectionService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeneratedTestPage');
  }

  buscarCep():void{
      this.connectionService.getCep('71939000')
      .then((res)=>{
        let json = res.json();
        console.log(json);
      }).catch((err)=>{
        console.log(err);
      });
  }

}
