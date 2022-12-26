import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'admin', 
    children: [
      { path: 'add-new', loadChildren: () => import('./pages/admin/add-new-item/add-new-item.module').then(m => m.AddNewItemModule) },
      { path: 'listing', loadChildren: () => import('./pages/admin/listing/listing.module').then(m => m.ListingModule) }

    ],
    // loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule) 
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
