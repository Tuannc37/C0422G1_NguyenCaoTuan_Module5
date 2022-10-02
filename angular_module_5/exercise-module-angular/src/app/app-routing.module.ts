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
import {CategoryListComponent} from "./ss7-back-end/angular-product/category/category-list/category-list.component";
import {CategoryCreateComponent} from "./ss7-back-end/angular-product/category/category-create/category-create.component";
import {CategoryUpdateComponent} from "./ss7-back-end/angular-product/category/category-update/category-update.component";
import {ProductCreateNewComponent} from "./ss7-back-end/angular-product/product/product-create-new/product-create-new.component";
import {ProductListNewComponent} from "./ss7-back-end/angular-product/product/product-list-new/product-list-new.component";
import {ProductUpdateNewComponent} from "./ss7-back-end/angular-product/product/product-update-new/product-update-new.component";
import {TodoUpdateComponent} from "./ss7-back-end/angular-name-card/todo-update/todo-update.component";
import {TodoNewComponent} from "./ss7-back-end/angular-name-card/todo-new/todo-new.component";


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
    path: 'dictionary',
    component: DictionaryPageComponent
  }, {
    path: 'dictionary-detail/:mean',
    component: DictionaryDetailComponent
  },


  {
    path: 'product/list/new',
    component: ProductListNewComponent
  }, {
    path: 'product/create/new',
    component: ProductCreateNewComponent
  }, {
    path: 'product/update/new/:id',
    component: ProductUpdateNewComponent
  }, {
    path: 'category/list',
    component: CategoryListComponent
  }, {
    path: 'category/create',
    component: CategoryCreateComponent
  }, {
    path: 'category/update/:id',
    component: CategoryUpdateComponent
  },

  {
    path: 'edit/:id',
    component: TodoUpdateComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
