import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChampComponent } from './champ/champ.component';
import { TableComponent } from './table/table.component';
import { NameComponent } from './name/name.component';
import { IdentityComponent } from './identity/identity.component';
import { TableAvatarComponent } from './table/table-avatar/table-avatar.component';
import { TableDameComponent } from './table/table-dame/table-dame.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { ShowValidateComponent } from './conponent/show-validate/show-validate.component';
import { ProductClientComponent } from './product-client/product-client.component';
import { AboutClientComponent } from './about-client/about-client.component';
import { ProductDetailClientComponent } from './product-detail-client/product-detail-client.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { UserComponent } from './user/user.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductEditComponent } from './pages/admin/admin-product/admin-product-edit/admin-product-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/auth/login/login.component';
import { CartComponent } from './conponent/cart/cart.component';
import { HomeProductClientComponent } from './pages/product-client/home-product-client/home-product-client.component';
import { DetailClientComponent } from './layouts/client-layout/detail-client/detail-client.component';
import { SignUpComponent } from './layouts/client-layout/auth/sign-up/sign-up.component';
import { SignInComponent } from './layouts/client-layout/auth/sign-in/sign-in.component';
import { ManagerCartComponent } from './layouts/client-layout/manager-cart/manager-cart.component';
import { HomeClientComponent } from './layouts/client-layout/home-client/home-client.component';
import { HeaderLayoutComponent } from './layouts/admin-layout/header-layout/header-layout.component';
import { AsideLayoutComponent } from './layouts/admin-layout/aside-layout/aside-layout.component';
import { FooterLayoutComponent } from './layouts/admin-layout/footer-layout/footer-layout.component';
import { CategoryComponent } from './layouts/admin-layout/category/category.component';
import { ProductsComponent } from './layouts/admin-layout/products/products.component';
import { CategoryFormComponent } from './layouts/admin-layout/category/category-form/category-form.component';
import { CategoryEditComponent } from './layouts/admin-layout/category/category-edit/category-edit.component';
import { ProductsFormComponent } from './layouts/admin-layout/products/products-form/products-form.component';
import { ProductsEditComponent } from './layouts/admin-layout/products/products-edit/products-edit.component';
import { ProductsListComponent } from './layouts/admin-layout/products/products-list/products-list.component';
import { CategoryListComponent } from './layouts/admin-layout/category/category-list/category-list.component';
import { UsersComponent } from './layouts/users/users.component';
import { UsersListComponent } from './layouts/users/users-list/users-list.component';
import { UserFormComponent } from './layouts/users/user-form/user-form.component';
import { UserEditComponent } from './layouts/users/user-edit/user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ChampComponent,
    TableComponent,
    NameComponent,
    IdentityComponent,
    TableAvatarComponent,
    TableDameComponent,
    FormComponent,
    ShowValidateComponent,
    ProductClientComponent,
    AboutClientComponent,
    ProductDetailClientComponent,
    AdminLayoutComponent,
    ClientLayoutComponent,
    UserComponent,
    AdminProductListComponent,
    AdminProductDetailComponent,
    AdminProductFormComponent,
    AdminProductEditComponent,
    LoginComponent,
    CartComponent,
    HomeProductClientComponent,
    DetailClientComponent,
    SignUpComponent,
    SignInComponent,
    ManagerCartComponent,
    HomeClientComponent,
    HeaderLayoutComponent,
    AsideLayoutComponent,
    FooterLayoutComponent,
    CategoryComponent,
    ProductsComponent,
    CategoryFormComponent,
    CategoryEditComponent,
    ProductsFormComponent,
    ProductsEditComponent,
    ProductsListComponent,
    CategoryListComponent,
    UsersComponent,
    UsersListComponent,
    UserFormComponent,
    UserEditComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
