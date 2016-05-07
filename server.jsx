import express from 'express';
import path from 'path';

const app = express();
app.use(express.static(path.join(__dirname, 'dist')));

app.use((req, res) => {
  const HTML = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Isomorphic Resume</title>
      <script>
      </script>
    </head>
    <body>
    </body>
  </html>
  `;

  res.end(HTML);
});

export default app;