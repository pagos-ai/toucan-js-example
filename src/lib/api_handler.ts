import fetch from "node-fetch";
import { createAuthHeaders }  from './auth.js';
import { ApiResponse }  from './api_response.js';
import { ApiConfig }  from './config.js';

export async function HandleRequest<T>(config: ApiConfig, body: any, method: string, path: string, contentType: string) : Promise<ApiResponse<T>> {

    let headers = createAuthHeaders(config.clientKey, config.privateKey, body, contentType);

    const reqBody = method == "GET" ? null : body;

    const response = await fetch(`${config.apiHost}${path}`, {
        headers: headers,
        method: method,
        body: reqBody
    });
    
    const { status } = response;
    const textResponse = await response.text();
    
    const apiResponse = new ApiResponse<T>();

    switch(status) {
        case 200: {
            apiResponse.Success = true;
            apiResponse.Result = JSON.parse(textResponse);
            break;
        }
        case 400: {
            apiResponse.Success = false;
            apiResponse.Errors = JSON.parse(textResponse);
            break;
        } 
        case 404: {
            apiResponse.Success = false;
            apiResponse.NotFound = true;
            break;
        } 
        default: {
            apiResponse.Success = false;
            apiResponse.Errors = JSON.parse(textResponse);
            break;
        }
    }

    return apiResponse;
}