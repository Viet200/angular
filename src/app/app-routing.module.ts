import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutClientComponent } from './about-client/about-client.component';
import { ChampComponent } from './champ/champ.component';
import { FormComponent } from './form/form.component';
import { CanAccessAdminGuard } from './guards/can-access-admin.guard';
import { HomeClientComponent } from './layouts/client-layout/home-client/home-client.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { NameComponent } from './name/name.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import { AdminProductEditComponent } from './pages/admin/admin-product/admin-product-edit/admin-product-edit.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { ProductClientComponent } from './product-client/product-client.component';
import { ProductDetailClientComponent } from './product-detail-client/product-detail-client.component';
import { UserComponent } from './user/user.component';
import { DetailClientComponent } from './layouts/client-layout/detail-client/detail-client.component';
import { SignUpComponent } from './layouts/client-layout/auth/sign-up/sign-up.component';
import { SignInComponent } from './layouts/client-layout/auth/sign-in/sign-in.component';
import { CartComponent } from './conponent/cart/cart.component';
import { ManagerCartComponent } from './layouts/client-layout/manager-cart/manager-cart.component';
import { CategoryComponent } from './layouts/admin-layout/category/category.component';
import { CategoryListComponent } from './layouts/admin-layout/category/category-list/category-list.component';
import { CategoryFormComponent } from './layouts/admin-layout/category/category-form/category-form.component';
import { CategoryEditComponent } from './layouts/admin-layout/category/category-edit/category-edit.component';
import { ProductsComponent } from './layouts/admin-layout/products/products.component';
import { ProductsListComponent } from './layouts/admin-layout/products/products-list/products-list.component';
import { ProductsFormComponent } from './layouts/admin-layout/products/products-form/products-form.component';
import { ProductsEditComponent } from './layouts/admin-layout/products/products-edit/products-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      {
        path: '',
        component: HomeClientComponent,
      },
      {
        path: 'signIn',
        component: SignInComponent,
      },
      {
        path: 'signIn/signUp',
        component: SignUpComponent,
      },
      {
        path: 'detail/:id',
        component: DetailClientComponent,
      },
      {
        path: 'cart',
        component: ManagerCartComponent,
      },
    ],
  },
  {
    path: 'admin',
    component:AdminLayoutComponent,
    children: [
       {
        path: 'category',
        component: CategoryListComponent,
      },
      {
        path: 'category/add',
        component: CategoryFormComponent,
      },
      {
        path: 'category/edit/:id',
        component: CategoryEditComponent,
      },
      {
        path: 'products',
        component: ProductsListComponent,
      },
      {
        path: 'products/add',
        component: ProductsFormComponent,
      },
      {
        path: 'products/edit/:id',
        component: ProductsFormComponent,
      },
      {
        path: 'products/:id',
        component: AdminProductDetailComponent,
      },


    ],
  },
  {
    path: 'auth',
    children: [
      {
        path: 'signIn',
        component: LoginComponent,
      },
      {
        path: 'signUp',
        component: SignUpComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanAccessAdminGuard],
})
export class AppRoutingModule {}
