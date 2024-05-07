import app from './app.js';
import './config.js';

const main = () => {
    app.listen(app.get('port'));
    console.log(`Server on port ${app.get('port')}`);
};

main();