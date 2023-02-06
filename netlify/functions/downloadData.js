const fetch = require('isomorphic-fetch');
const Dropbox = require('dropbox').Dropbox;
let dbx = new Dropbox({accessToken:"sl.BYVTHLjFPldOzj1PPoThisFbQIlD4Mo5hJ-XFWYioctFdcuKLrd5Klo_0NLJ7ekCoYnMl0hE4o14WNNhEpbEuOdKg99eyfcRmHec4YeEzZJxDxs56HlZFvKbN7epwomeTrcMDoa65cIt" process.env.dropToken, fetch: fetch});

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
