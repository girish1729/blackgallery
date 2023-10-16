import { Injectable, Inject } from '@angular/core';
import {
    HttpEvent,
    HttpEventType,
    HttpErrorResponse,
    HttpResponse,
    HttpClient
} from '@angular/common/http';
import {
    Observable
} from 'rxjs';
import { Location } from '@angular/common';

@Injectable()
export class ConfigService {

    private config: any;

    constructor(private location: Location, private http: HttpClient) {
    }

    async getImages(): Promise<string> {
        let conf = await this.getConfig();
        return Promise.resolve(conf.images);
    }

    private async getConfig(): Promise<any> {
        if (!this.config) {
            this.config = (await
this.http.get(this.location.prepareExternalUrl('/assets/config.json')).toPromise()).json();
        }
        return Promise.resolve(this.config);
    }
}

