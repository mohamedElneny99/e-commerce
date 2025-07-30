import { ApplicationConfig, provideZoneChangeDetection , importProvidersFrom  } from '@angular/core';
import { provideRouter } from '@angular/router';
import {  ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { provideStoreDevtools } from '@ngrx/store-devtools';


import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { cartReducer } from './cart/cart.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(ReactiveFormsModule),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(CommonModule),
    provideHttpClient(),
    provideFirestore(()=> getFirestore()),
    provideStorage(()=> getStorage()),
    provideStoreDevtools(),
    provideStore({
      cart: cartReducer
    }),


  ],
};
