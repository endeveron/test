import cors from 'cors';
import express from 'express';

import { corsOptions, notFoundController } from './controllers/index.js';

import { logger } from './utils/index.js';

const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors(corsOptions));

app.use('/api/ping', (_, res) => {
  res.status(200).send({
    message: 'Ping OK',
  });
});

app.use(notFoundController);

app.listen(PORT, () => {
  logger.g(` ✓  Server running on port ${PORT}`);
});
