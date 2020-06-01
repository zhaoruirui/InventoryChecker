let url = "https://pay.ebay.com/rxo?action=create&rypsvc=true&pagename=ryp&TransactionId=-1&shippingcode=USPSPriority&buyerselectedsc=false&item=";
// let id1 = "124024800061";
let id1 = "123832525898";
let id2 = "123839721136";
let goodStatus = "success";

if("https://pay.ebay.com/rxo?action=view&sessionid="===window.location.href){
    function check(){
        jQuery.get(url + id1, function(data, status){
            console.log("called out")
            if(status===goodStatus && data.indexOf("CONFIRM_AND_PAY_BUTTON")>-1){
                console.log('added to chart: '+id1 );
                clearInterval(timer);
                // chrome.tabs.create({ url: url + id1 });
                window.location.href = url+id1;
            }
        });
        jQuery.get(url + id2, function(data, status){
            if(status===goodStatus && data.indexOf("CONFIRM_AND_PAY_BUTTON")>-1){
                console.log('added to chart: '+id2 );
                clearInterval(timer);
                // chrome.tabs.create({ url: url + id2 });
                window.location.href = url+id2;
            }
        });
    }
    let timer = setInterval(check, 4000);
    jQuery(window).unload( function () {
        clearInterval(timer);
    } );
}else if(jQuery(".confirm-and-pay-wrapper button").length>0){
    console.log("confirming payment" );
    jQuery(".confirm-and-pay-wrapper button").click();
}
