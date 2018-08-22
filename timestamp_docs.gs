function onOpen() {
  DocumentApp.getUi().createMenu('Timestamp')
      .addItem('Insert UTC Timestamp', 'insertAtCursorUtc')
      .addItem('Insert Local Timestamp', 'insertAtCursorLocal')
      .addItem('Insert Local Date', 'insertAtCursorLocalDate')
      .addToUi();
}

function insertAtCursorUtc() {
  var cursor = DocumentApp.getActiveDocument().getCursor();

  if (cursor) {
    var date = Utilities.formatDate(new Date(), "UTC", "'UTC' yyyy-MM-dd HH:mm"); // "yyyy-MM-dd' 'HH:mm:ss'Z'" , "yyyy-MM-dd"    
    var element = cursor.insertText(date);
    if (element) {
      //element.setBold(true);
    } else {
      DocumentApp.getUi().alert('Wrong cursor location');
    }
  } else {
    DocumentApp.getUi().alert('Where is cursor?');
  }
}

function insertAtCursorLocal() {
  var cursor = DocumentApp.getActiveDocument().getCursor();
  if (cursor) {
    
    var d = new Date().toLocaleString(undefined, {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
    //var date_day = d.toLocaleDateString(); //"en-US"
    //var date_time = d.toLocaleTimeString();
    //var date = d.toLocaleString();
    var element = cursor.insertText(d);    
    if (element) {
    } else {
      DocumentApp.getUi().alert('Wrong cursor location');
    }
  } else {
    DocumentApp.getUi().alert('Where is cursor?');
  }
}

function insertAtCursorLocalDate() {
  var cursor = DocumentApp.getActiveDocument().getCursor();

  if (cursor) {   
    var d = new Date()
    var date = d.toLocaleDateString(); //"en-US"
    var element = cursor.insertText(date);    
    if (element) {
    } else {
      DocumentApp.getUi().alert('Wrong cursor location');
    }
  } else {
    DocumentApp.getUi().alert('Where is cursor?');
  }
}