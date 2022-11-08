import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
// Routes
import routes from './routes/consumo.routes'

const app = express();

app.set('port', process.env.PORT || 4038);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/cafe', routes);

export default app;