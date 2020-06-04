let url = "https://pay.ebay.com/rxo?action=create&rypsvc=true&pagename=ryp&TransactionId=-1&shippingcode=USPSPriority&buyerselectedsc=false&item=123832525898";
// let id1 = "124024800061";
let id1 = "123832525898";
let id2 = "123839721136";
let goodStatus = "success";


jQuery(".confirm-and-pay-wrapper button").click();

if($(".text-display").html().indexOf("isn't available")){
    function reload(){
        console.log("reload");
        window.location.href = url;
    }
    setTimeout(reload, 500);
}
