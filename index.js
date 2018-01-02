var fs = require('fs');
var StatMode = require('stat-mode');
var colors = require('colors');
var EventEmitter = require("events").EventEmitter;
var emitter = new EventEmitter();

// zostawiam ten kod w komentarzu specjalnie (w ramach notatek do kursu ;)
/*
fs.stat('./cat.jpg', function(err, stats) {
    var statMode = new StatMode(stats);
    console.log(statMode.toString());
});


fs.readFile('./text.txt', 'utf-8', function(err, data) {
    console.log(data);
});

fs.writeFile('./text.txt', 'Tekst, który zapiszemy w pliku tekst.txt', function(err) {
    if (err) throw err; // jeśli pojawi się błąd, wyrzuć wyjątek
    console.log('Zapisano!');
});

fs.readFile('./text.txt', 'utf-8', function(err, data) {
    console.log('Dane przed zapisem!'.blue);
    console.log(data);
    fs.writeFile('./text.txt', 'A tak wyglądają po zapisie!', function(err) {
        if (err) throw err;
        console.log('Zapisano!'.green);
        fs.readFile('./text.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie'.blue)
            console.log(data);
        });
    });
});
*/

emitter.on("dropReady", function() {
    console.log('Zrzut zawratości katalogu gotowy!'.rainbow);
});

fs.readdir('.', 'utf8', function(err, files) {
    fs.writeFile('./catlist.txt', '', function(err) {
        if (err) throw err;
    });
    files.forEach(function(file) {
        fs.appendFile('./catlist.txt', file + '\n', function(err) {
            if (err) throw err;
            console.log(('Dopisano ' + file).green);
        });
    });
    emitter.emit('dropReady');
});