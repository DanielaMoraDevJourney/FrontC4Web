import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresoCedulaComponent } from './components/ingreso-cedula/ingreso-cedula.component';
import { ResultadosComponent } from './components/resultados/resultados.component';

const routes: Routes = [
  { path: '', component: IngresoCedulaComponent },
  { path: 'resultados', component: ResultadosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
