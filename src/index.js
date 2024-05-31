import app from './app.js';
import './config.js'; // unneded import?

const main = () => {
    app.listen(app.get('port'));
    console.log(`Server on port ${app.get('port')}`);
};

main();