import {Routes} from "@angular/router";
import {ProduitComponent} from "./produit.component";


export const produitRoute: Routes = [
  {
    path: '',
    component: ProduitComponent,
  },
  // {
  //   path: ':id/view',
  //   component: PlanPassationDetailComponent,
  //   resolve: {
  //     planPassation: PlanPassationResolve,
  //   },
  //   data: {
  //     authorities: [Authority.USER],
  //     pageTitle: 'gatewaysigmapApp.planpassationmsPlanPassation.home.title',
  //   },
  //   canActivate: [UserRouteAccessService],
  // },
  // {
  //   path: 'new',
  //   component: PlanPassationUpdateComponent,
  //   resolve: {
  //     planPassation: PlanPassationResolve,
  //   },
  //   data: {
  //     authorities: [Authority.USER],
  //     pageTitle: 'gatewaysigmapApp.planpassationmsPlanPassation.home.title',
  //   },
  //   canActivate: [UserRouteAccessService],
  // },
  // {
  //   path: ':id/edit',
  //   component: PlanPassationUpdateComponent,
  //   resolve: {
  //     planPassation: PlanPassationResolve,
  //   },
  //   data: {
  //     authorities: [Authority.USER],
  //     pageTitle: 'gatewaysigmapApp.planpassationmsPlanPassation.home.title',
  //   },
  //   canActivate: [UserRouteAccessService],
  // },
];
