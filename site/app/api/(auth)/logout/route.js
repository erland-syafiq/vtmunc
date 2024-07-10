import { cookies } from "next/headers";

export async function GET() {
    cookies().delete("vtmunc_admin");
    return new Response("", {status: 200});
}