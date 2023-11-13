// Generated by Wrangler on Fri Jul 07 2023 08:10:34 GMT-0700 (Pacific Daylight Time)
export interface Env {
  GRAPHQL_BASE_ENDPOINT: "/";
  DATABASE_URL: string | undefined;
  DATABASE_TOKEN: string | undefined;
  OTEL_SERVICE_NAME: string;
  CLERK_PEM_PUBLIC_KEY: string | undefined;
  CLERK_ISSUER_ID: string | undefined;
  HONEYCOMB_API_KEY: string | undefined;
  ENFORCED_JWT_TOKEN: string | undefined;
  MAIL_QUEUE: Queue;
  GOOGLE_PHOTOS_IMPORT_QUEUE: Queue;
  RESEND_EMAIL_KEY: string;
}

declare global {
  // Declare types for replace variables
  const _APP_ENV: "development" | "production" | "staging";
  const HONEYCOMB_TOKEN: string | undefined;
}

export {};
