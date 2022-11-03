import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@Angular/router"
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { QueEsComponent } from "./components/que-es/que-es.component";


//rutas de navegacion
const routes:Routes =[
    { path:"", component:HomeComponent},
    { path:"home", component:HomeComponent},
    { path:"", redirectTo: "home", pathMatch:"full" },
    { path:"que-es-mas-cultura", component:QueEsComponent }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{ }