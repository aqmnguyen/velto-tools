interface ContactOptions {
  name: string;
  address: string;
  email: string;
  company: string;
  fax: string;
  tel: string;
  jtitle: string;
  wurl: string;
  purl: string;
  photo: string;
  note: string;
}

interface DownloadOptions {
  filename?: string;
  contentType?: string;
}

interface VCardResponse {
  error: boolean;
  message: string;
  content: string;
  headers: {
    'Content-Type': string;
    'Content-Disposition': string;
  };
}

const VCARD_TEMPLATE: string = `BEGIN:VCARD
N:%%NAME%%
ADR;DOM;PARCEL;HOME:%%ADDRESS%%
EMAIL;INTERNET:%%EMAIL%%
ORG:%%COMPANY%%
TEL;FAX;WORK:%%FAX%%
TEL;HOME:%%TEL%%
TITLE:%%JTITLE%%
URL;WORK:%%WURL%%
URL:%%PURL%%
PHOTO;ENCODING=b:%%PHOTO%%
NOTE:%%NOTE%%
END:VCARD`;

export class VCardGenerator {
  private template: string;

  constructor() {
    this.template = VCARD_TEMPLATE;
  }

  private escapeText(text: string): string {
    return text
      .replace(/\\/g, '\\\\')
      .replace(/;/g, '\\;')
      .replace(/,/g, '\\,')
      .replace(/\n/g, '\\n');
  }

  private async convertImgBase64(url: string) {
    try {
      const response = await fetch(url);
      const data = await response.arrayBuffer();
      return Buffer.from(data).toString('base64');
    } catch {
      return '';
    }
  }

  async generateVCard(options: ContactOptions): Promise<string> {
    const photo = options.photo
      ? await this.convertImgBase64(options.photo)
      : '';
    const vcardContent = this.template
      .replace('%%NAME%%', options.name)
      .replace('%%ADDRESS%%', options.address)
      .replace('%%EMAIL%%', options.email)
      .replace('%%COMPANY%%', options.company)
      .replace('%%FAX%%', options.fax)
      .replace('%%TEL%%', options.tel)
      .replace('%%JTITLE%%', options.jtitle)
      .replace('%%WURL%%', options.wurl)
      .replace('%%PURL%%', options.purl)
      .replace('%%PHOTO%%', photo)
      .replace('%%NOTE%%', this.escapeText(options.note || ''));
    return vcardContent;
  }

  async downloadVCardFile(
    options: ContactOptions,
    downloadOptions: DownloadOptions = {}
  ): Promise<VCardResponse> {
    try {
      const vcardContent: string = await this.generateVCard(options);
      const filename: string = downloadOptions.filename || 'contact.vcf';

      return {
        error: false,
        message: 'VCard file generated successfully',
        content: vcardContent,
        headers: {
          'Content-Type': 'text/x-vcard',
          'Content-Disposition': `attachment; filename="${filename}"`,
        },
      };
    } catch (e) {
      return {
        error: true,
        message: e instanceof Error ? e.message : 'Unknown error occurred',
        headers: {
          'Content-Type': '',
          'Content-Disposition': '',
        },
        content: '',
      };
    }
  }
}

export default VCardGenerator;
