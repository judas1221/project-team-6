import app from './app';
import { Environment } from './config';

(async () => {
    await app.listen(Environment.PORT);
    console.log(`App listen on port ${Environment.PORT}`);
})()