
const Url = 'https://www.google.com';
const nameprofile = 'myprofile';
const Setting = {
    "extensions": {
        "enabled": true,
        // "names": ["ehllkhjndgnlokhomdlhgbineffifcbj", "padekgcemlokbadohgkifijomclgjgif"],
        "preloadCustom": true
     },
    // "chromeExtensions": [ "ehllkhjndgnlokhomdlhgbineffifcbj", "padekgcemlokbadohgkifijomclgjgif" ],
    // "userChromeExtensions": [ "ehllkhjndgnlokhomdlhgbineffifcbj", "padekgcemlokbadohgkifijomclgjgif" ],
     "plugins": {
        "all_enable": true,
        "enableFlash": true,
        "enableVulnerable": true,
        "flash_enable": true
     },
    "os": "win",
    // "navigator": {
    //     "deviceMemory": 8,
    //     "doNotTrack": false,
    //     "hardwareConcurrency": 4,
    //     "language": "en-GB,en-US;q=0.9,en;q=0.8",
    //     "maxTouchPoints": 0,
    //     "max_touch_points": 0,
    //     "platform": "Win32",
    //     "resolution": "1600x900",
    //     "userAgent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.60 Safari/537.36"
    //  },
    "googleServicesEnabled": false, 
    "lockEnabled": false, 
    "canvasMode": "noise", 
    "canvas": {
        "mode": "noise"
    },
    "proxy":{
        "mode": "http",
        "host": "192.168.11.102",
        "port": "4110"
        },
    "webRTC": {
        "customize": true,
        "enabled": true,
        "fillBasedOnIp": true,
        "localIpMasking": true,
        // "localIps": [  ],
        "mode": "alerted",
        // "publicIp": ""
        },
    "webRtc": {
        "fill_based_on_ip": true,
        // "localIps": "",
        "local_ip_masking": true,
        "mode": "public",
        // "publicIP": "27.79.162.255",
        // "public_ip": "27.79.162.255"
     },
    // "geolocation": {
    //     "mode": "block", 
    //     "fillBasedOnIp": false
    // },
    "client_rects_noise_enable": true,
    // "deviceMemory": 8192,
    "storage": {
        "enable": true
     }
}

const Amount = 1 // 2x10 luồng

const Saves = 'C:/gologin'
// Đường dẫn lưu profile
const Delay = 5 

module.exports = {
    Setting,
    Saves,
    Delay,
    Amount,
    Url,
    nameprofile
}