import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import { v4 as uuid } from 'uuid';

import { environment } from '@ar-angular/env/environment';
import { HttpHeaders } from '@angular/common/http';
import { BlockUIService } from '@ar-angular/shared/services/block-ui.service';
import { RoutePaths } from '@ar-angular/shared/constants';

@Injectable({
    providedIn: 'root'
})
export class ServiceHandlerService {

    private baseUrl: string;
    private urlVersion: string;
    // private requestOptions: any;


    constructor(private httpClient: HttpClient, private router: Router, private blockUIService: BlockUIService) {
        this.redirectExpiredSessionOnly = this.redirectExpiredSessionOnly.bind(this);
        this.baseUrl = environment.api;
        this.urlVersion = environment.apiVersion;
    }
    get requestOptions() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json;charset=UTF-8',
                'correlation-id': uuid(),
                'transaction-id': uuid(),
                'consumer-id': environment.consumerId
            }),
            withCredentials: true
        };
    }


    /**
     * @param url - relative path of the resourse
     * @param body - http request body for the POST request.
     */

    post<T>(url, body, params?: HttpParams): Observable<T> {

        console.log('POST ' + url);
        this.blockUIService.display(true);
        return this.httpClient
            .post<T>(`${this.baseUrl}/${this.urlVersion}${url}`, body || {}, { ...this.requestOptions, params: params })
            .pipe(
                catchError(this.redirectExpiredSessionOnly),
                finalize(() => this.blockUIService.display(false))
            );
    }

    /**
     * @param url - relative path of the resourse
     * @param body - http request body for the PUT request.
     */

    put<T>(url, body, params?: HttpParams): Observable<T> {

        console.log('PUT ' + url);

        return this.httpClient
            .put<T>(`${this.baseUrl}/${this.urlVersion}${url}`, body || {}, { ...this.requestOptions, params: params })
            .pipe(
                catchError(this.redirectExpiredSessionOnly),
                finalize(() => this.blockUIService.display(false))
            );
    }

    /**
     * @param url - relative path of the resourse
     * @param errorHandlingOption - Consumer decides how errors are handled. See HttpErrorHandlingOptions enumeration for the options.
     */

    get<T>(url, params?: HttpParams): Observable<T> {

        console.log('GET ' + url);
        this.blockUIService.display(true);


        return this.httpClient
            .get<T>(`${this.baseUrl}/${this.urlVersion}${url}`, { ...this.requestOptions, params: params })
            .pipe(
                catchError(this.redirectExpiredSessionOnly),
                finalize(() => this.blockUIService.display(false))
            );
    }

    /**
     * @param errror - error response received from the api request
     * @returns empty Observable
     * @description This error handler will navigate the user to the login page if 401 error occurs.
     * If the error response has status code 401, then login page will tell user that their session has expired.
     * If the error response has any other status code, then Observable will throw an error, to let the consumer decide how to handle.
     */

    private redirectExpiredSessionOnly(error: Response | any) {
        this.blockUIService.display(false);
        console.error(error);
        if (error.status && error.status === 401) {
            this.router.navigateByUrl(RoutePaths.LOGIN);
            return throwError(error);
        } else {
            return throwError(error);
        }
    }

}
