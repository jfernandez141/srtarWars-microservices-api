const app = require("./src/server");

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server gateway is running on port ${PORT}`);
});
