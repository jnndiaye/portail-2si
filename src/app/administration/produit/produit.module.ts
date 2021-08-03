import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {produitRoute} from "./produit.route";
import {ProduitComponent} from "./produit.component";
import {ProduitUpdateComponent} from "./produit-update/produit-update.component";
import {ProduitDeleteDialogComponent} from "./produit-delete-dialog/produit-delete-dialog.component";
import {MaterialModule} from "../../material/material.module";

@NgModule({
  imports: [
    RouterModule.forChild(produitRoute),
    MaterialModule,
  ],
   declarations: [
     ProduitComponent,
     ProduitUpdateComponent,
     ProduitDeleteDialogComponent
   ],
  providers:[]
})

export class ProduitModule{}
