const app = require("./src/server");
const { PORT } = require("./src/config/envs");
app.listen(PORT, () => {
  console.log(`Server database is running on port ${PORT}`);
});
