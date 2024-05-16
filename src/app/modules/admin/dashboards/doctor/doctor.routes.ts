import { Routes } from '@angular/router';
import { DoctorComponent } from './doctor.component';

export default [
    {
        path: '',
        component: DoctorComponent,
        // resolve  : {
        //     data: () => inject(CryptoService).getData(),
        // },
    },
] as Routes;
