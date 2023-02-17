export type UserAgentResponse = {
	browser: string | undefined | undefined;
	version: string | undefined | undefined;
	os: string | undefined | undefined;
	platform: string | undefined | undefined;
	geoIp: Record<string, string | undefined | undefined> | undefined;
	source: string | undefined | undefined;
	is: [string] | string[];
};
