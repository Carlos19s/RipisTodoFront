import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { BeneficiosComponent } from './beneficios/beneficios.component';
import { UnialiadasComponent } from './unialiadas/unialiadas.component';
import { MiembrosComponent } from './miembros/miembros.component';
import { EstatutosComponent } from './estatutos/estatutos.component';
import { RegistroComponent } from './registro/registro.component';
import { PlanificacionActividadesComponent } from './planificacion-actividades/planificacion-actividades.component';
import { BlogComponent } from './blog/blog.component';
import { OdsComponent } from './ods/ods.component';
import { ErrorComponent } from './error/error.component';
import { PerfilComponent } from './perfil/perfil.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { PrivacidadDeCoockiesComponent } from './privacidad-de-coockies/privacidad-de-coockies.component';
import { PoliticaSeguridadComponent } from './politica-seguridad/politica-seguridad.component';
import { AvisoLegalComponent } from './aviso-legal/aviso-legal.component';
import { SenecytComponent} from './senecyt/senecyt.component';
import { MarcaComponent } from './marca/marca.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
  { path: 'beneficios', component: BeneficiosComponent },
  { path: 'Unialiadas', component: UnialiadasComponent },
  { path: 'Miembros', component: MiembrosComponent },
  { path: 'Estatutos', component: EstatutosComponent },
  { path: 'Registro', component: RegistroComponent },
  { path: 'Planificacion', component: PlanificacionActividadesComponent },
  { path: 'Blog', component: BlogComponent },
  { path: 'Ods', component: OdsComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'Iniciarsesion', component: IniciarSesionComponent },
  { path: 'privacidad', component: PrivacidadComponent },
  { path: 'coockies', component: PrivacidadDeCoockiesComponent },
  { path: 'politicaSeguridad', component: PoliticaSeguridadComponent },
  { path: 'avisoLegal', component: AvisoLegalComponent },
  { path: 'senecyt', component: SenecytComponent },
  { path: 'marca', component: MarcaComponent },


  { path: '**', component: ErrorComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes {


}
