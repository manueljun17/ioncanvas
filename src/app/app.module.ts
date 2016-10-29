import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { MZcanvasPage } from '../pages/mzcanvas/mzcanvas';
import { Videocenter } from '../providers/videocenter';
import { MycanvasDirective } from '../components/mycanvas/mycanvas';
import { Storage } from '@ionic/storage';
@NgModule({
  declarations: [
    MyApp,
    MZcanvasPage,
    MycanvasDirective
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MZcanvasPage
  ],
  providers: [Videocenter, Storage]
})
export class AppModule {}
