import { Routes } from '@angular/router';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { InterpolacionComponent } from './components/interpolacion/interpolacion.component';
import { CreateUpdateUsersComponent } from './components/create-update-users/create-update-users.component';

export const routes: Routes = [
    { path:'list'  ,component:ListUsersComponent},
    { path:'component01',component:InterpolacionComponent},
    { path:'create',component:CreateUpdateUsersComponent},
    { path:'',redirectTo:'list',pathMatch:'full'},
    { path:'**',redirectTo:'list',pathMatch:'full'}
];
