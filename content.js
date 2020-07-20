let checkoutUrl = "https://pay.ebay.com/rxo?action=create&rypsvc=true&pagename=ryp&TransactionId=-1&shippingcode=USPSPriority&buyerselectedsc=false&item=";
let queryUrl = "https://api.ebay.com/buy/browse/v1/item/v1|xxxxx|0";
let token = '';
let itemId='123832525898';

// jQuery(".confirm-and-pay-wrapper button").click();
function check() {
    $.ajax({
        url: queryUrl.replace("xxxxx", itemId),
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
        crossDomain: true,
        success: function (resp) {
            if(resp.estimatedAvailabilities && resp.estimatedAvailabilities[0] && resp.estimatedAvailabilities[0].estimatedAvailableQuantity>1){
                window.location.href = checkoutUrl + itemId;
            }else{
                console.log("out of stock");
            }
        },
        error: function (resp) {
            console.log("not found");
        }
    });
}

if(window.location.href==="https://pay.ebay.com/rxo?action=view&sessionid="){
    let frag = document.createDocumentFragment();
    let select = document.createElement("select");
    let textInput = document.createElement("INPUT");
    textInput.setAttribute("type", "text");
    let tokenInput = document.createElement("INPUT");
    tokenInput.setAttribute("type", "text");
    let button = document.createElement("button");
    button.innerHTML = "Start";

    select.options.add( new Option("Hp pink 123832525898","123832525898", true, true) );
    select.options.add( new Option("hp blue 123839721136","123839721136") );
    select.options.add( new Option("lenovo 330 113519446497","113519446497") );
    select.options.add( new Option("Lenovo 340 black 193414211308","193414211308") );
    select.options.add( new Option("HP-ax030wm","122604685746") );
    select.options.add( new Option("Lenovo 340 blue 113863556432","113863556432") );
    select.options.add( new Option("Acer cb5 113838275752","113838275752") );
    select.options.add( new Option("HP-f272 113835595827","113835595827") );
    select.options.add( new Option("HP -ca051 113146650470","113146650470") );
    select.options.add( new Option("acer cb5132 123732155109","123732155109") );
    select.options.add( new Option("HP-v020 122631362598","122631362598") );

    button.addEventListener("click", function () {
        if(textInput.value ===""){
            itemId = select.selectedOptions[0].value;
        }else{
            itemId=textInput.value;
        }
        if(tokenInput.value ===""){
            console.log("no token")
        }else{
            token=tokenInput.value;
            console.log("start checking: " + itemId);
            setInterval(check,20000);
        }
    })
    frag.appendChild(select);
    frag.appendChild(textInput);
    frag.appendChild(tokenInput);
    frag.appendChild(button);
    document.body.appendChild(frag);
}

