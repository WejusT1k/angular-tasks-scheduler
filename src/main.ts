import { platformBrowser } from '@angular/platform-browser';
import {AppModule} from "./app/app.module";

platformBrowser().bootstrapModule(AppModule).then(r => {
  console.log('App Module loaded')
});
