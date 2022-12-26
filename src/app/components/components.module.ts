import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './header/menu/menu.component';
import { BodyComponent } from './body/body.component';
import { ContenidoComponent } from './body/contenido/contenido.component';
import { BarralateralComponent } from './body/barralateral/barralateral.component';
import { TitleComponent } from './body/title/title.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    BodyComponent,
    ContenidoComponent,
    BarralateralComponent,
    TitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    BodyComponent,
    TitleComponent,
    ContenidoComponent,
    BarralateralComponent
  ]
})
export class ComponentsModule { }
