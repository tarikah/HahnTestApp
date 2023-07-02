import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartsComponent } from './components/parts/parts/parts.component';
import { AddUpdateComponent } from './components/crud/add-update-part/add-update/add-update.component';

const routes: Routes = [
  { path: '', component: PartsComponent},
  { path: 'parts', component: PartsComponent},
  { path: 'add', component: AddUpdateComponent },
  { path: 'update/:id', component: AddUpdateComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
