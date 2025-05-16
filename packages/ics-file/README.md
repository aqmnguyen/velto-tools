# @velto/ics-file

A Node package for generating ICS (iCalendar) files with support for recurring events.

## Installation

```bash
npm install @velto/ics-file
```

## Usage

```typescript
import ICSGenerator from '@velto/ics-file';

// Create an instance of the generator
const generator = new ICSGenerator();

// Generate an ICS file
const options = {
  startDate: new Date('2024-03-20T10:00:00Z'), // Date should be in UTC
  endDate: new Date('2024-03-20T11:00:00Z'), // Date should be in UTC
  summary: 'Team Meeting',
  description: 'Weekly team sync',
  location: 'Conference Room A',
  recurringRule: 'FREQ=WEEKLY;COUNT=10', // Optional: Add recurring rule
};

// Generate ICS content as string
const icsContent = generator.generateICS(options);

// Or save directly to a file
generator.generateICSFile(options, 'event.ics');
```

## API

### ICSGenerator

#### Constructor

```typescript
new ICSGenerator();
```

#### Methods

##### generateICS(options: EventOptions): string

Generates ICS content as a string.

##### generateICSFile(options: EventOptions, outputPath: string): void

Generates and saves ICS content to a file.

### EventOptions Interface

```typescript
interface EventOptions {
  startDate: Date; // Event start date and time
  endDate: Date; // Event end date and time
  summary: string; // Event title
  description: string; // Event description
  location: string; // Event location
  recurringRule?: string; // Optional recurring rule (RRULE format)
}
```

## Recurring Rules

The package supports recurring events using the RRULE format. Here are some examples:

- Weekly event for 10 occurrences: `FREQ=WEEKLY;COUNT=10`
- Daily event until a specific date: `FREQ=DAILY;UNTIL=20241231T235959Z`
- Monthly event on the first Monday: `FREQ=MONTHLY;BYDAY=1MO`

For more information about RRULE format, refer to the [iCalendar RFC](https://tools.ietf.org/html/rfc5545#section-3.8.5.3).
