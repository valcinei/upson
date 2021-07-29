
// const os = require('os');
const platformLibs = {
    "darwin":{
        path:"./libs/instantclient_19_8"
    }
    
}

export const getOraclePath = ()=>{
    return platformLibs.darwin.path
}