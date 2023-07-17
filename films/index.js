const server = require("./src/server");

const PORT = 8002;
server.listen(PORT, () => {
  console.log(`Server films listening at port ${PORT}`);
});
