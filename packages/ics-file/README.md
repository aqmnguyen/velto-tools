# @velto-tools/ics-file

A Node.js package for generating ICS (iCalendar) files.

## Installation

```bash
npm install @velto-tools/ics-file
# or
yarn add @velto-tools/ics-file
# or
bun add @velto-tools/ics-file
```

## Usage

### Basic Usage

```typescript
import ICSGenerator from '@velto-tools/ics-file';

const icsGenerator = new ICSGenerator();

// Generate ICS content
const icsContent = icsGenerator.generateICS({
  startDate: new Date('2024-03-20T10:00:00Z'),
  endDate: new Date('2024-03-20T11:00:00Z'),
  summary: 'Team Meeting',
  description: 'Weekly team sync',
  location: 'Conference Room A',
});

// Generate download response
const { content, headers } = icsGenerator.downloadICSFile(
  {
    startDate: new Date('2024-03-20T10:00:00Z'),
    endDate: new Date('2024-03-20T11:00:00Z'),
    summary: 'Team Meeting',
    description: 'Weekly team sync',
    location: 'Conference Room A',
  },
  {
    filename: 'meeting.ics',
    contentType: 'text/calendar',
  }
);
```

### API

#### `generateICS(options: EventOptions): string`

Generates ICS content as a string.

```typescript
interface EventOptions {
  startDate: Date;
  endDate: Date;
  summary: string;
  description: string;
  location: string;
  recurringRule?: string;
}
```

#### `downloadICSFile(options: EventOptions, downloadOptions?: DownloadOptions): { content: string, headers: Record<string, string> }`

Generates ICS content and returns it with appropriate download headers.

```typescript
interface DownloadOptions {
  filename?: string; // Default: 'event.ics'
  contentType?: string; // Default: 'text/calendar'
}
```

Returns an object with:

- `content`: The ICS file content as a string
- `headers`: Object containing Content-Type and Content-Disposition headers

### Example with Fastify

```typescript
import Fastify from 'fastify';
import ICSGenerator from '@velto-tools/ics-file';

const app = Fastify();
const icsGenerator = new ICSGenerator();

app.get('/download', async (request, reply) => {
  const { content, headers } = icsGenerator.downloadICSFile(
    {
      startDate: new Date('2024-03-20T10:00:00Z'),
      endDate: new Date('2024-03-20T11:00:00Z'),
      summary: 'Team Meeting',
      description: 'Weekly team sync',
      location: 'Conference Room A',
    },
    {
      filename: 'meeting.ics',
    }
  );

  // Set headers
  Object.entries(headers).forEach(([key, value]) => {
    reply.header(key, value);
  });

  // Send content
  return reply.send(content);
});
```

### Example with Express

```typescript
import express from 'express';
import ICSGenerator from '@velto-tools/ics-file';

const app = express();
const icsGenerator = new ICSGenerator();

app.get('/download', (req, res) => {
  const { content, headers } = icsGenerator.downloadICSFile(
    {
      startDate: new Date('2024-03-20T10:00:00Z'),
      endDate: new Date('2024-03-20T11:00:00Z'),
      summary: 'Team Meeting',
      description: 'Weekly team sync',
      location: 'Conference Room A',
    },
    {
      filename: 'meeting.ics',
    }
  );

  // Set headers
  Object.entries(headers).forEach(([key, value]) => {
    res.setHeader(key, value);
  });

  // Send content
  res.send(content);
});
```

## License

MIT

## Recurring Rules

The package supports recurring events using the RRULE format. Here are some examples:

- Weekly event for 10 occurrences: `FREQ=WEEKLY;COUNT=10`
- Daily event until a specific date: `FREQ=DAILY;UNTIL=20241231T235959Z`
- Monthly event on the first Monday: `FREQ=MONTHLY;BYDAY=1MO`

For more information about RRULE format, refer to the [iCalendar RFC](https://tools.ietf.org/html/rfc5545#section-3.8.5.3).
