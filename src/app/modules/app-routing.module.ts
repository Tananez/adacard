import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//--------------------------Components--------------------------//
//Index-Components
import { IndexLayoutComponent } from '../components/index/index-layout/index-layout.component';
import { LoginComponent } from '../components/index/login/login.component';
import { RegisterComponent } from '../components/index/register/register.component';
import { RecoverComponent } from '../components/index/recover/recover.component';

//User-Components
import { UserLayoutComponent } from '../components/user/user-layout/user-layout.component';
import { OverviewComponent } from '../components/user/overview/overview.component';
import { SettingsComponent } from '../components/user/settings/settings.component';
import { LogoutComponent } from '../components/user/logout/logout.component';

//Admin-Components
import { AdminLayoutComponent } from '../components/admin/admin-layout/admin-layout.component';
import { DashboardComponent } from '../components/admin/dashboard/dashboard.component';
import { ConnectComponent } from '../components/admin/connect/connect.component';
import { DisconnectComponent } from '../components/admin/disconnect/disconnect.component';
//--------------------------End Components--------------------------//
const routes: Routes = [

  { path: 'index', component: IndexLayoutComponent,
  children: [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'recover', component: RecoverComponent },
  ]
  },
  { path: 'user', component: UserLayoutComponent,
  children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: OverviewComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'logout', component: LogoutComponent }
  ]
  },
  { path: 'admin', component: AdminLayoutComponent,
  children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'connect', component: ConnectComponent },
    { path: 'disconnect', component: DisconnectComponent }
  ]
  },
  { path: '**', component: IndexLayoutComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
