import express, {
	type Request,
	type Response,
	type NextFunction,
} from 'express';
import {type Details} from 'express-useragent';
import {type UserAgentResponse} from '../types/useragent';

const userAgentRouter = express.Router();

userAgentRouter.get(
	'/useragent',
	async (request: Request, response: Response, next: NextFunction) => {
		try {
			const userAgentIs = (useragent: Details | undefined | any): string[] => {
				const r = [];
				for (const i in useragent) {
					if (useragent[i] === true) {
						r.push(i);
					}
				}

				return r;
			};

			const responseData: UserAgentResponse = {
				browser: request.useragent?.browser,
				version: request.useragent?.version,
				os: request.useragent?.os,
				platform: request.useragent?.platform,
				geoIp: request.useragent?.geoIp,
				source: request.useragent?.source,
				is: userAgentIs(request.useragent ?? undefined),
			};
			response.status(200).json(responseData);
		} catch (error: any) {
			response.status(400).end(error.toString());
		}
	},
);

export default userAgentRouter;
