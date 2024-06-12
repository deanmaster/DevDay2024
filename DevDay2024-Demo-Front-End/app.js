import express from 'express';
import stringReplace from 'string-replace-middleware';
import cors from 'cors';


const app = express();
const port = 8080;

const corsOptions = {
  origin: "http://localhost:8180",
  optionsSuccessStatus: 200,
};
const corsInstance = cors(corsOptions);
app.use(corsInstance);

app.use(stringReplace({
  KC_URL: process.env.KC_URL || "http://localhost:8180"
}));

app.use('/', express.static('public'));

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
