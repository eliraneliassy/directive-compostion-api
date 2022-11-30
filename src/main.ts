import { AppComponent } from './app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootstrapApplication } from '@angular/platform-browser';




//platformBrowserDynamic().bootstrapModule(AppModule)
bootstrapApplication(AppComponent)
  .catch(err => console.error(err));
