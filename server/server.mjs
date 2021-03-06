import express from 'express';
import path from 'path';

const port = 8080;

const app = express();

app.use(express.static('.', {
  setHeaders: (res, path) => {
    res.setHeader('Cache-Control', 'public, max-age=3600');
    if (path.endsWith('.wbn')) {
      res.setHeader('Content-Type', 'application/webbundle');
      res.setHeader('X-Content-Type-Options', 'nosniff');
    }
  },
}));

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
