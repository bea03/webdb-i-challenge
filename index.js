const server = require('./server.js');
const accountRouter = require('./accountRouter.js');

server.use(express.json());

server.use('/api/budgets', accountRouter);

server.get('/', (req, res) => {
    res.send('<h1>Webdb-i-challenge</h1>');
  });

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});