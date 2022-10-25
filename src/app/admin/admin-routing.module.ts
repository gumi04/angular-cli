import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailComponent } from '../email/email.component';
import { UsersComponent } from '../users/users.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {path: 'admin', component: AdminComponent, children: [
    {path: '', component: UsersComponent},
    {path: 'blast', component: EmailComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
