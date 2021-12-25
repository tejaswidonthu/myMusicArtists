import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistsDetailComponent } from './artists/artists-detail/artists-detail.component';
import { ArtistsStartComponent } from './artists/artists-start/artists-start.component';
import { ArtistsComponent } from './artists/artists.component';

const artistsRoutes : Routes = [
  {path: 'artists', component: ArtistsComponent,
  children: [
  {path: '', component: ArtistsStartComponent},
  {path: ':id', component: ArtistsDetailComponent} ]},
  {path: 'germany', component: ArtistsComponent,
  children: [
  {path: '', component: ArtistsStartComponent},
  {path: ':id', component: ArtistsDetailComponent} ]}, 
  {path: 'spain', component: ArtistsComponent,
  children: [
  {path: '', component: ArtistsStartComponent},
  {path: ':id', component: ArtistsDetailComponent}
  ]},
  {path: 'india', component: ArtistsComponent,
  children: [
  {path: '', component: ArtistsStartComponent},
  {path: ':id', component: ArtistsDetailComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(artistsRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
