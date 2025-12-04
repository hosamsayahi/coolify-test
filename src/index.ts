import express from 'express';
import { prisma } from './db';

const app = express();

app.get('/', (_req, res) => {
   res.send("hello from coolify");
});

app.get('/get-users', async (_req, res) => {
   const users = await prisma.user.findMany({
      select: {
         id: true,
         username: true,
      }
   });

   res.json({ users });
});

app.get('/add-users', async (_req, res) => {
   const user = await prisma.user.findFirst({});

   if (user) {
      res.send("users already exist");
      return;
   }

   await prisma.user.createMany({
      data: [
         { username: "hosamsayahi" },
         { username: "personperson" },
         { username: "anyone" },
      ]
   });

   res.send("created users successfuly");
});

app.listen(3000, () => console.log("http://localhost:3000"));
