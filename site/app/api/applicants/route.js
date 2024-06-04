import { generateRandomId, getCurrentDate } from "@/app/utils/util";
import { getApplicants, putApplicant } from "../db/dynamodb";

export async function GET() {
    try {
        const applicants = await getApplicants();
        return Response.json(applicants);
    }
    catch (e) {
        console.log(e);
        return new Response("Error with applicants", 500);
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
        console.log(applicant);
        await putApplicant(applicant);
        return Response.json(body);
    }
    catch (e) {
        console.log(e);
        return new Response("Error with applicants", 500);
    }
}