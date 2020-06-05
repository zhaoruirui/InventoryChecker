chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if(msg.text == "getItemId"){
        sendResponse({itemId: localStorage.getItem(sender.tab.id)});
    }else {
        localStorage.setItem(sender.tab.id, msg.text);
    }
});
