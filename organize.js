import fs from "fs";

async function getData(file, html) {
  return await fs.promises.readFile(file, { encoding: html });
}

var html = await getData("phrasebook.html", html);

var parsedDOM = html.toString();

parsedDOM = parsedDOM.trim().replace(/[\r\n\s]{2,}/gi, "\n");

try {
  fs.writeFile("organizedPhrasebook.html", parsedDOM, getData);
} catch (err) {
  console.log(err);
}
