const app = require("./src/server");

const PORT = 8003;
app.listen(PORT, () => {
  console.log(`Server planets is running on port ${PORT}`);
});
