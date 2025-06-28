import posthog from 'posthog-js';

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY as string;
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST as string;

posthog.init(POSTHOG_KEY, {
  api_host: POSTHOG_HOST,
  defaults: '2025-05-24',
  before_send: (event) => {
    // Handle null events
    if (!event) return null;

    // Sample 50% of web vitals events
    if (event.event === '$web_vitals' && Math.random() > 0.5) {
      return null; // Don't send this event
    }
    return event; // Send all other events
  },
});
