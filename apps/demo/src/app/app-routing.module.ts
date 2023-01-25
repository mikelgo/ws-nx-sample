// routing module for app

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    loadChildren: () =>
      import('@nx-test/features/shopping').then(
        (m) => m.FeaturesShoppingModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('@nx-test/features/shopping-cart').then(
        (m) => m.FeaturesShoppingCartModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('@nx-test/features/admin').then((m) => m.FeaturesAdminModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('@nx-test/features/customer').then(
        (m) => m.FeaturesCustomerModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('@nx-test/features/customer-support').then(
        (m) => m.FeaturesCustomerSupportModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [],
})
export class AppRoutingModule {}
