import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { MycanvasPage } from '../pages/mycanvas/mycanvas';
import { Videocenter } from '../providers/videocenter';
import { ICanvasDirective } from '../components/icanvas/icanvas';
import { Storage } from '@ionic/storage';
@NgModule({
  declarations: [
    MyApp,
    MycanvasPage,
    ICanvasDirective
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MycanvasPage
  ],
  providers: [Videocenter, Storage]
})
export class AppModule {}
