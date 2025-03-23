/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { IssuedTokenResponse } from '../../models/issued-token-response';
import { RefreshTokenRequest } from '../../models/refresh-token-request';

export interface ApiAuthRefreshTokenPost$Json$Params {
  
    /**
     * Модель для обновления токена доступа
     */
    body?: RefreshTokenRequest
}

export function apiAuthRefreshTokenPost$Json(http: HttpClient, rootUrl: string, params?: ApiAuthRefreshTokenPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<IssuedTokenResponse>> {
  const rb = new RequestBuilder(rootUrl, apiAuthRefreshTokenPost$Json.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<IssuedTokenResponse>;
    })
  );
}

apiAuthRefreshTokenPost$Json.PATH = '/api/Auth/RefreshToken';
