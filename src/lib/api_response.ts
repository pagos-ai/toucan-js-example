export class ApiResponse<T> {
    Success: boolean = false;
    NotFound: boolean = false;
    Errors?: Errors;
    Result?: T;
}

export interface TokenResponse {
    cardNetworkName: string;
    tokenRefId: string;
    panLast4: string;
    token: string;
    expirationDate: ExpirationDate;
}

export interface TokenGetStatusResponse {
    cardNetworkName: string;
    tokenRefId: string;
    panLast4: string;
    token: string;
    expirationDate: ExpirationDate;
    status: string;
}

export interface TokenStatusResponse {
    cardNetworkName: string;
    tokenRefId: string;
    panLast4: string;
    token: string;
    expirationDate: ExpirationDate;
    status: string;
}

export interface TokenUpdateStatusResponse {
    tokenRefId: string;
    status: string;
}

export interface TransactResponse {
    cryptogram: string;
    token: string;
}

export interface ExpirationDate {
    year: string,
    month: string
}

export interface Errors {
    code: number;
    traceId: string;
    message: string ;
    error: Map<string,  string[]>;
}