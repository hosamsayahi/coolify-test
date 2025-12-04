import express from 'express';

const app = express();

app.get('/', (_req, res) => {
   res.send("hello from coolify");
});

app.listen(3000, () => console.log("http://localhost:3000"));
