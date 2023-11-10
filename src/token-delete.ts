import { toucanConfig }  from './lib/config.js';
import { TokenUpdateStatusResponse }  from './lib/api_response.js';
import { HandleRequest }  from './lib/api_handler.js';

(async () => {
    if(process.argv.length != 3) {
        console.log("provide a token ref id");
        process.exit(1);
    }

    const tokenRefId = process.argv[2];

    let token =  await HandleRequest<TokenUpdateStatusResponse>(toucanConfig, 
        "",  
        "DELETE", 
        `/toucan/tokens/${tokenRefId}`, 
        "");

    if(token.Success) {
        console.log("success ", token.Result)
    } else {
        if(token.NotFound) {
            console.log("token not found");
        } else {
            console.log("failed ", token.Errors);
        }
    }
})();
 