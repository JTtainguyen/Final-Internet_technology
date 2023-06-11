// GET /comments/api
import { NextResponse, NextRequest } from 'next/server';

export async function GET() {
    const response = await fetch('https://api.airtable.com/v0/appAzDitY8UoCvbA0/comments', {
        headers: {
            Authorization: `Bearer ${process.env.AIRTABLE_API_TOKEN}`,
        },
        next: {
            // revalidate: 10,
            revalidate: 0,
        }
    });
    const data = await response.json();

    return NextResponse.json(data.records);
}

export async function POST(request: NextRequest) {
    const responseData = await request.json();
    console.log('Plain data: ', responseData);

    const response = await fetch('https://api.airtable.com/v0/appAzDitY8UoCvbA0/comments', {
        headers: {
            Authorization: `Bearer patgTwbg4XRmJAATH.f9a5b0e286a5143d5793dd061c0dc6721f400c95bc5c5a011f9341e2d746794f`,
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            records: [{
                fields: {
                    content: responseData.commentContent
                }
            }]
        }),
    });
    const data = await response.json();

    return NextResponse.json(data);
}
