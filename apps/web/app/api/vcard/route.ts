import { NextRequest } from 'next/server';
import VCardGenerator from '@velto-tools/vcard-file';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const vcardGenerator = new VCardGenerator();
  const vcard = await vcardGenerator.downloadVCardFile(
    {
      name: searchParams.get('name') || '',
      address: searchParams.get('address') || '',
      email: searchParams.get('email') || '',
      company: searchParams.get('company') || '',
      fax: searchParams.get('fax') || '',
      tel: searchParams.get('tel') || '',
      jtitle: searchParams.get('jtitle') || '',
      wurl: searchParams.get('wurl') || '',
      purl: searchParams.get('purl') || '',
      photo: searchParams.get('photo') || '',
      note: searchParams.get('note') || '',
    },
    {
      filename: `${searchParams.get('name')}.vcf`,
    }
  );

  if (vcard.error) {
    return new Response(vcard.message, { status: 400 });
  }

  return new Response(vcard.content, {
    headers: vcard.headers as Record<string, string>,
  });
}
