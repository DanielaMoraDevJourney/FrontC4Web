import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ingreso-cedula',
  standalone: false,
  
  templateUrl: './ingreso-cedula.component.html',
  styleUrl: './ingreso-cedula.component.css'
})
export class IngresoCedulaComponent {
  cedula: string = '';

  constructor(private http: HttpClient, private router: Router) {}
  async onSubmit() {
    try {
      const contribuyenteRes: any = await this.http
        .get(`http://localhost:8000/contribuyente?cedula=${this.cedula}001`)
        .toPromise();

      const licenciaRes: any = await this.http
        .get(`http://localhost:8081/licencia?cedula=${this.cedula}`)
        .toPromise();

      this.router.navigate(['/resultados'], {
        queryParams: {
          contribuyente: contribuyenteRes.value,
          puntos: licenciaRes.value
        }
      });
    } catch (error) {
      console.error('Error al consultar los servicios', error);
    }
  }
}
