import { PORT } from './configuration';
import { getFinal } from './app';

const startServer = () => {
    try {
        const app = getFinal();

        app.listen(PORT, () => {
            console.log(`Server started at http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error(error);
    }
};

startServer();