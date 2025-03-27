import { cookies } from "next/headers";

export async function GET() {
    (await cookies()).delete("vtmunc_admin");
    return new Response("", {status: 200});
}