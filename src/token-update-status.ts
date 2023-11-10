import { toucanConfig }  from './lib/config.js';
import { TokenUpdateStatusResponse }  from './lib/api_response.js';
import { HandleRequest }  from './lib/api_handler.js';

const statuses = ["suspend", "resume"];

(async () => {
    if(process.argv.length != 4) {
        console.log("provide a token ref id and a new status");
        process.exit(1);
    }

    const tokenRefId = process.argv[2];
    const newStatus = process.argv[3];
    if(!statuses.includes(newStatus)) {
        console.log("unknown status", newStatus);
        process.exit(1);
    }

    let token =  await HandleRequest<TokenUpdateStatusResponse>(toucanConfig, 
        "",  
        "PUT", 
        `/toucan/tokens/${tokenRefId}/${newStatus}`, 
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
 