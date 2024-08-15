import { useUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req, res) {

    const { user } = useUser();

    const userData = {
        email: user?.primaryEmailAddress?.emailAddress
    }

    const result = await axios.post("https://theuntempered.com/paystackAPI.php", userData, {
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        }
    });

    return NextResponse.json(result);
}