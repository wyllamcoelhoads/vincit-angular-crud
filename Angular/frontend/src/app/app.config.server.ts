import { mergeApplicationConfig, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { MovieService } from './components/movie/movie.service';
const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()
  
  ]
};


export const config = mergeApplicationConfig(appConfig, serverConfig);
