import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import { ServicesSsiComponent } from './services-ssi/services-ssi.component';


@NgModule({
  imports:[
    RouterModule.forChild([
      {
        path: 'produit',
        loadChildren: () => import('./produit/produit.module').then(m => m.ProduitModule),
      },
    ])
  ],
  declarations: [ServicesSsiComponent]
})

export class AdministrationModule{}
