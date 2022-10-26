console.log("holis");
/**const axios = require('axios');*/

async function makeRequest() {

    const config = {
        method: 'get',
        url: 'http://webcode.me'
    }

    let res = await axios(config)

    console.log(res.status);
    console.log(res.data);
}

makeRequest();
