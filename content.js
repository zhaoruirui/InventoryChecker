let url = "https://pay.ebay.com/rxo?action=create&rypsvc=true&pagename=ryp&TransactionId=-1&shippingcode=USPSPriority&buyerselectedsc=false&item=";

// jQuery(".confirm-and-pay-wrapper button").click();


if(window.location.href==="https://pay.ebay.com/rxo?action=view&sessionid="){
    let frag = document.createDocumentFragment();
    let select = document.createElement("select");
    let button = document.createElement("button");

    select.options.add( new Option("Hp pink 123832525898","123832525898", true, true) );
    select.options.add( new Option("hp blue 123839721136","123839721136") );
    select.options.add( new Option("lenovo 330 113519446497","113519446497") );
    select.options.add( new Option("Lenovo 340 black 193414211308","193414211308") );
    select.options.add( new Option("HP-ax030wm","122604685746") );
    select.options.add( new Option("Lenovo 340 blue 113863556432","113863556432") );
    select.options.add( new Option("Acer cb5 113838275752","113838275752") );
    select.options.add( new Option("HP-f272 113835595827","113835595827") );
    select.options.add( new Option("HP -ca051 113146650470","113146650470") );
    select.options.add( new Option("acer cb5132 122631362598","123732155109") );

    let itemId ="123832525898";
    button.addEventListener("click", function () {
        itemId = select.selectedOptions[0].value;
        chrome.runtime.sendMessage({ text: select.selectedOptions[0].value }, function(){
            window.location.href = url + itemId;
        })
    })
    frag.appendChild(select);
    frag.appendChild(button);
    document.body.appendChild(frag);
}else{
    if($(".text-display").html().indexOf("isn't available")){
        function reload(){
            chrome.runtime.sendMessage({ text: "getItemId" }, data => {
                window.location.href = url + data.itemId;
            });
        }
        setTimeout(reload, 400);
    }
}

