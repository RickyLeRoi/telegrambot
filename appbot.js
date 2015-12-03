//appbot.js

var Bot = require('telegram-api');
var Message = require('telegram-api/types/Message');
var File = require('telegram-api/types/File');
 
var bot = new Bot({
  token: '124619312:AAFK4BOnd0kC12RctP6xoJ1I2aAhspkQsXU'
});
 
bot.start();
 
bot.get(/ciao|ehi|hey|ohi|salve|yo|ohu/, function(message) {
  var answer = new Message().text('Ciao coso').to(message.chat.id);
  bot.send(answer);
});
bot.get(/merda|suca|stronzo|fango|schifo|cazzone|idiota|scemo|pazzo/, function(message) {
  var answer = new Message().text('OOOHHHH ma che cazzo ti piglia?').to(message.chat.id);
  bot.send(answer);
});
bot.get(/scemo/, function(message) {
  var answer = new Message().text('Tu ci sei scema 😞').to(message.chat.id);
  bot.send(answer);
});
bot.get(/ahah|ahahah|ihih|ihihih|lol|asd/, function(message) {
  var answer = new Message().text('Cazzo ridi con stu freddo?').to(message.chat.id);
  bot.send(answer);
});
 
bot.get(/pene|cazzo|minchia|pisello/, function(message) {
  var img = new File().file('pene.jpg').caption('pene').to(message.chat.id);
  bot.send(img);
});

bot.command('pene', function(message) {
  var img = new File().file('pene.jpg').to(message.chat.id);
  bot.img(welcome);
});

bot.command('giuseppe', function(message) {
  var answer = new Message().text('La mamma di giuseppe aveva ragione, meglio abortire, che un figlio coglione').to(message.chat.id);
  bot.send(answer);
});

bot.command('marilu', function(message) {
  var answer = new Message().text('Marilù è simpatica come un dito in culo e puzza pure peggio').to(message.chat.id);
  bot.send(answer);
});
