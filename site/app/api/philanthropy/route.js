/**
 * Endpoint: api/philanthropy
 * 
 * For philanthropy we are hardcoding 'id' to 1
 */

import { getCurrentDate } from "@/app/utils/util";
import { getSiteMetaData, putSiteMetaData } from "../db/dynamodb";


export async function GET() {
    try {
        const data = await getSiteMetaData();
        return Response.json(data);
    }
    catch (e) {
        console.log(e);
        return new Response("Error with fetching meta data", {status: 500});
    }
}

export async function POST(request) {
    try {
        const body = await request.json();
        const philanthropy_data = {
            fundsRaised: body["fundsRaised"],
            // Consistent id 1 for this information
            id: 1,
            date: getCurrentDate()
        }
        
        await putSiteMetaData(philanthropy_data);
        return Response.json(body);
    }
    catch (e) {
        console.log(e);
        return new Response("Error with inserting philanthropy funds raised", {status: 500});
    }
}