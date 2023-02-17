import process from 'node:process';
import express, {
	type Express,
	type NextFunction,
	type Request,
	type Response,
} from 'express';
import cors from 'cors';
import helmet from 'helmet';
import useragent from 'express-useragent';
import requestIp from 'request-ip';
import logger from 'morgan';

const PORT = process.env.PORT ?? 5000;

const app: Express = express();

app.use(logger('dev'));
app.set('port', PORT);
app.use(helmet());
app.use(cors());
app.use((request: Request, response: Response, next: NextFunction) => {
	const isHTTPS
    = request.headers['x-forwarded-proto']
    && request.headers['x-forwarded-proto'] === 'https';
	if (isHTTPS) {
		next();
	} else if (request.method === 'GET') {
		response.redirect(
			301,
			'https://' + request.headers.host + request.originalUrl,
		);
	} else {
		response
			.status(403)
			.send('Please use HTTPS when submitting data to this server.');
	}
});
app.use(express.json());
app.use((request: Request, response: Response, next: NextFunction) => {
	response.removeHeader('X-Powered-By');
	next();
});
app.use(express.urlencoded({extended: false}));
app.use(useragent.express());
app.use(requestIp.mw());

export default app;
