import express from 'express';
import serveStatic from 'serve-static';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import * as fs from 'fs';
var __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

// Define the path to your static files directory
const staticFilesDir = path.join(__dirname, 'public');

// Use the serve-static middleware to serve static files
app.use(serveStatic(staticFilesDir));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
