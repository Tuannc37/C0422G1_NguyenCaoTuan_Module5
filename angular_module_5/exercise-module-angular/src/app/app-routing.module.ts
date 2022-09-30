import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AngularTimelinesAppComponent} from "./ss6-service-router/angular-timelines-app/angular-timelines-app.component";
import {AngularProductManagementComponent} from "./ss6-service-router/angular-song-management/angular-product-management.component";
import {YoutubePlayerComponent} from "./ss6-service-router/angular-song-management/youtube-player/youtube-player.component";
import {ProductListComponent} from "./ss6-service-router/angular-product-management/product/product-list/product-list.component";
import {ProductCreateComponent} from "./ss6-service-router/angular-product-management/product/product-create/product-create.component";
import {DictionaryPageComponent} from "./ss6-service-router/dictionary/dictionary-page/dictionary-page.component";
import {DictionaryDetailComponent} from "./ss6-service-router/dictionary/dictionary-detail/dictionary-detail.component";
import {ProductUpdateComponent} from "./ss6-service-router/angular-product-management/product/product-update/product-update.component";


const routes: Routes = [
  {
    path: 'timelines',
    component: AngularTimelinesAppComponent
  },
  {
    path: 'youtube',
    component: AngularProductManagementComponent,
    children: [{
      path: ':id',
      component: YoutubePlayerComponent
    }]
  },
  {
    path: 'product/list',
    component: ProductListComponent
  },
  {
    path: 'product/create',
    component: ProductCreateComponent
  },
  {
    path:'product/update/:id',
    component:ProductUpdateComponent
  },
  {
    path: '',
    component: DictionaryPageComponent
  }, {
    path: 'dictionary-detail/:mean',
    component: DictionaryDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
