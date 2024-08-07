const app = require("./app");
// const { main } = require('./controllers/embeddings.js')

const PORT = process.env.PORT || 5000;


async function startServer() {
  // Start Express server
  const server = app.listen(PORT, () => {
    console.log(`server has started on http://localhost:${PORT}`);
  });


  // Start vectorization process
  // main();
}

startServer();
// app.listen(PORT, () => {
//   console.log(`server has started on http://localhost:${PORT}`);
// });
