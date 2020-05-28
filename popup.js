chrome.storage.local.get(["browseHistory"], function(items){
    items.browseHistory.forEach(function (value) {
        let a = document.createElement('a');
        let x = document.createElement("LI");
        let linkText = document.createTextNode(value);
        a.appendChild(linkText);
        a.title = value;
        a.href = value;
        x.appendChild(a)
        document.querySelector('.parentList').appendChild(x)
    })

});
