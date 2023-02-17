import express from 'express';
import ipRouter from './ip';
import userAgentRouter from './useragent';

const routes = express.Router();

routes.use('/', ipRouter);
routes.use('/', userAgentRouter);

export default routes;
