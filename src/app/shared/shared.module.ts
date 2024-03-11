import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutPageComponent } from './Pages/aboutPage/aboutPage.component';
import { HomePageComponent } from './Pages/homePage/homePage.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { ContactPageComponent as ContactPageComponent } from './Pages/contact/contactPage.component';
import { SearchBoxComponent } from '../countries/components/searchBox/searchBox.component';

@NgModule({
  imports: [CommonModule,
    RouterModule,
    SearchBoxComponent,
  ],
  declarations: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    SidebarComponent,
  ],
  exports: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    SidebarComponent,
    SearchBoxComponent
  ],
})
export class SharedModule {}
