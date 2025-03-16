import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import { UsersComponent } from './pages/users/users.component';
import { authGuard } from './guards/auth.guard';


export const routes: Routes = [
    {path: "auth", canActivate: [authGuard], component: AuthComponent},
    {path: "main", canActivate: [authGuard], component: UsersComponent},
    {path: '', redirectTo: 'main', pathMatch: 'full' },
    // ** - срабатывает если не был найден зарегистрированный путь (нет в массиве)
    {path: "**", component: PageNotFoundComponent} 
];
