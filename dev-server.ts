import app from './app';
import routes from './routes/router';

app.use('/', routes);

app.listen(app.get('port'), () => {
	console.log('Server started. Go to http://localhost:' + app.get('port'));
});
