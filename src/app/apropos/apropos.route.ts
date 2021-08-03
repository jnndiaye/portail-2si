import {Routes} from "@angular/router";
import {AproposComponent} from "./apropos.component";
import {LesreferencesComponent} from "./lesreferences/lesreferences.component";
import {NospartenairesComponent} from "./nospartenaires/nospartenaires.component";
import {NosproduitsComponent} from "./nosproduits/nosproduits.component";
import {PrixdistinctionsComponent} from "./prixdistinctions/prixdistinctions.component";

export const aproposRoute : Routes=[
  {
    path :'',
    component: AproposComponent,
  },
  {
    path :'references',
    component: LesreferencesComponent,
  },
  {
    path :'nospartenaires',
    component: NospartenairesComponent,
  },
  {
    path :'nosproduits',
    component: NosproduitsComponent,
  },
  {
    path :'prixdistinctions',
    component: PrixdistinctionsComponent,
  }
]
