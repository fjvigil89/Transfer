import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
// Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Material
import { MaterialModule } from './Material/materialModule';

// rutas
import { AppRoutersModule } from './app.routers';

// Servicios
import { ContactoService } from './contacto/contacto.service';



// Componentes Propios
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { LaredComponent } from './lared/lared.component';
import { FooterComponent } from './footer/footer.component';
import { PrincipalComponent } from './principal/principal.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { ConstruccionComponent } from './construccion/construccion.component';
import { NuestrosServiciosComponent } from './nuestros-servicios/nuestros-servicios.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { LimpiezaComponent } from './limpieza/limpieza.component';
import { MetalirgicaComponent } from './metalirgica/metalirgica.component';
import { CarpinteriaComponent } from './carpinteria/carpinteria.component';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ServiciosComponent,
    ContactoComponent,
    LaredComponent,
    FooterComponent,
    PrincipalComponent,
    UsuarioComponent,    
    NoticiasComponent, ConstruccionComponent, NuestrosServiciosComponent, EstadisticasComponent, LimpiezaComponent, MetalirgicaComponent, CarpinteriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    AppRoutersModule,
    AlertModule.forRoot()
  ],
  providers: [ContactoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
