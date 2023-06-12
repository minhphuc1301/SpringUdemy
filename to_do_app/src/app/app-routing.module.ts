import { RouteGuardService } from './service/route-guard.service';
import { ToDoListsComponent } from './to-do-lists/to-do-lists.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'welcome/:name',
        component: WelcomeComponent,
        canActivate: [RouteGuardService]
    },
    {
        path: 'todos',
        component: ToDoListsComponent,
        canActivate: [RouteGuardService]
    },
    {
        path: "**",
        component: ErrorPageComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}