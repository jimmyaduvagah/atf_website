import {Injectable} from '@angular/core';
import { AppEnv } from '../shared/constant/env.model';

@Injectable()
export class SettingsService {

    private devMode = AppEnv.ENV.DEV_MODE;
    private protocol = AppEnv.ENV.PROTOCOL;
    private domain = AppEnv.ENV.DOMAIN;
    private baseUrl = AppEnv.ENV.BASE_URL;
    private apiVersion = AppEnv.ENV.API_VERSION;
    private uploadBase = AppEnv.ENV.UPLOAD_BASE;

    constructor() {
        // if (!this.devMode) {
        //     this.protocol = 'http';
        //     this.domain = '127.0.0.1';
        // }
    }

    public getUploadBase() {
        return this.uploadBase;
    }

    public getProtocol() {
        return this.protocol;
    }

    public isDevMode() {
        return this.devMode;
    }

    public getDomain() {
        return this.domain;
    }

    public getBaseUrl(version?: string) {
        if (typeof version === 'undefined') {
            version = this.apiVersion;
        }
        return this.baseUrl + 'v' + version + '/';
    }
}
