import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ArtistslistComponent } from './artists/artistslist/artistslist.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistsSingleComponent } from './artists/artistslist/artists-single/artists-single.component';
import { ArtistsStartComponent } from './artists/artists-start/artists-start.component';
import { ArtistsDetailComponent } from './artists/artists-detail/artists-detail.component';
import { FilterPipe } from './filter.pipe';
import { SearchComponent } from './search/search.component';
import { ArtistSidebysideComponent } from './artists/artist-sidebyside/artist-sidebyside.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    ArtistslistComponent,
    ArtistsComponent,
    ArtistsSingleComponent,
    ArtistsStartComponent,
    ArtistsDetailComponent,
    FilterPipe,
    SearchComponent,
    ArtistSidebysideComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
