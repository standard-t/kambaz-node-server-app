

export default function Hello(app) {
    const hello = (req, res) => {
        res.send("Hello World!");
    }
    function home(req, res) {
        res.send('Welcome to Full Stack Development!');
    }

    app.get('/hello', hello);
    app.get('/', home);
}
