import { Injectable } from '@angular/core';
import { assign, cloneDeep } from 'lodash-es';
import { doctors as DoctorsData } from './data';
import { FuseMockApiService } from '@fuse/lib/mock-api';
@Injectable({
    providedIn: 'root',
})
export class DoctorMockApi {
    private _doctors: any[] = DoctorsData;

    constructor(private _fuseMockApiService: FuseMockApiService) {
        this.registerHandlers();
    }

    registerHandlers(): void {
        // -----------------------------------------------------------------------------------------------------
        // @ Categories - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/dashboard/doctor/doctors')
            .reply(() => [200, cloneDeep(this._doctors)]);
    }
}
