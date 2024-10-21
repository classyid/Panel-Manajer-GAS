var CONFIG = {
  spreadsheetId: '<IDSPREADSHEET>',
  password: '<PASSWORD>',
  telegramBotToken: '<IDTOKEN>',
  telegramChatId: '<IDCHAT>',
  logSheetName: 'log_access'
};

function doGet(e) {
  var ipAddress = getIpAddress();
  logAccess('Page Access', ipAddress);
  return HtmlService.createTemplateFromFile('Index')
      .evaluate()
      .setTitle('Data Server Indoweb')
      .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function getData() {
  var ipAddress = getIpAddress();
  logAccess('Data Retrieval', ipAddress);
  var sheet = SpreadsheetApp.openById(CONFIG.spreadsheetId).getSheetByName("pleskpanel");
  var data = sheet.getDataRange().getValues();
  
  data = data.map(function(row, index) {
    if (index === 0) return row;
    row[4] = Utilities.formatDate(new Date(row[4]), Session.getScriptTimeZone(), "dd MMMM yyyy");
    return row;
  });
  
  return data;
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

function checkPassword(password) {
  var ipAddress = getIpAddress();
  if (password === CONFIG.password) {
    logAccess('Successful Login', ipAddress);
    return true;
  } else {
    logAccess('Failed Login Attempt', ipAddress);
    return false;
  }
}

function getIpAddress() {
  var url = 'https://api.ipify.org';
  var options = {
    'method': 'GET',
    'muteHttpExceptions': true
  };

  try {
    var response = UrlFetchApp.fetch(url, options);
    if (response.getResponseCode() === 200) {
      return response.getContentText();
    } else {
      console.error('Error fetching IP address. Response code:', response.getResponseCode());
      return 'Unknown';
    }
  } catch (e) {
    console.error('Error fetching IP address:', e);
    return 'Unknown';
  }
}

function logAccess(action, ipAddress) {
  var sheet = SpreadsheetApp.openById(CONFIG.spreadsheetId).getSheetByName(CONFIG.logSheetName);
  var now = new Date();
  var dateTime = Utilities.formatDate(now, Session.getScriptTimeZone(), "yyyy-MM-dd HH:mm");
  
  sheet.appendRow([dateTime, action, ipAddress]);
  
  // Kirim pesan ke Telegram
  sendTelegramMessage(`New access log Portal Password: ${dateTime}, Action: ${action}, IP: ${ipAddress}`);
}

function sendTelegramMessage(message) {
  var url = `https://api.telegram.org/bot${CONFIG.telegramBotToken}/sendMessage`;
  var payload = {
    'chat_id': CONFIG.telegramChatId,
    'text': message
  };
  var options = {
    'method': 'post',
    'payload': payload
  };
  UrlFetchApp.fetch(url, options);
}

function logClientAction(action) {
  var ipAddress = getIpAddress();
  logAccess(action, ipAddress);
}
