let checkoutUrl = "https://pay.ebay.com/rxo?action=create&rypsvc=true&pagename=ryp&TransactionId=-1&shippingcode=USPSPriority&buyerselectedsc=false&item=";
let queryUrl = "https://api.ebay.com/buy/browse/v1/item/v1|xxxxx|0";
let token = 'Bearer v^1.1#i^1#r^0#p^1#I^3#f^0#t^H4sIAAAAAAAAAOVYa2wUVRTu9EUaQCSiJfjIMjyMlNm9M/uY3YFdWFqgS0pbuqUvJc2dmbvtlN2Zce7dtlsgWRshJBgSjaFE/FGCGiQaMKSKAYMQU58Y/SPyQzAKKJqCJBJIDMGZaSnbSlqkG2zi/tnMueee+53vO+feOwPShUWLtpVvuz6dmpLbmwbpXIpip4KiwoKSh/Jy5xTkgAwHqjc9P53fnffrUgwTcV2oQVjXVIwcnYm4igXbGKSThipoECtYUGECYYFIQjS8tkLgnEDQDY1okhanHZGyIM3xoj/Aiazs9bLugN9rWtXbMWu1IC3yMT8CKCC5OQ/r8/nNcYyTKKJiAlVizgccYADPcKCW5QWvR+A8zgAINNGOOmRgRVNNFyegQzZcwZ5rZGAdGyrEGBnEDEKHIuFV0apwpGxlZe1SV0as0BAPUQJJEo98KtVk5KiD8SQaexlsewvRpCQhjGlXaHCFkUGF8G0w9wHfplrkZcTyEIhuT0ySZV9WqFylGQlIxsZhWRSZidmuAlKJQlLjMWqyIbYhiQw9VZohImUO629dEsaVmIKMIL1yRbgxXF1Nh2qSSlMr1JiI2m6G1wymuqaMYSU/8kMAJAawSOYDwD+0zmCwIZZHLVSqqbJicYYdlRpZgUzQaDQ1ngxqTKcqtcoIx4gFKNMvMEwh12RpOihikrSqlqwoYQJ12I/jCzA8mxBDEZMEDUcYPWAzFKShrisyPXrQLsWh6unEQbqVEF1wuTo6OpwdbqdmtLg4AFhXw9qKqNSKEpC2fK1et/2V8Scwip2KhMyZWBFISjexdJqlagJQW+iQh+XdAW6I95GwQqOt/zBk5Owa2RDZahCfzCMoIo/kjkHIQjYbDRIaqlGXhQOJMMUkoLERET0OJcRIZp0lE8hQZMHtjXFufwwxsi8QYzyBWIwRvbKPYWPI3P+QKEoB//+oT+610qNIMhDJTqlnq8zXRLsau/gVVV0NnSW8n+s0KuuSFZoBQbunkSspbRO7/PW4tH5du4yD99oMd09e0nRUrcUVKZUVBqxezxoLbkOuhgZJRVE8bhomlCi2Ep1cIlvzsRkA6orT6munpCVcGjQ3dMvUbCOeUM5hXY8kEkkCxTiKZGkz/2828rump5g3nUmVk6nfoJCKPHhFcdpqOnG75DQQ1pKGeTtzVllHdq22EanmDkgMLR5HRh07YaEfvL5Wr4/Jx787K+4v9SzeUyZRaUtxxWSsebJl9iAEVeAkO4tZb8DL+XifzzOhvEptSWtTk+0UKtcwQfJ4qeWX3sed2jXyBT+UY//YbqoPdFPv5VIUcIEF7DwwtzBvfX7etDlYIcipwJgTKy2q+d5qIOdGlNKhYuQWUvp6+NuCjE8KvRvA7OGPCkV57NSMLwzgiTsjBeyM4ukmJTwHWN7r4TxNYN6d0Xz2sfxZy+e3XVBeLPD8NBf1v3NxX/WcP7zfgenDThRVkJPfTeWw/R+8UL/75x8eWfj5kWVPbgi2HiszFh1XFxe+8vSBWZGnQiXPXh84u79virdj1+qy3OOvbx44dW3H7yLV9dy5ZdHVD5ec2PbV7O0FPdupZ3pu7P/IgUDfS/ETV9/6pfzyu/3XOvYWF509delRv7zD19z6Rc2uA4e31recf7X5zMlLbUv7dx9dcubW1b5N71+ZeWvzoTeeXz7jr4uvqb07px3Enx1LTTl9prEiLfRsofI/ffvcgmu5xUdO9qxv+XPZsfPUjYbLA1e+55cc3Hdo3scD3xQv2np057fX9TdDV5lkw+GbOxaSHLJJ0/HXp19O533YcWVxQtNn/nj58TWzXHu33Nw+tfVLx8xPivakL+wZlO9va19uhOwRAAA=';
let itemId='123832525898';

jQuery(".confirm-and-pay-wrapper button").click();
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
        setInterval(check,5000);
    })
    frag.appendChild(select);
    frag.appendChild(textInput);
    frag.appendChild(button);
    document.body.appendChild(frag);
}else{
    // if($(".text-display").html().indexOf("isn't available")){
    //     function reload(){
    //         chrome.runtime.sendMessage({ text: "getItemId" }, data => {
    //             window.location.href = checkoutUrl + data.itemId;
    //         });
    //     }
    //     setTimeout(reload, 350);
    // }
}

