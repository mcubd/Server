import express from 'express';
import serveStatic from 'serve-static';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import * as fs from 'fs';
var __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

// Define the path to your static files directory
//const staticFilesDir = path.join(__dirname, 'public');

// Use the serve-static middleware to serve static files
//app.use(serveStatic(staticFilesDir));
app.use(serveStatic(path.join(__dirname, 'public'), {
  maxAge: '600d',
  
  setHeaders: setCustomCacheControl
}))



function setCustomCacheControl (res, path) {
  if (serveStatic.mime.lookup(path) === 'text/html') {
    // Custom Cache-Control for HTML files
    res.setHeader('Cache-Control', 'public, max-age=31536000')
  }
}


app.listen(process.env.PORT || 3000, () => {});
