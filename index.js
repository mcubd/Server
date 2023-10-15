import express from 'express';
const express =require('express');
var serveStatic =require('serve-static');
var path =require('path');
var { dirname }=require('path');
var { fileURLToPath }=require('url');
var  fs =require('fs');
var playwright=require('playwright')

var __dirname = dirname(fileURLToPath(import.meta.url));
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
var browser=await playwright.launchChromium()
const page = await browser.newPage();
await  page.goto('https://example.com');
const title = await page.title();
console.log(title)
res.send(title)
})


app.listen(process.env.PORT || 3000, () => {});
