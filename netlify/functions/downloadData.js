const fetch = require('isomorphic-fetch');
const Dropbox = require('dropbox').Dropbox;
let dbx = new Dropbox({accessToken:"sl.BYXukoy-lFxBtcQlUNxrFg2G2WHaYtXgC3jt9RhPXPMpfw7EnCTGTbP3Uip0WCG7-5h9w8RMal3Hk8JNfqNXp_8lnZoh7z_iFt4pxQ9tlrVZw4k7b24TDAyvIRMn7CgsbeOnwfDJ4e-r" process.env.dropToken, fetch: fetch});

exports.handler = async function(event, context) {
    try {
        const response = await dbx.filesDownload({path: "/leaderboard.json"});

        if (response.status !== 200) {
            return {
                statusCode: response.status,
                message: "Dropbox error"
            }
        }

        const data = JSON.parse(response.result.fileBinary);

        return {
            statusCode: 200,
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        }
    } catch(err) {
        console.log(err)
        return {
            statusCode: 502,
            message: "Error connecting to dropbox"
        }
    }
}
