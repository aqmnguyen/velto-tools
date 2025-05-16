import * as fs from 'fs';
import * as path from 'path';

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

export class VCardGenerator {
  private template: string;

  constructor() {
    this.template = fs.readFileSync(
      path.join(__dirname, 'template.vcard'),
      'utf-8'
    );
  }

  private escapeText(text: string): string {
    return text
      .replace(/\\/g, '\\\\')
      .replace(/;/g, '\\;')
      .replace(/,/g, '\\,')
      .replace(/\n/g, '\\n');
  }

  generateVCard(options: ContactOptions): string {
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
      .replace('%%PHOTO%%', options.photo)
      .replace('%%NOTE%%', this.escapeText(options.note || ''));
    return vcardContent;
  }

  downloadVCardFile(
    options: ContactOptions,
    downloadOptions: DownloadOptions = {}
  ) {
    try {
      const vcardContent = this.generateVCard(options);
      const filename = downloadOptions.filename || 'contact.vcf';

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
        headers: {},
        content: '',
      };
    }
  }
}

export default VCardGenerator;
