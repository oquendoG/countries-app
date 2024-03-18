import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutPageComponent } from './Pages/aboutPage/aboutPage.component';
import { HomePageComponent } from './Pages/homePage/homePage.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { ContactPageComponent as ContactPageComponent } from './Pages/contact/contactPage.component';
import { SearchBoxComponent } from './Components/searchBox/searchBox.component';
import { LoadingSpinnerComponent } from './Components/loadingSpinner/loadingSpinner.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    LoadingSpinnerComponent,
    SidebarComponent,
    SearchBoxComponent
  ],
  exports: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    LoadingSpinnerComponent,
    SidebarComponent,
    SearchBoxComponent
  ],
})
export class SharedModule {}
