
var ss = SpreadsheetApp.getActive();
//var EMAIL1 = ss.getOwner(); //email 
var EMAIL1 = "a.dotsenko@axicore.ua"; //email 

var name = ss.getName(); // get sheetname
var fact = ss.getRangeByName("Dashboard!B31:B31").getValues(); // get всего позиций
var check = ss.getRangeByName("Dashboard!B32:B32").getValues(); //get позиций просчитано
var price = ss.getRangeByName("Dashboard!B34:B34").getValues(); // get цена пресейл
var url = ss.getUrl(); // get url
var theme = "Ціни presale в таблиці: " + name + " проставлено."; //subject

function sendMailPresalePrice() {
    if ((check >= fact)&&(check>0)){
      var message1 = {}; //create class male
      message1.subject = theme; // get theme of mail obj
      message1.to = EMAIL1;// get email address obj
      message1.htmlBody = "Ціни Presale в таблиці "
      + "<b><a href=" + url + ">" + name + "</a></b>" 
      + " проставлено!<br> Загальна ціна по об'єкту: " + price + " грн."; // body of mail
      MailApp.sendEmail(message1);
    }
};
