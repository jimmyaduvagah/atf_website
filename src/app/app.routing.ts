import { Routes, RouterModule } from '@angular/router';
import { UserRoutes } from './User/user.routes';


const appRoutes: Routes = [
    ...UserRoutes,

];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
