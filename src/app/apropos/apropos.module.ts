import {NgModule} from "@angular/core";
import {AproposComponent} from "./apropos.component";
import {LesreferencesComponent} from "./lesreferences/lesreferences.component";
import {NospartenairesComponent} from "./nospartenaires/nospartenaires.component";
import {NosproduitsComponent} from "./nosproduits/nosproduits.component";
import {PrixdistinctionsComponent} from "./prixdistinctions/prixdistinctions.component";
import {RouterModule} from "@angular/router";
import {aproposRoute} from "./apropos.route";
import {MaterialModule} from "../material/material.module";


@NgModule({
  imports: [
    RouterModule.forChild(aproposRoute),
    MaterialModule,
  ],
  declarations:[
    AproposComponent,
    LesreferencesComponent,
    NospartenairesComponent,
    NosproduitsComponent,
    PrixdistinctionsComponent,
  ]
})

export class AproposModule{}
