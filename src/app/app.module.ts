import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { ConnnectionService } from '../providers/connnection-service';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuTestPage } from '../pages/menu-test/menu-test';
import { GeneratedTestPage } from '../pages/generated-test/generated-test';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuTestPage,
    GeneratedTestPage
  ],
  imports: [
    IonicModule.forRoot(MyApp,{
    menuType: 'push'
  })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuTestPage,
    GeneratedTestPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, ConnnectionService]
})
export class AppModule {}
