
import { bootstrapApplication } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { AppComponent } from './src/app.component';
import { HomeComponent } from './src/components/home.component';
import { UploadComponent } from './src/components/upload.component';
import { ResultsComponent } from './src/components/results.component';
import { DownloadComponent } from './src/components/download.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'upload', component: UploadComponent },
      { path: 'results', component: ResultsComponent },
      { path: 'download', component: DownloadComponent },
      { path: '**', redirectTo: '' }
    ], withHashLocation())
  ]
}).catch(err => console.error(err));

// AI Studio always uses an `index.tsx` file for all project types.
