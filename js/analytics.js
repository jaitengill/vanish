// Usersnap config - 2015-12-22 01:07:52
var _usersnapconfig = _usersnapconfig || {};
(function() {
var themes = ["lemon", "classic", "default", "medic", "brownie", "darknight", "zuckerberg", "ptiy", "pinkabell", "emerald", "redmond", "grass", "contrast"];
var config = {
  "usecase": "easyfb", 
  "apiKey": "694b64e8-0304-426f-945c-e9f11c326f89", 
  "tools": [
    "comment", 
    "pen"
  ], 
  "theme": "emerald"
};
for(var key in config) {
    if(config.hasOwnProperty(key)) {
        if(_usersnapconfig[key] === undefined || key === "apiKey") {
            _usersnapconfig[key] = config[key];
        }
    }
}
function inArray(e,t){if(!t){return-1}for(var n=0;n<t.length;n++){if(t[n]===e){return n}}return-1}
if(_usersnapconfig["theme"] !== undefined && _usersnapconfig["configurator"] !== true && inArray(_usersnapconfig["theme"], themes) < 0) {
    _usersnapconfig["theme"] = "default";
}
})();
/* global document, _usersnapconfig */
(function() {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    var ua =(navigator.userAgent || navigator.vendor || window.opera);
    var ismob = (/Android|iPhone|iPad|iPod/i).test(ua) && !(/Firefox/i).test(ua);
    var lM = {
        'en': 'en',
        'fr': 'fr',
        'es': 'es',
        'pl': 'pl',
        'fa': 'fa',
        'de': 'de-formal',
        'de-formal': 'de-formal',
        'de-informal': 'de-informal',
        'it': 'it',
        'jp': 'jp',
        'ko': 'ko',
        'hu': 'hu',
        'da': 'da',
        'sk': 'sk',
        'cz': 'cz',
        'no': 'no',
        'nl': 'nl',
        'fi': 'fi',
        'pt': 'pt',
        'sv': 'sv',
        'tr': 'tr',
        'ru': 'ru',
        'hr': 'hr',
        'bg': 'bg',
        'zh': 'zh',
        'is': 'is'
    };
  
    //auto detect language
    var rc = function (k){return(document.cookie.match('(^|; )'+k+'=([^;]*)')||0)[2];};
    if ((typeof(_usersnapconfig) === 'undefined') ||
        (typeof(_usersnapconfig.lang) === 'undefined') ||
        (_usersnapconfig.lang === 'auto')) {
        //try to detect language
        var lang = (rc('us_lang') || window.navigator.language || window.navigator.browserLanguage).split('-')[0];
        if(typeof(lM[lang]) !== 'undefined') {
            _usersnapconfig.lang = lang;
        }
    }

    if((typeof(_usersnapconfig) !== 'undefined') &&
            (typeof(_usersnapconfig.lang) !== 'undefined')) {
        if(typeof(lM[_usersnapconfig.lang]) === 'undefined') {
            if(ismob) {
                s.src = 'https://d3mvnvhjmkxpjz.cloudfront.net/js/10648/usersnap2-mob-10648-en.js';
            } else {
                s.src = 'https://d3mvnvhjmkxpjz.cloudfront.net/js/10648/usersnap2-10648-en.js';
            }
        } else {
            if(ismob) {
                s.src = 'https://d3mvnvhjmkxpjz.cloudfront.net/js/10648/usersnap2-mob-10648-' + lM[_usersnapconfig.lang] + '.js';
            } else {
                s.src = 'https://d3mvnvhjmkxpjz.cloudfront.net/js/10648/usersnap2-10648-' + lM[_usersnapconfig.lang] + '.js';
            }

        }
    } else {
        if(ismob) {
            s.src = 'https://d3mvnvhjmkxpjz.cloudfront.net/js/10648/usersnap2-mob-10648-en.js';
        } else {
            s.src = 'https://d3mvnvhjmkxpjz.cloudfront.net/js/10648/usersnap2-10648-en.js';
        }
    }
    var x = document.getElementsByTagName('head')[0];
    x.appendChild(s);
}());

            