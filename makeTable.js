import fs from "fs";

function sort(arr) {
  var arrMap = [];
  var output = [];
  for (var i = 0; i < arr.length; i += 2) {
    arrMap.push({ index: arr[i], value: arr[i + 1] });
  }
  const sortedMap = new Map([...arrMap.entries()].sort((a, b) => b[0] - a[0]));
  sortedMap.forEach(function (set) {
    output.push(set.index);
    output.push(set.value);
  });
  return output;
}

function tablify(input, chapterNumber, audioIndex) {
  var rows = input.split("\n");
  var output = [];
  for (var i = 0; i < rows.length; i += 2) {
    var audioPath = "";
    if (audioIndex < 10) {
      var stringIndex = String(0) + String(audioIndex);
      audioPath =
        "ch" + chapterNumber + "/" + chapterNumber + "-" + stringIndex + ".mp3";
    } else {
      audioPath =
        "ch" + chapterNumber + "/" + chapterNumber + "-" + audioIndex + ".mp3";
    }
    output.push({
      audio: audioPath,
      kalmyk: rows[i],
      russian: rows[i + 1],
    });
    audioIndex++;
  }
  output = shuffleArray(output);
  fs.writeFile("output.txt", JSON.stringify(output), (err) =>
    err ? console.error(err) : console.log("success")
  );
}

function shuffleArray(array) {
  var arr1 = [];
  var arr2 = [];

  for (var i = 0; i < array.length; i++) {
    i % 2 === 0 ? arr1.push(array[i]) : arr2.push(array[i]);
  }
  // for (var i = 0; i < arr2.length; i++) {
  //   var temp = arr2[i].audio;
  //   arr2[i].audio = arr1[i + 1].audio;
  //   arr1[i + 1].audio = temp;
  // }
  arr1.push(arr2);
  return arr1;
}

function numberTable(input, audioIndex) {
  var rows = input.split("\n");
  var output = [];
  for (var i = 0; i < rows.length; i += 2) {
    output.push({
      audio: audioIndex.toString(),
      number: rows[i],
      kalmyk: rows[i + 1],
    });
    audioIndex++;
  }
  fs.writeFile("output.txt", JSON.stringify(output), (err) =>
    err ? console.error(err) : console.log("success")
  );
}

function memorizeConjugationTable(input, audioIndex) {}

var memorizeTypes = [
  "table",
  "table2",
  "normalZigZag",
  "numberTable",
  "list",
  "text",
];

function memorizeTable2(input, audioIndex) {
  var rows = input.split("\n");
  var output = [];
  for (var i = 0; i < rows.length; i += 4) {
    var audioPath1 = "";
    var audioPath2 = "";
    if (audioIndex < 10) {
      var audioPath1 =
        "ch" +
        chapterNumber +
        "/" +
        chapterNumber +
        "-0" +
        stringIndex +
        ".mp3";
      stringIndex++;
      var audioPath2 =
        "ch" +
        chapterNumber +
        "/" +
        chapterNumber +
        "-0" +
        stringIndex +
        ".mp3";
    } else {
      var audioPath1 =
        "ch" + chapterNumber + "/" + chapterNumber + "-" + audioIndex + ".mp3";
      var audioPath2 =
        "ch" + chapterNumber + "/" + chapterNumber + "-" + audioIndex + ".mp3";
    }
    output.push({
      audio: audioPath,
      kalmyk: rows[i],
      russian: rows[i + 1],
    });
    audioIndex++;
  }
  fs.writeFile("output.txt", JSON.stringify(output), (err) =>
    err ? console.error(err) : console.log("success")
  );
}

function memorizeZigZag(input, audioIndex) {}

function memorizeList(input, audioIndex) {}

var input = `би
я
мини
мой / моя / мое
чи
ты
чини
твой / твоя / твое
Та
Вы (уважительное)
Тана
Ваш
эн, тер
он / она / оно
энүнә / үүнә, терүнә / түүнә
его / ее
бидн, мадн
мы
мана, мадна
наш
тадн
вы
тадна
ваш
эдн, тедн
они
эднә, теднә`;

memorizeTable2;
// tablify(input, 1, 14);

// numberTable(input, 15);
