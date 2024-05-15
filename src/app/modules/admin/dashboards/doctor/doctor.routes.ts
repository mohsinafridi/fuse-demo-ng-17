import { Routes } from '@angular/router';
import { DoctorComponent } from './doctor.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';

export default [
    {
        path: '',
        component: DoctorComponent,
        // resolve  : {
        //     data: () => inject(CryptoService).getData(),
        // },
    },
    {
        path: 'list',
        component: DoctorListComponent,
    },
] as Routes;
