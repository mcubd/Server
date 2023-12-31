import express from 'express';
import serveStatic from 'serve-static';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import * as fs from 'fs';
//import playwright from 'playwright'
var __dirname = dirname(fileURLToPath(import.meta.url));
import puppeteer from "puppeteer";

//var __dirname = dirname(fileURLToPath(import.meta.url));
//import playwright from 'playwright'

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
  if (serveStatic.mime.lookup(path) === 'text/html') {}
    // Custom Cache-Control for HTML files
   res.setHeader('Cache-Control', 'public, max-age=31536000')
    res.setHeader('Heady', serveStatic.mime.lookup(path))
  
}

app.get('/hh',async (req,res)=>{
const URL = "https://pptr.dev/";

const main = async () => {
  const browser = await puppeteer.connect({
    browserWSEndpoint: `wss://chrome.browserless.io?token=677cf9f1-7c6f-4a8e-876e-6e0762f556f5`
  });
  const page = await browser.newPage();
  await page.goto(URL);

  return page.screenshot();
}
  
})


app.listen(process.env.PORT || 3000, () => {});
