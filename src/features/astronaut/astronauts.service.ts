import { Injectable } from "@angular/core";
import { AstronautSimple } from "../../common/models/astronauts/astronauts-simple.model";
import { CommonResponse } from "../../common/models/common-response.model";
import { RestGenericService } from "../../utilities/service/generic-rest-service/rest-generic.service";
import { environment } from '../../environments/environment';
import { Observable } from "rxjs";
import { HttpParams } from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})
export class AstronautService {


    private url: string;
    private endpoint = 'astronaut';
    constructor(private restService: RestGenericService) {
        this.url = `${environment.LL2_BASE_URL}/${this.endpoint}`;
    }

    getAstronautById(id: string | number): Observable<AstronautSimple> {
        return this.restService.get<AstronautSimple>(this.url, id);
    }

    getAstronautsList(limit: number = 8, offset: number = 10): Observable<CommonResponse<AstronautSimple>> {
        let params = new HttpParams()
            .set('limit', limit)
            .set('offset', offset);            
        return this.restService.getList<CommonResponse<AstronautSimple>>(this.url, params);
    }

}