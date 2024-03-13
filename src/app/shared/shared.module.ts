import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutPageComponent } from './Pages/aboutPage/aboutPage.component';
import { HomePageComponent } from './Pages/homePage/homePage.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { ContactPageComponent as ContactPageComponent } from './Pages/contact/contactPage.component';
import { SearchBoxComponent } from '../countries/components/searchBox/searchBox.component';
import { LoadingSpinnerComponent } from './Components/loadingSpinner/loadingSpinner.component';

@NgModule({
  imports: [CommonModule, RouterModule, SearchBoxComponent],
  declarations: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    LoadingSpinnerComponent,
    SidebarComponent,
  ],
  exports: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    LoadingSpinnerComponent,
    SidebarComponent,
    SearchBoxComponent,
  ],
})
export class SharedModule {}
