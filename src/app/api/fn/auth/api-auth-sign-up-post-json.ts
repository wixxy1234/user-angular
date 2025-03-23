/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { IssuedTokenResponse } from '../../models/issued-token-response';
import { SignUpRequest } from '../../models/sign-up-request';

export interface ApiAuthSignUpPost$Json$Params {
  
    /**
     * Модель для регистрации новой учетной записи
     */
    body?: SignUpRequest
}

export function apiAuthSignUpPost$Json(http: HttpClient, rootUrl: string, params?: ApiAuthSignUpPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<IssuedTokenResponse>> {
  const rb = new RequestBuilder(rootUrl, apiAuthSignUpPost$Json.PATH, 'post');
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

apiAuthSignUpPost$Json.PATH = '/api/Auth/SignUp';
