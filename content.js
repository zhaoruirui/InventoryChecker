chrome.storage.local.get(["browseHistory"], function(items){
    if(Object.keys(items.browseHistory).length===0){
        items.browseHistory = [];
    }
    let alreadyExist = false;
    let currentUrl = window.location.href;
    items.browseHistory.forEach(function (value) {

        if(value.indexOf(currentUrl)>-1){
            alreadyExist = true;
        }
    })
    if(!alreadyExist){
        items.browseHistory.push(window.location.href);
        if(items.browseHistory.length>10){
            items.shift();
        }
        chrome.storage.local.set({ "browseHistory": items.browseHistory }, function(){
            //  Data's been saved boys and girls, go on home
        });
    }
});
