import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@Angular/router"
import { HomeComponent } from "./components/home/home.component";
import { NovedadesComponent } from "./components/novedades/novedades.component";
import { OferentesCulturalesComponent } from "./components/oferentes-culturales/oferentes-culturales.component";
import { QueEsComponent } from "./components/que-es/que-es.component";
import { TengoMasCulturaComponent } from "./components/tengo-mas-cultura/tengo-mas-cultura.component";


//rutas de navegacion
const routes:Routes =[
    { path:"", component:HomeComponent},
    { path:"home", component:HomeComponent},
    { path:"", redirectTo: "home", pathMatch:"full" },
    { path:"que-es-mas-cultura", component:QueEsComponent },
    { path:"tengo-mas-cultura", component:TengoMasCulturaComponent },
    { path:"oferentes-culturales", component:OferentesCulturalesComponent },
    { path:"novedades", component:NovedadesComponent }    
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{ }