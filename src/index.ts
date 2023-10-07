import app from "./app";
import env from "./config/env";

app.listen(env.port, () => {
  console.log({
    message: `server running at http://${env.host}:${env.port}`,
  });
});
