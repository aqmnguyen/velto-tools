import { NextRequest } from 'next/server';
import ICSGenerator from '@velto/ics-file';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const formData = {
    title: searchParams.get('title') || '',
    details: searchParams.get('details') || '',
    location: searchParams.get('location') || '',
    startDate: searchParams.get('startDate') || '',
    endDate: searchParams.get('endDate') || '',
    timezone: searchParams.get('timezone') || '',
  };

  const icsGenerator = new ICSGenerator();
  const result = icsGenerator.downloadICSFile(
    {
      summary: formData.title,
      description: formData.details || '',
      location: formData.location || '',
      startDate: new Date(formData.startDate),
      endDate: new Date(formData.endDate),
      timezone: formData.timezone,
    },
    {
      filename: `${formData.title}.ics`,
    }
  );

  if (result.error) {
    return new Response(result.message, { status: 400 });
  }

  return new Response(result.content, {
    headers: result.headers,
  });
}
