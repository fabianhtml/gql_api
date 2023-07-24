// Generated by Wrangler on Fri Jul 07 2023 08:10:34 GMT-0700 (Pacific Daylight Time)
export interface Env {
  GRAPHQL_BASE_ENDPOINT: "/";
  GRAPHQL_KV_CACHE: "";
  DATABASE_URL: string | undefined;
  DATABASE_TOKEN: string | undefined;
  OTEL_SERVICE_NAME: string;
  CLERK_PEM_PUBLIC_KEY: string | undefined;
  CLERK_ISSUER_ID: string | undefined;
}

declare global {
  // Declare types for replace variables
  const _APP_ENV: "development" | "production" | "staging";
  const HONEYCOMB_TOKEN: string | undefined;
}

export {};
