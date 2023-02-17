import {readFileSync} from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import {type NextFunction, type Request, type Response} from 'express';
import app from '../app';

app.get(
	'/api/',
	async (request: Request, response: Response, next: NextFunction) => {
		try {
			const packagePath = path.join(process.cwd(), 'package.json');
			const packageData = JSON.parse(readFileSync(packagePath, 'utf8'));
			response.status(200).json({
				version: packageData.version,
				...packageData.response,
			});
		} catch (error: any) {
			response.status(400).end(error.toString());
		}
	},
);

export {default} from '../app';
