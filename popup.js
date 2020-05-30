chrome.storage.local.get(["browseHistory"], function(items){
    items.browseHistory.reverse().forEach(function (value) {
        let names = value.split("::");
        let a = document.createElement('a');
        let x = document.createElement("LI");
        let linkText = document.createTextNode(names[1]);
        a.appendChild(linkText);
        a.title = names[1];
        a.href = names[0];
        x.appendChild(a)
        document.querySelector('.parentList').appendChild(x)
    })

});
