import { generateRandomId, getCurrentDate } from "@/app/utils/util";
import { deleteApplicant, getApplicants, putApplicant } from "../db/dynamodb";

export async function GET() {
    try {
        const applicants = await getApplicants();
        return Response.json(applicants);
    }
    catch (e) {
        console.log(e);
        return new Response("Error with applicants", {status: 500});
    }
}

export async function POST(request) {
    try {
        const body = await request.json();
        const applicant = {
            advisorPhone: body["advisorPhone"],
            delegationSize: body["delegationSize"],
            headDelegateName: body["headDelegateName"],
            schoolName: body["schoolName"],
            advisorOtherInformation: body["advisorOtherInformation"],
            commentsOrQuestions: body["commentsOrQuestions"],
            advisorEmail: body["advisorEmail"],
            advisorRelation: body["advisorRelation"],
            schoolMailingAddress: body["schoolMailingAddress"],
            headDelegateEmail: body["headDelegateEmail"],
            headDelegatePhone: body["headDelegatePhone"],
            advisorName: body["advisorName"],
            delegateList: body["delegateList"],
            invoiceStatus: 0,
            id: generateRandomId(),
            date: getCurrentDate()
        }
        
        await putApplicant(applicant);
        return Response.json(body);
    }
    catch (e) {
        console.log(e);
        return new Response("Error with applicants", {status: 500});
    }
}

export async function DELETE(request) {
    try {
        const body = await request.json();
        const id = body.id;
        if (!id) {
            return new Response("No id sent", {status: 400})
        }

        await deleteApplicant(id);
        return new Response(`Deleted applicant with id: ${id}`, {status: 200});
    }
    catch (e) {
        console.log(e);
        return new Response("Error with deletion",  {status: 500});
    }
}