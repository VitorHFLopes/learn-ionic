import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { LearnIonicApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SongsPage } from '../pages/songs/songs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
    declarations: [
        LearnIonicApp,
        HomePage,
        SongsPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(LearnIonicApp)
    ],
    bootstrap: [ IonicApp ],
    entryComponents: [
        LearnIonicApp,
        HomePage,
        SongsPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule {
}
