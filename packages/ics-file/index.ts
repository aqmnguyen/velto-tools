import * as fs from 'fs';
import * as path from 'path';
import dayjs from 'dayjs';

interface EventOptions {
  startDate: Date;
  endDate: Date;
  summary: string;
  description: string;
  location: string;
  recurringRule?: string;
}

export class ICSGenerator {
  private template: string;

  constructor() {
    this.template = fs.readFileSync(
      path.join(__dirname, 'template.ics'),
      'utf-8'
    );
  }

  private formatDate(date: Date): string {
    return dayjs(date).format('YYYYMMDDTHHmmss') + 'Z';
  }

  private escapeText(text: string): string {
    return text
      .replace(/\\/g, '\\\\')
      .replace(/;/g, '\\;')
      .replace(/,/g, '\\,')
      .replace(/\n/g, '\\n');
  }

  generateICS(options: EventOptions): string {
    const uid = `${dayjs().format('YYYYMMDDHHmmss')}.velto`;
    const recurringRule = options.recurringRule ? options.recurringRule : '';

    const icsContent = this.template
      .replace('%%UID%%', uid)
      .replace('%%DTSTAMP%%', this.formatDate(dayjs().toDate()))
      .replace('%%DTSTART%%', this.formatDate(options.startDate))
      .replace('%%DTEND%%', this.formatDate(options.endDate))
      .replace('%%SUMMARY%%', this.escapeText(options.summary))
      .replace('%%DESCRIPTION%%', this.escapeText(options.description))
      .replace('%%LOCATION%%', this.escapeText(options.location))
      .replace('%%RRULE%%', recurringRule);

    return icsContent;
  }

  generateICSFile(
    options: EventOptions,
    outputPath: string = 'event.ics'
  ): void {
    const icsContent = this.generateICS(options);
    fs.writeFileSync(outputPath, icsContent);
  }
}

export default ICSGenerator;
