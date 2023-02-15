export interface UserAgentResponse {
  browser: string | undefined | null;
  version: string | undefined | null;
  os: string | undefined | null;
  platform: string | undefined | null;
  geoIp: { [key: string]: string | undefined | null } | undefined;
  source: string | undefined | null;
  is: [string] | string[];
}
