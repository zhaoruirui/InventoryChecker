chrome.storage.local.get(["browseHistory"], function(items){
    if(Object.keys(items.browseHistory).length===0){
        items.browseHistory = [];
    }
    let alreadyExist = false;
    let replacingIndex = -1;
    let currentUrl = window.location.href;
    items.browseHistory.forEach(function (value, index) {

        if(value.indexOf(currentUrl)>-1 && !alreadyExist){
            alreadyExist = true;
            replacingIndex = index;
        }
    })
    if(alreadyExist){
        items.browseHistory.splice(replacingIndex, 1);
    }

    items.browseHistory.push(window.location.href+ "::" +document.title);
    if(items.browseHistory.length>10){
        items.shift();
    }
    chrome.storage.local.set({ "browseHistory": items.browseHistory }, function(){
        //  Data's been saved boys and girls, go on home
    });

});
