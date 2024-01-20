import fs from "fs";

async function getData(file, html) {
  return await fs.promises.readFile(file, { encoding: html });
}

var html = await getData("phrasebook.html", html);

// Getting DOM model

var regex = /(<([^>]+)>)/gi;

var parsedDOM = html.toString().replace(regex, "");

parsedDOM = parsedDOM.trim().replace(/[\r\n\s]{2,}/gi, "\n");

try {
  fs.writeFile("parsedPhraseBook.html", parsedDOM, getData);
} catch (err) {
  console.log(err);
}
