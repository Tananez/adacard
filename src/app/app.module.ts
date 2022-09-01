//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './modules/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppTranslateModule } from './modules/app-translate.module';
import { AppApiModule } from './modules/app-api.module';
import { AngularMaterialModule } from './modules/ui-angular-material.module';
//Form modules
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//--------------------------Components--------------------------//
import { AppComponent } from './app.component';

//Index-Components
import { IndexLayoutComponent } from './components/index/index-layout/index-layout.component';
import { LoginComponent } from './components/index/login/login.component';
import { RegisterComponent } from './components/index/register/register.component';
import { RecoverComponent } from './components/index/recover/recover.component';

//User-Components
import { UserLayoutComponent } from './components/user/user-layout/user-layout.component';
import { OverviewComponent } from './components/user/overview/overview.component';
import { SettingsComponent } from './components/user/settings/settings.component';
import { LogoutComponent } from './components/user/logout/logout.component';

//Admin-Components
import { AdminLayoutComponent } from './components/admin/admin-layout/admin-layout.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { ConnectComponent } from './components/admin/connect/connect.component';
import { DisconnectComponent } from './components/admin/disconnect/disconnect.component';
//--------------------------End Components--------------------------//

//Pipes
import { GetKeysPipe } from './pipes/get-keys.pipe';
import { GetSumPipe } from './pipes/get-sum.pipe';
import { GetTimePipe } from './pipes/get-time.pipe';
import { GetVarsPipe } from './pipes/get-vars.pipe';

//Services
import { CrudService } from './services/crud.service';




@NgModule({
  declarations: [

    AppComponent,
    //Pipes
    GetKeysPipe, 
    GetSumPipe, 
    GetTimePipe,
    GetVarsPipe,
    //Components
    DashboardComponent,
    ConnectComponent,
    DisconnectComponent,
    LoginComponent,
    RegisterComponent,
    RecoverComponent,
    LogoutComponent,
    OverviewComponent,
    SettingsComponent,
    UserLayoutComponent,
    IndexLayoutComponent,
    AdminLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, //Routing Module
    AppTranslateModule, // Translate Module
    AppApiModule, // API Module
    AngularMaterialModule, //Angular Material Module
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
