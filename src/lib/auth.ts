import forge from "node-forge";

const authorizationScheme = 'V1-HMAC-SHA256';

function computeHash(message: string, base64key: string) {
   var key = forge.util.decode64(base64key);
   var hmac = forge.hmac.create();
   hmac.start('sha256', key);
   hmac.update(message);
   return forge.util.encode64(hmac.digest().bytes());
}

function createAuthHeader(clientKey: string, date: string, privateKey: string, bodyJ: string) {
   var payloadToSign = clientKey + date + bodyJ;

   var computedSignature = computeHash(payloadToSign, privateKey);
   let header = authorizationScheme + ', Signature: ' + computedSignature;
   return header;
};

export function createAuthHeaders(clientKey: string, privateKey: string, body: string, contentType: string) {
   let date=new Date().toISOString();
   let authHeader = createAuthHeader(clientKey, date, privateKey, body);
   let headers = {
       'X-Client-Key': clientKey,
       'X-Date': date,
       'Authorization': authHeader,
       'Content-Type': contentType
   };
   
   return headers;
}
