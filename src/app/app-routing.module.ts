import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AssistanceComponent} from './assistance/assistance.component';
import {NosServicesComponent} from './nos-services/nos-services.component';
import {AccueilComponent} from './accueil/accueil.component';
import {ServiceEsigmapComponent} from './nos-services/service-esigmap/service-esigmap.component';
import {ServiceEticketingComponent} from './nos-services/service-eticketing/service-eticketing.component';
import {ServiceEtransportComponent} from './nos-services/service-etransport/service-etransport.component';
import {MessageVisiteurComponent} from './assistance/message-visiteur/message-visiteur.component';
import {RessourcesComponent} from "./ressources/ressources.component";

const routes: Routes = [
    {
      path: '',
      redirectTo: 'accueil',
      pathMatch: 'full'
    },
    {
      path: 'accueil',
      component: AccueilComponent
    },
    {
      path: 'assistance',
      component: AssistanceComponent
    },
    {
      path: 'nos-services',
      component: NosServicesComponent,
    },
    {path: 'service-esigmap', component: ServiceEsigmapComponent},
    {path: 'service-eticketing', component: ServiceEticketingComponent},
    {path: 'service-etransport', component: ServiceEtransportComponent},

    {
      path: 'apropos',
      loadChildren: () => import('./apropos/apropos.module').then(m => m.AproposModule),
    },
    {
      path: 'message-visiteur',
      component: MessageVisiteurComponent,
    },
    {
      path: 'ressources',
      component: RessourcesComponent,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
