import { toucanConfig }  from './lib/config.js';
import { TokenResponse }  from './lib/api_response.js';
import { HandleRequest }  from './lib/api_handler.js';

(async () => {
    let card = {
        'accountNumber': '4622943127039593',
        'expirationDate': {
            'year': '2023',
            'month': '12'
        }
     };
   
    let token = await HandleRequest<TokenResponse>(toucanConfig, 
        JSON.stringify(card),  
        "POST", 
        `/toucan/tokens/tokenize`, 
        "application/json");

    if(token.Success) {
        console.log("success ", token.Result)
    } else {
        console.log("failed ", token.Errors)
    }
    
 })();
 