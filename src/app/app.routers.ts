import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LaredComponent } from './lared/lared.component';
import { PrincipalComponent } from './principal/principal.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ConstruccionComponent } from './construccion/construccion.component';

const routes: Routes = [
    { path: '', component: PrincipalComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'descargar', component: LaredComponent },
    { path: 'servicio', component: ServiciosComponent },
    { path: 'quiensomos', component: UsuarioComponent },    
    { path: 'servicio/construccion', component: ConstruccionComponent},
    { path: '**', pathMatch: 'full', redirectTo: ''},

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutersModule {}
