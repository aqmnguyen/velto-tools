import dayjs from 'dayjs';
import { tzlib_get_ical_block } from 'timezones-ical-library';

export interface EventOptions {
  startDate: Date;
  endDate: Date;
  summary: string;
  description: string;
  location: string;
  recurringRule?: string;
  timezone?: string;
}

export interface DownloadOptions {
  filename?: string;
  contentType?: string;
}

export interface ICSResponse {
  error: boolean;
  message: string;
  content: string;
  headers: {
    'Content-Type': string;
    'Content-Disposition': string;
  };
}

const ICS_TEMPLATE = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Velto Tools//ICS Generation//EN
%%VTIMEZONE%%
BEGIN:VEVENT
UID:%%UID%%
DTSTAMP:%%DTSTAMP%%
DTSTART;TZID=%%TZID%%:%%DTSTART%%
DTEND;TZID=%%TZID%%:%%DTEND%%
SUMMARY:%%SUMMARY%%
DESCRIPTION:%%DESCRIPTION%%
LOCATION:%%LOCATION%%
%%RRULE%%
END:VEVENT
END:VCALENDAR`;

export class ICSGenerator {
  private template: string;

  constructor() {
    this.template = ICS_TEMPLATE;
  }

  private formatDate(date: Date, timezone?: string): string {
    const dayjsDate = dayjs(date).format('YYYYMMDDTHHmmss');
    return timezone ? dayjsDate : dayjsDate + 'Z';
  }

  private getVTimezone(timezone: string): string {
    const vTime = tzlib_get_ical_block(timezone);
    return vTime as string;
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
    const recurringRule = options.recurringRule || ''; // WIP
    const timezone = options.timezone || 'UTC';

    const icsContent = this.template
      .replace('%%UID%%', uid)
      .replace('%%DTSTAMP%%', this.formatDate(dayjs().toDate()))
      .replace(/%%TZID%%/g, timezone)
      .replace(
        '%%DTSTART%%',
        this.formatDate(options.startDate, options.timezone)
      )
      .replace('%%DTEND%%', this.formatDate(options.endDate, options.timezone))
      .replace('%%SUMMARY%%', this.escapeText(options.summary))
      .replace('%%DESCRIPTION%%', this.escapeText(options.description || ''))
      .replace('%%LOCATION%%', this.escapeText(options.location || ''))
      .replace('%%RRULE%%', recurringRule)
      .replace('%%VTIMEZONE%%', this.getVTimezone(timezone));

    return icsContent;
  }

  downloadICSFile(
    options: EventOptions,
    downloadOptions: DownloadOptions = {}
  ): ICSResponse {
    try {
      if (
        !(options.startDate instanceof Date) ||
        !(options.endDate instanceof Date)
      ) {
        throw new Error('startDate and endDate must be instances of Date');
      }

      if (
        typeof options.summary !== 'string' ||
        typeof options.description !== 'string' ||
        typeof options.location !== 'string'
      ) {
        throw new Error('summary, description, and location must be strings');
      }

      const icsContent = this.generateICS(options);
      const filename = downloadOptions.filename || 'event.ics';

      return {
        error: false,
        message: 'ICS file generated successfully',
        content: icsContent,
        headers: {
          'Content-Type': 'text/calendar',
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

export default ICSGenerator;
