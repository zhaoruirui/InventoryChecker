let callCount = 0;
let url = "https://pay.ebay.com/rxo?action=create&rypsvc=true&pagename=ryp&TransactionId=-1&shippingcode=USPSPriority&buyerselectedsc=false&item=";
let id1 = "123832525898";
let id2 = "123839721136";
let goodStatus = "success";
function check(){
    jQuery.get(url + id1, function(data, status){
        if(status===goodStatus && data.indexOf("CONFIRM_AND_PAY_BUTTON")>-1){
            console.log('added to chart: '+'123832525898' );
            console.log(data);
        }else{
            jQuery.get(url + id2, function(data, status){
                if(status===goodStatus && data.indexOf("CONFIRM_AND_PAY_BUTTON")>-1){
                    console.log('added to chart: '+'122631362598' );
                    console.log(data);
                }
            });
        }

        if(callCount%100===0){
            console.log(callCount++);
        }
    });
}
let timer = setInterval(check, 4000);
jQuery(window).unload( function () {
    clearInterval(timer);
} );
