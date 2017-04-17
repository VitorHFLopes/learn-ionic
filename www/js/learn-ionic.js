
configApp.$inject = ['$compileProvider', '$ionicCloudProvider', '$stateProvider'];
runApp.$inject = ['$ionicPlatform', '$state', 'amMoment', 'googleAnalyticsAbstraction'];angular.module('appModule', [
    'ionic',
    'ionic.cloud',
    'ngStorage',
    'ui.router',
    'angularMoment',
    'ngCordova',
    'ui.calendar'
])
    .config(configApp)
    .run(runApp);

function configApp($compileProvider, $ionicCloudProvider, $stateProvider) {

    var cloudProviderOptions = {
        core: {
            app_id: 'e2ccf9f7'
        }
    };

    $ionicCloudProvider.init(cloudProviderOptions);

    $compileProvider.debugInfoEnabled(false); //Use this in production to improve performance

    $stateProvider

        .state('login', {
            url: '/login',
            templateUrl: 'components/login/login.html',
            controller: 'LoginCtrl'
        })

        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'components/menu/menu.html',
            controller: 'MenuCtrl'
        })

        .state('app.home', {
            url: '/home',
            views: {
                'menuContent': {
                    templateUrl: 'components/home/home.html',
                    controller: 'HomeCtrl'
                }
            }
        })

        .state('app.inheritance', {
            url: '/inheritance',
            abstract: true,
            templateUrl: 'components/inheritance/inheritance-template.html',
            controller: 'InheritanceCtrl'
        })

        .state('app.inheritance.home', {
            url: '/home',
            views: {
                'inheritanceContent': {
                    templateUrl: 'components/inheritance/home/inheritance-home.html',
                    controller: 'InheritanceHomeCtrl'
                }
            }
        })

        .state('beacon', {
            url: '/beacon',
            templateUrl: 'components/beacon/beacon.html',
            controller: 'BeaconCtrl'
        })

        .state('call', {
            url: '/call',
            templateUrl: 'components/call/call.html',
            controller: 'CallCtrl'
        })

        .state('email', {
            url: '/email',
            templateUrl: 'components/email/email.html',
            controller: 'EmailCtrl'
        })

        .state('mixdDoor', {
            url: '/mixd-door',
            templateUrl: 'components/beacon/mixd-door/mixd-door.html',
            controller: 'MixdDoorCtrl'
        })

        .state('calendar', {
            url: '/calendar',
            templateUrl: 'components/calendar/calendar.html',
            controller: 'CalendarCtrl'
        })
    ;
}

function runApp($ionicPlatform, $state, amMoment, googleAnalyticsAbstraction) {

    amMoment.changeLocale('pt-br');

    $ionicPlatform.ready(appIsReady);

    function appIsReady() {

        //GoogleAnalyticsAbstraction.startTrackerWithId('UA-88009076-1', 10);
        $state.go('login');
    }
}

'use strict';
angular.module("ngLocale", [], ['$provide', function($provide) {
  var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
  $provide.value("$locale", {
    "DATETIME_FORMATS": {
      "AMPMS": [
        "AM",
        "PM"
      ],
      "DAY": [
        "domingo",
        "segunda-feira",
        "ter\u00e7a-feira",
        "quarta-feira",
        "quinta-feira",
        "sexta-feira",
        "s\u00e1bado"
      ],
      "ERANAMES": [
        "antes de Cristo",
        "depois de Cristo"
      ],
      "ERAS": [
        "a.C.",
        "d.C."
      ],
      "FIRSTDAYOFWEEK": 6,
      "MONTH": [
        "janeiro",
        "fevereiro",
        "mar\u00e7o",
        "abril",
        "maio",
        "junho",
        "julho",
        "agosto",
        "setembro",
        "outubro",
        "novembro",
        "dezembro"
      ],
      "SHORTDAY": [
        "dom",
        "seg",
        "ter",
        "qua",
        "qui",
        "sex",
        "s\u00e1b"
      ],
      "SHORTMONTH": [
        "JAN",
        "FEV",
        "MAR",
        "ABR",
        "MAI",
        "JUN",
        "JUL",
        "AGO",
        "SET",
        "OUT",
        "NOV",
        "DEZ"
      ],
      "STANDALONEMONTH": [
        "janeiro",
        "fevereiro",
        "mar\u00e7o",
        "abril",
        "maio",
        "junho",
        "julho",
        "agosto",
        "setembro",
        "outubro",
        "novembro",
        "dezembro"
      ],
      "WEEKENDRANGE": [
        5,
        6
      ],
      "fullDate": "EEEE, d 'de' MMMM 'de' y",
      "longDate": "d 'de' MMMM 'de' y",
      "medium": "d 'de' MMM 'de' y HH:mm:ss",
      "mediumDate": "d 'de' MMM 'de' y",
      "mediumTime": "HH:mm:ss",
      "short": "dd/MM/yy HH:mm",
      "shortDate": "dd/MM/yy",
      "shortTime": "HH:mm"
    },
    "NUMBER_FORMATS": {
      "CURRENCY_SYM": "R$",
      "DECIMAL_SEP": ",",
      "GROUP_SEP": ".",
      "PATTERNS": [
        {
          "gSize": 3,
          "lgSize": 3,
          "maxFrac": 3,
          "minFrac": 0,
          "minInt": 1,
          "negPre": "-",
          "negSuf": "",
          "posPre": "",
          "posSuf": ""
        },
        {
          "gSize": 3,
          "lgSize": 3,
          "maxFrac": 2,
          "minFrac": 2,
          "minInt": 1,
          "negPre": "-\u00a4",
          "negSuf": "",
          "posPre": "\u00a4",
          "posSuf": ""
        }
      ]
    },
    "id": "pt-br",
    "localeID": "pt_BR",
    "pluralCat": function(n, opt_precision) {  if (n >= 0 && n <= 2 && n != 2) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
  });
}]);

/*!
 * Pusher JavaScript Library v3.2.4
 * http://pusher.com/
 *
 * Copyright 2016, Pusher
 * Released under the MIT licence.
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Pusher=e():t.Pusher=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return t[i].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var i=n(1);t.exports=i["default"]},function(t,e,n){"use strict";function i(t){if(null===t||void 0===t)throw"You must pass your app key when you instantiate Pusher."}var o=n(2),r=n(9),s=n(23),a=n(38),c=n(39),u=n(40),l=n(12),h=n(5),p=n(62),f=n(8),d=n(42),y=function(){function t(e,n){var l=this;i(e),n=n||{},this.key=e,this.config=r.extend(p.getGlobalConfig(),n.cluster?p.getClusterConfig(n.cluster):{},n),this.channels=d["default"].createChannels(),this.global_emitter=new s["default"],this.sessionID=Math.floor(1e9*Math.random()),this.timeline=new a["default"](this.key,this.sessionID,{cluster:this.config.cluster,features:t.getClientFeatures(),params:this.config.timelineParams||{},limit:50,level:c["default"].INFO,version:h["default"].VERSION}),this.config.disableStats||(this.timelineSender=d["default"].createTimelineSender(this.timeline,{host:this.config.statsHost,path:"/timeline/v2/"+o["default"].TimelineTransport.name}));var y=function(t){var e=r.extend({},l.config,t);return u.build(o["default"].getDefaultStrategy(e),e)};this.connection=d["default"].createConnectionManager(this.key,r.extend({getStrategy:y,timeline:this.timeline,activityTimeout:this.config.activity_timeout,pongTimeout:this.config.pong_timeout,unavailableTimeout:this.config.unavailable_timeout},this.config,{encrypted:this.isEncrypted()})),this.connection.bind("connected",function(){l.subscribeAll(),l.timelineSender&&l.timelineSender.send(l.connection.isEncrypted())}),this.connection.bind("message",function(t){var e=0===t.event.indexOf("pusher_internal:");if(t.channel){var n=l.channel(t.channel);n&&n.handleEvent(t.event,t.data)}e||l.global_emitter.emit(t.event,t.data)}),this.connection.bind("connecting",function(){l.channels.disconnect()}),this.connection.bind("disconnected",function(){l.channels.disconnect()}),this.connection.bind("error",function(t){f["default"].warn("Error",t)}),t.instances.push(this),this.timeline.info({instances:t.instances.length}),t.isReady&&this.connect()}return t.ready=function(){t.isReady=!0;for(var e=0,n=t.instances.length;e<n;e++)t.instances[e].connect()},t.log=function(e){t.logToConsole&&window.console&&window.console.log&&window.console.log(e)},t.getClientFeatures=function(){return r.keys(r.filterObject({ws:o["default"].Transports.ws},function(t){return t.isSupported({})}))},t.prototype.channel=function(t){return this.channels.find(t)},t.prototype.allChannels=function(){return this.channels.all()},t.prototype.connect=function(){if(this.connection.connect(),this.timelineSender&&!this.timelineSenderTimer){var t=this.connection.isEncrypted(),e=this.timelineSender;this.timelineSenderTimer=new l.PeriodicTimer(6e4,function(){e.send(t)})}},t.prototype.disconnect=function(){this.connection.disconnect(),this.timelineSenderTimer&&(this.timelineSenderTimer.ensureAborted(),this.timelineSenderTimer=null)},t.prototype.bind=function(t,e){return this.global_emitter.bind(t,e),this},t.prototype.unbind=function(t,e){return this.global_emitter.unbind(t,e),this},t.prototype.bind_all=function(t){return this.global_emitter.bind_all(t),this},t.prototype.subscribeAll=function(){var t;for(t in this.channels.channels)this.channels.channels.hasOwnProperty(t)&&this.subscribe(t)},t.prototype.subscribe=function(t){var e=this.channels.add(t,this);return e.subscriptionPending&&e.subscriptionCancelled?e.reinstateSubscription():e.subscriptionPending||"connected"!==this.connection.state||e.subscribe(),e},t.prototype.unsubscribe=function(t){var e=this.channels.find(t);e&&e.subscriptionPending?e.cancelSubscription():(e=this.channels.remove(t),e&&"connected"===this.connection.state&&e.unsubscribe())},t.prototype.send_event=function(t,e,n){return this.connection.send_event(t,e,n)},t.prototype.isEncrypted=function(){return"https:"===o["default"].getProtocol()||Boolean(this.config.encrypted)},t.instances=[],t.isReady=!1,t.logToConsole=!1,t.Runtime=o["default"],t.ScriptReceivers=o["default"].ScriptReceivers,t.DependenciesReceivers=o["default"].DependenciesReceivers,t.auth_callbacks=o["default"].auth_callbacks,t}();e.__esModule=!0,e["default"]=y,o["default"].setup(y)},function(t,e,n){"use strict";var i=n(3),o=n(7),r=n(14),s=n(15),a=n(16),c=n(4),u=n(17),l=n(18),h=n(25),p=n(26),f=n(27),d=n(28),y={nextAuthCallbackID:1,auth_callbacks:{},ScriptReceivers:c.ScriptReceivers,DependenciesReceivers:i.DependenciesReceivers,getDefaultStrategy:p["default"],Transports:l["default"],transportConnectionInitializer:f["default"],HTTPFactory:d["default"],TimelineTransport:u["default"],getXHRAPI:function(){return window.XMLHttpRequest},getWebSocketAPI:function(){return window.WebSocket||window.MozWebSocket},setup:function(t){var e=this;window.Pusher=t;var n=function(){e.onDocumentBody(t.ready)};window.JSON?n():i.Dependencies.load("json2",{},n)},getDocument:function(){return document},getProtocol:function(){return this.getDocument().location.protocol},getAuthorizers:function(){return{ajax:o["default"],jsonp:r["default"]}},onDocumentBody:function(t){var e=this;document.body?t():setTimeout(function(){e.onDocumentBody(t)},0)},createJSONPRequest:function(t,e){return new a["default"](t,e)},createScriptRequest:function(t){return new s["default"](t)},getLocalStorage:function(){try{return window.localStorage}catch(t){return}},createXHR:function(){return this.getXHRAPI()?this.createXMLHttpRequest():this.createMicrosoftXHR()},createXMLHttpRequest:function(){var t=this.getXHRAPI();return new t},createMicrosoftXHR:function(){return new ActiveXObject("Microsoft.XMLHTTP")},getNetwork:function(){return h.Network},createWebSocket:function(t){var e=this.getWebSocketAPI();return new e(t)},createSocketRequest:function(t,e){if(this.isXHRSupported())return this.HTTPFactory.createXHR(t,e);if(this.isXDRSupported(0===e.indexOf("https:")))return this.HTTPFactory.createXDR(t,e);throw"Cross-origin HTTP requests are not supported"},isXHRSupported:function(){var t=this.getXHRAPI();return Boolean(t)&&void 0!==(new t).withCredentials},isXDRSupported:function(t){var e=t?"https:":"http:",n=this.getProtocol();return Boolean(window.XDomainRequest)&&n===e},addUnloadListener:function(t){void 0!==window.addEventListener?window.addEventListener("unload",t,!1):void 0!==window.attachEvent&&window.attachEvent("onunload",t)},removeUnloadListener:function(t){void 0!==window.addEventListener?window.removeEventListener("unload",t,!1):void 0!==window.detachEvent&&window.detachEvent("onunload",t)}};e.__esModule=!0,e["default"]=y},function(t,e,n){"use strict";var i=n(4),o=n(5),r=n(6);e.DependenciesReceivers=new i.ScriptReceiverFactory("_pusher_dependencies","Pusher.DependenciesReceivers"),e.Dependencies=new r["default"]({cdn_http:o["default"].cdn_http,cdn_https:o["default"].cdn_https,version:o["default"].VERSION,suffix:o["default"].dependency_suffix,receivers:e.DependenciesReceivers})},function(t,e){"use strict";var n=function(){function t(t,e){this.lastId=0,this.prefix=t,this.name=e}return t.prototype.create=function(t){this.lastId++;var e=this.lastId,n=this.prefix+e,i=this.name+"["+e+"]",o=!1,r=function(){o||(t.apply(null,arguments),o=!0)};return this[e]=r,{number:e,id:n,name:i,callback:r}},t.prototype.remove=function(t){delete this[t.number]},t}();e.ScriptReceiverFactory=n,e.ScriptReceivers=new n("_pusher_script_","Pusher.ScriptReceivers")},function(t,e){"use strict";var n={VERSION:"3.2.4",PROTOCOL:7,host:"ws.pusherapp.com",ws_port:80,wss_port:443,sockjs_host:"sockjs.pusher.com",sockjs_http_port:80,sockjs_https_port:443,sockjs_path:"/pusher",stats_host:"stats.pusher.com",channel_auth_endpoint:"/pusher/auth",channel_auth_transport:"ajax",activity_timeout:12e4,pong_timeout:3e4,unavailable_timeout:1e4,cdn_http:"http://js.pusher.com",cdn_https:"https://js.pusher.com",dependency_suffix:".min"};e.__esModule=!0,e["default"]=n},function(t,e,n){"use strict";var i=n(4),o=n(2),r=function(){function t(t){this.options=t,this.receivers=t.receivers||i.ScriptReceivers,this.loading={}}return t.prototype.load=function(t,e,n){var i=this;if(i.loading[t]&&i.loading[t].length>0)i.loading[t].push(n);else{i.loading[t]=[n];var r=o["default"].createScriptRequest(i.getPath(t,e)),s=i.receivers.create(function(e){if(i.receivers.remove(s),i.loading[t]){var n=i.loading[t];delete i.loading[t];for(var o=function(t){t||r.cleanup()},a=0;a<n.length;a++)n[a](e,o)}});r.send(s)}},t.prototype.getRoot=function(t){var e,n=o["default"].getDocument().location.protocol;return e=t&&t.encrypted||"https:"===n?this.options.cdn_https:this.options.cdn_http,e.replace(/\/*$/,"")+"/"+this.options.version},t.prototype.getPath=function(t,e){return this.getRoot(e)+"/"+t+this.options.suffix+".js"},t}();e.__esModule=!0,e["default"]=r},function(t,e,n){"use strict";var i=n(8),o=n(2),r=function(t,e,n){var r,s=this;r=o["default"].createXHR(),r.open("POST",s.options.authEndpoint,!0),r.setRequestHeader("Content-Type","application/x-www-form-urlencoded");for(var a in this.authOptions.headers)r.setRequestHeader(a,this.authOptions.headers[a]);return r.onreadystatechange=function(){if(4===r.readyState)if(200===r.status){var t,e=!1;try{t=JSON.parse(r.responseText),e=!0}catch(o){n(!0,"JSON returned from webapp was invalid, yet status code was 200. Data was: "+r.responseText)}e&&n(!1,t)}else i["default"].warn("Couldn't get auth info from your webapp",r.status),n(!0,r.status)},r.send(this.composeQuery(e)),r};e.__esModule=!0,e["default"]=r},function(t,e,n){"use strict";var i=n(9),o=n(1),r={debug:function(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];o["default"].log&&o["default"].log(i.stringify.apply(this,arguments))},warn:function(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];var n=i.stringify.apply(this,arguments);window.console&&(window.console.warn?window.console.warn(n):window.console.log&&window.console.log(n)),o["default"].log&&o["default"].log(n)}};e.__esModule=!0,e["default"]=r},function(t,e,n){"use strict";function i(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];for(var o=0;o<e.length;o++){var r=e[o];for(var s in r)r[s]&&r[s].constructor&&r[s].constructor===Object?t[s]=i(t[s]||{},r[s]):t[s]=r[s]}return t}function o(){for(var t=["Pusher"],e=0;e<arguments.length;e++)"string"==typeof arguments[e]?t.push(arguments[e]):t.push(_(arguments[e]));return t.join(" : ")}function r(t,e){var n=Array.prototype.indexOf;if(null===t)return-1;if(n&&t.indexOf===n)return t.indexOf(e);for(var i=0,o=t.length;i<o;i++)if(t[i]===e)return i;return-1}function s(t,e){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(t[n],n,t)}function a(t){var e=[];return s(t,function(t,n){e.push(n)}),e}function c(t){var e=[];return s(t,function(t){e.push(t)}),e}function u(t,e,n){for(var i=0;i<t.length;i++)e.call(n||window,t[i],i,t)}function l(t,e){for(var n=[],i=0;i<t.length;i++)n.push(e(t[i],i,t,n));return n}function h(t,e){var n={};return s(t,function(t,i){n[i]=e(t)}),n}function p(t,e){e=e||function(t){return!!t};for(var n=[],i=0;i<t.length;i++)e(t[i],i,t,n)&&n.push(t[i]);return n}function f(t,e){var n={};return s(t,function(i,o){(e&&e(i,o,t,n)||Boolean(i))&&(n[o]=i)}),n}function d(t){var e=[];return s(t,function(t,n){e.push([n,t])}),e}function y(t,e){for(var n=0;n<t.length;n++)if(e(t[n],n,t))return!0;return!1}function v(t,e){for(var n=0;n<t.length;n++)if(!e(t[n],n,t))return!1;return!0}function m(t){return h(t,function(t){return"object"==typeof t&&(t=_(t)),encodeURIComponent(w["default"](t.toString()))})}function g(t){var e=f(t,function(t){return void 0!==t}),n=l(d(m(e)),k["default"].method("join","=")).join("&");return n}function b(t){var e=[],n=[];return function i(t,o){var r,s,a;switch(typeof t){case"object":if(!t)return null;for(r=0;r<e.length;r+=1)if(e[r]===t)return{$ref:n[r]};if(e.push(t),n.push(o),"[object Array]"===Object.prototype.toString.apply(t))for(a=[],r=0;r<t.length;r+=1)a[r]=i(t[r],o+"["+r+"]");else{a={};for(s in t)Object.prototype.hasOwnProperty.call(t,s)&&(a[s]=i(t[s],o+"["+JSON.stringify(s)+"]"))}return a;case"number":case"string":case"boolean":return t}}(t,"$")}function _(t){try{return JSON.stringify(t)}catch(e){return JSON.stringify(b(t))}}var w=n(10),k=n(11);e.extend=i,e.stringify=o,e.arrayIndexOf=r,e.objectApply=s,e.keys=a,e.values=c,e.apply=u,e.map=l,e.mapObject=h,e.filter=p,e.filterObject=f,e.flatten=d,e.any=y,e.all=v,e.encodeParamsObject=m,e.buildQueryString=g,e.decycleObject=b,e.safeJSONStringify=_},function(t,e,n){"use strict";function i(t){return p(l(t))}e.__esModule=!0,e["default"]=i;for(var o=String.fromCharCode,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s={},a=0,c=r.length;a<c;a++)s[r.charAt(a)]=a;var u=function(t){var e=t.charCodeAt(0);return e<128?t:e<2048?o(192|e>>>6)+o(128|63&e):o(224|e>>>12&15)+o(128|e>>>6&63)+o(128|63&e)},l=function(t){return t.replace(/[^\x00-\x7F]/g,u)},h=function(t){var e=[0,2,1][t.length%3],n=t.charCodeAt(0)<<16|(t.length>1?t.charCodeAt(1):0)<<8|(t.length>2?t.charCodeAt(2):0),i=[r.charAt(n>>>18),r.charAt(n>>>12&63),e>=2?"=":r.charAt(n>>>6&63),e>=1?"=":r.charAt(63&n)];return i.join("")},p=window.btoa||function(t){return t.replace(/[\s\S]{1,3}/g,h)}},function(t,e,n){"use strict";var i=n(12),o={now:function(){return Date.now?Date.now():(new Date).valueOf()},defer:function(t){return new i.OneOffTimer(0,t)},method:function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var i=Array.prototype.slice.call(arguments,1);return function(e){return e[t].apply(e,i.concat(arguments))}}};e.__esModule=!0,e["default"]=o},function(t,e,n){"use strict";function i(t){window.clearTimeout(t)}function o(t){window.clearInterval(t)}var r=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},s=n(13),a=function(t){function e(e,n){t.call(this,setTimeout,i,e,function(t){return n(),null})}return r(e,t),e}(s["default"]);e.OneOffTimer=a;var c=function(t){function e(e,n){t.call(this,setInterval,o,e,function(t){return n(),t})}return r(e,t),e}(s["default"]);e.PeriodicTimer=c},function(t,e){"use strict";var n=function(){function t(t,e,n,i){var o=this;this.clear=e,this.timer=t(function(){o.timer&&(o.timer=i(o.timer))},n)}return t.prototype.isRunning=function(){return null!==this.timer},t.prototype.ensureAborted=function(){this.timer&&(this.clear(this.timer),this.timer=null)},t}();e.__esModule=!0,e["default"]=n},function(t,e,n){"use strict";var i=n(8),o=function(t,e,n){void 0!==this.authOptions.headers&&i["default"].warn("Warn","To send headers with the auth request, you must use AJAX, rather than JSONP.");var o=t.nextAuthCallbackID.toString();t.nextAuthCallbackID++;var r=t.getDocument(),s=r.createElement("script");t.auth_callbacks[o]=function(t){n(!1,t)};var a="Pusher.auth_callbacks['"+o+"']";s.src=this.options.authEndpoint+"?callback="+encodeURIComponent(a)+"&"+this.composeQuery(e);var c=r.getElementsByTagName("head")[0]||r.documentElement;c.insertBefore(s,c.firstChild)};e.__esModule=!0,e["default"]=o},function(t,e){"use strict";var n=function(){function t(t){this.src=t}return t.prototype.send=function(t){var e=this,n="Error loading "+e.src;e.script=document.createElement("script"),e.script.id=t.id,e.script.src=e.src,e.script.type="text/javascript",e.script.charset="UTF-8",e.script.addEventListener?(e.script.onerror=function(){t.callback(n)},e.script.onload=function(){t.callback(null)}):e.script.onreadystatechange=function(){"loaded"!==e.script.readyState&&"complete"!==e.script.readyState||t.callback(null)},void 0===e.script.async&&document.attachEvent&&/opera/i.test(navigator.userAgent)?(e.errorScript=document.createElement("script"),e.errorScript.id=t.id+"_error",e.errorScript.text=t.name+"('"+n+"');",e.script.async=e.errorScript.async=!1):e.script.async=!0;var i=document.getElementsByTagName("head")[0];i.insertBefore(e.script,i.firstChild),e.errorScript&&i.insertBefore(e.errorScript,e.script.nextSibling)},t.prototype.cleanup=function(){this.script&&(this.script.onload=this.script.onerror=null,this.script.onreadystatechange=null),this.script&&this.script.parentNode&&this.script.parentNode.removeChild(this.script),this.errorScript&&this.errorScript.parentNode&&this.errorScript.parentNode.removeChild(this.errorScript),this.script=null,this.errorScript=null},t}();e.__esModule=!0,e["default"]=n},function(t,e,n){"use strict";var i=n(9),o=n(2),r=function(){function t(t,e){this.url=t,this.data=e}return t.prototype.send=function(t){if(!this.request){var e=i.buildQueryString(this.data),n=this.url+"/"+t.number+"?"+e;this.request=o["default"].createScriptRequest(n),this.request.send(t)}},t.prototype.cleanup=function(){this.request&&this.request.cleanup()},t}();e.__esModule=!0,e["default"]=r},function(t,e,n){"use strict";var i=n(2),o=n(4),r=function(t,e){return function(n,r){var s="http"+(e?"s":"")+"://",a=s+(t.host||t.options.host)+t.options.path,c=i["default"].createJSONPRequest(a,n),u=i["default"].ScriptReceivers.create(function(e,n){o.ScriptReceivers.remove(u),c.cleanup(),n&&n.host&&(t.host=n.host),r&&r(e,n)});c.send(u)}},s={name:"jsonp",getAgent:r};e.__esModule=!0,e["default"]=s},function(t,e,n){"use strict";var i=n(19),o=n(21),r=n(20),s=n(2),a=n(3),c=n(9),u=new o["default"]({file:"sockjs",urls:r.sockjs,handlesActivityChecks:!0,supportsPing:!1,isSupported:function(){return!0},isInitialized:function(){return void 0!==window.SockJS},getSocket:function(t,e){return new window.SockJS(t,null,{js_path:a.Dependencies.getPath("sockjs",{encrypted:e.encrypted}),ignore_null_origin:e.ignoreNullOrigin})},beforeOpen:function(t,e){t.send(JSON.stringify({path:e}))}}),l={isSupported:function(t){var e=s["default"].isXDRSupported(t.encrypted);return e}},h=new o["default"](c.extend({},i.streamingConfiguration,l)),p=new o["default"](c.extend({},i.pollingConfiguration,l));i["default"].xdr_streaming=h,i["default"].xdr_polling=p,i["default"].sockjs=u,e.__esModule=!0,e["default"]=i["default"]},function(t,e,n){"use strict";var i=n(20),o=n(21),r=n(9),s=n(2),a=new o["default"]({urls:i.ws,handlesActivityChecks:!1,supportsPing:!1,isInitialized:function(){return Boolean(s["default"].getWebSocketAPI())},isSupported:function(){return Boolean(s["default"].getWebSocketAPI())},getSocket:function(t){return s["default"].createWebSocket(t)}}),c={urls:i.http,handlesActivityChecks:!1,supportsPing:!0,isInitialized:function(){return!0}};e.streamingConfiguration=r.extend({getSocket:function(t){return s["default"].HTTPFactory.createStreamingSocket(t)}},c),e.pollingConfiguration=r.extend({getSocket:function(t){return s["default"].HTTPFactory.createPollingSocket(t)}},c);var u={isSupported:function(){return s["default"].isXHRSupported()}},l=new o["default"](r.extend({},e.streamingConfiguration,u)),h=new o["default"](r.extend({},e.pollingConfiguration,u)),p={ws:a,xhr_streaming:l,xhr_polling:h};e.__esModule=!0,e["default"]=p},function(t,e,n){"use strict";function i(t,e,n){var i=t+(e.encrypted?"s":""),o=e.encrypted?e.hostEncrypted:e.hostUnencrypted;return i+"://"+o+n}function o(t,e){var n="/app/"+t,i="?protocol="+r["default"].PROTOCOL+"&client=js&version="+r["default"].VERSION+(e?"&"+e:"");return n+i}var r=n(5);e.ws={getInitial:function(t,e){return i("ws",e,o(t,"flash=false"))}},e.http={getInitial:function(t,e){var n=(e.httpPath||"/pusher")+o(t);return i("http",e,n)}},e.sockjs={getInitial:function(t,e){return i("http",e,e.httpPath||"/pusher")},getPath:function(t,e){return o(t)}}},function(t,e,n){"use strict";var i=n(22),o=function(){function t(t){this.hooks=t}return t.prototype.isSupported=function(t){return this.hooks.isSupported(t)},t.prototype.createConnection=function(t,e,n,o){return new i["default"](this.hooks,t,e,n,o)},t}();e.__esModule=!0,e["default"]=o},function(t,e,n){"use strict";var i=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},o=n(11),r=n(9),s=n(23),a=n(8),c=n(2),u=function(t){function e(e,n,i,o,r){t.call(this),this.initialize=c["default"].transportConnectionInitializer,this.hooks=e,this.name=n,this.priority=i,this.key=o,this.options=r,this.state="new",this.timeline=r.timeline,this.activityTimeout=r.activityTimeout,this.id=this.timeline.generateUniqueID()}return i(e,t),e.prototype.handlesActivityChecks=function(){return Boolean(this.hooks.handlesActivityChecks)},e.prototype.supportsPing=function(){return Boolean(this.hooks.supportsPing)},e.prototype.connect=function(){var t=this;if(this.socket||"initialized"!==this.state)return!1;var e=this.hooks.urls.getInitial(this.key,this.options);try{this.socket=this.hooks.getSocket(e,this.options)}catch(n){return o["default"].defer(function(){t.onError(n),t.changeState("closed")}),!1}return this.bindListeners(),a["default"].debug("Connecting",{transport:this.name,url:e}),this.changeState("connecting"),!0},e.prototype.close=function(){return!!this.socket&&(this.socket.close(),!0)},e.prototype.send=function(t){var e=this;return"open"===this.state&&(o["default"].defer(function(){e.socket&&e.socket.send(t)}),!0)},e.prototype.ping=function(){"open"===this.state&&this.supportsPing()&&this.socket.ping()},e.prototype.onOpen=function(){this.hooks.beforeOpen&&this.hooks.beforeOpen(this.socket,this.hooks.urls.getPath(this.key,this.options)),this.changeState("open"),this.socket.onopen=void 0},e.prototype.onError=function(t){this.emit("error",{type:"WebSocketError",error:t}),this.timeline.error(this.buildTimelineMessage({error:t.toString()}))},e.prototype.onClose=function(t){t?this.changeState("closed",{code:t.code,reason:t.reason,wasClean:t.wasClean}):this.changeState("closed"),this.unbindListeners(),this.socket=void 0},e.prototype.onMessage=function(t){this.emit("message",t)},e.prototype.onActivity=function(){this.emit("activity")},e.prototype.bindListeners=function(){var t=this;this.socket.onopen=function(){t.onOpen()},this.socket.onerror=function(e){t.onError(e)},this.socket.onclose=function(e){t.onClose(e)},this.socket.onmessage=function(e){t.onMessage(e)},this.supportsPing()&&(this.socket.onactivity=function(){t.onActivity()})},e.prototype.unbindListeners=function(){this.socket&&(this.socket.onopen=void 0,this.socket.onerror=void 0,this.socket.onclose=void 0,this.socket.onmessage=void 0,this.supportsPing()&&(this.socket.onactivity=void 0))},e.prototype.changeState=function(t,e){this.state=t,this.timeline.info(this.buildTimelineMessage({state:t,params:e})),this.emit(t,e)},e.prototype.buildTimelineMessage=function(t){return r.extend({cid:this.id},t)},e}(s["default"]);e.__esModule=!0,e["default"]=u},function(t,e,n){"use strict";var i=n(24),o=function(){function t(t){this.callbacks=new i["default"],this.global_callbacks=[],this.failThrough=t}return t.prototype.bind=function(t,e,n){return this.callbacks.add(t,e,n),this},t.prototype.bind_all=function(t){return this.global_callbacks.push(t),this},t.prototype.unbind=function(t,e,n){return this.callbacks.remove(t,e,n),this},t.prototype.unbind_all=function(t,e){return this.callbacks.remove(t,e),this},t.prototype.emit=function(t,e){var n;for(n=0;n<this.global_callbacks.length;n++)this.global_callbacks[n](t,e);var i=this.callbacks.get(t);if(i&&i.length>0)for(n=0;n<i.length;n++)i[n].fn.call(i[n].context||window,e);else this.failThrough&&this.failThrough(t,e);return this},t}();e.__esModule=!0,e["default"]=o},function(t,e,n){"use strict";function i(t){return"_"+t}var o=n(9),r=function(){function t(){this._callbacks={}}return t.prototype.get=function(t){return this._callbacks[i(t)]},t.prototype.add=function(t,e,n){var o=i(t);this._callbacks[o]=this._callbacks[o]||[],this._callbacks[o].push({fn:e,context:n})},t.prototype.remove=function(t,e,n){if(!t&&!e&&!n)return void(this._callbacks={});var r=t?[i(t)]:o.keys(this._callbacks);e||n?this.removeCallback(r,e,n):this.removeAllCallbacks(r)},t.prototype.removeCallback=function(t,e,n){o.apply(t,function(t){this._callbacks[t]=o.filter(this._callbacks[t]||[],function(t){return e&&e!==t.fn||n&&n!==t.context}),0===this._callbacks[t].length&&delete this._callbacks[t]},this)},t.prototype.removeAllCallbacks=function(t){o.apply(t,function(t){delete this._callbacks[t]},this)},t}();e.__esModule=!0,e["default"]=r},function(t,e,n){"use strict";var i=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},o=n(23),r=function(t){function e(){t.call(this);var e=this;void 0!==window.addEventListener&&(window.addEventListener("online",function(){e.emit("online")},!1),window.addEventListener("offline",function(){e.emit("offline")},!1))}return i(e,t),e.prototype.isOnline=function(){return void 0===window.navigator.onLine||window.navigator.onLine},e}(o["default"]);e.NetInfo=r,e.Network=new r},function(t,e){"use strict";var n=function(t){var e;return e=t.encrypted?[":best_connected_ever",":ws_loop",[":delayed",2e3,[":http_fallback_loop"]]]:[":best_connected_ever",":ws_loop",[":delayed",2e3,[":wss_loop"]],[":delayed",5e3,[":http_fallback_loop"]]],[[":def","ws_options",{hostUnencrypted:t.wsHost+":"+t.wsPort,hostEncrypted:t.wsHost+":"+t.wssPort}],[":def","wss_options",[":extend",":ws_options",{encrypted:!0}]],[":def","sockjs_options",{hostUnencrypted:t.httpHost+":"+t.httpPort,hostEncrypted:t.httpHost+":"+t.httpsPort,httpPath:t.httpPath}],[":def","timeouts",{loop:!0,timeout:15e3,timeoutLimit:6e4}],[":def","ws_manager",[":transport_manager",{lives:2,minPingDelay:1e4,maxPingDelay:t.activity_timeout}]],[":def","streaming_manager",[":transport_manager",{lives:2,minPingDelay:1e4,maxPingDelay:t.activity_timeout}]],[":def_transport","ws","ws",3,":ws_options",":ws_manager"],[":def_transport","wss","ws",3,":wss_options",":ws_manager"],[":def_transport","sockjs","sockjs",1,":sockjs_options"],[":def_transport","xhr_streaming","xhr_streaming",1,":sockjs_options",":streaming_manager"],[":def_transport","xdr_streaming","xdr_streaming",1,":sockjs_options",":streaming_manager"],[":def_transport","xhr_polling","xhr_polling",1,":sockjs_options"],[":def_transport","xdr_polling","xdr_polling",1,":sockjs_options"],[":def","ws_loop",[":sequential",":timeouts",":ws"]],[":def","wss_loop",[":sequential",":timeouts",":wss"]],[":def","sockjs_loop",[":sequential",":timeouts",":sockjs"]],[":def","streaming_loop",[":sequential",":timeouts",[":if",[":is_supported",":xhr_streaming"],":xhr_streaming",":xdr_streaming"]]],[":def","polling_loop",[":sequential",":timeouts",[":if",[":is_supported",":xhr_polling"],":xhr_polling",":xdr_polling"]]],[":def","http_loop",[":if",[":is_supported",":streaming_loop"],[":best_connected_ever",":streaming_loop",[":delayed",4e3,[":polling_loop"]]],[":polling_loop"]]],[":def","http_fallback_loop",[":if",[":is_supported",":http_loop"],[":http_loop"],[":sockjs_loop"]]],[":def","strategy",[":cached",18e5,[":first_connected",[":if",[":is_supported",":ws"],e,":http_fallback_loop"]]]]]};e.__esModule=!0,e["default"]=n},function(t,e,n){"use strict";function i(){var t=this;t.timeline.info(t.buildTimelineMessage({transport:t.name+(t.options.encrypted?"s":"")})),t.hooks.isInitialized()?t.changeState("initialized"):t.hooks.file?(t.changeState("initializing"),o.Dependencies.load(t.hooks.file,{encrypted:t.options.encrypted},function(e,n){t.hooks.isInitialized()?(t.changeState("initialized"),n(!0)):(e&&t.onError(e),t.onClose(),n(!1))})):t.onClose()}var o=n(3);e.__esModule=!0,e["default"]=i},function(t,e,n){"use strict";var i=n(29),o=n(31);o["default"].createXDR=function(t,e){return this.createRequest(i["default"],t,e)},e.__esModule=!0,e["default"]=o["default"]},function(t,e,n){"use strict";var i=n(30),o={getRequest:function(t){var e=new window.XDomainRequest;return e.ontimeout=function(){t.emit("error",new i.RequestTimedOut),t.close()},e.onerror=function(e){t.emit("error",e),t.close()},e.onprogress=function(){e.responseText&&e.responseText.length>0&&t.onChunk(200,e.responseText)},e.onload=function(){e.responseText&&e.responseText.length>0&&t.onChunk(200,e.responseText),t.emit("finished",200),t.close()},e},abortRequest:function(t){t.ontimeout=t.onerror=t.onprogress=t.onload=null,t.abort()}};e.__esModule=!0,e["default"]=o},function(t,e){"use strict";var n=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=function(t){function e(){t.apply(this,arguments)}return n(e,t),e}(Error);e.BadEventName=i;var o=function(t){function e(){t.apply(this,arguments)}return n(e,t),e}(Error);e.RequestTimedOut=o;var r=function(t){function e(){t.apply(this,arguments)}return n(e,t),e}(Error);e.TransportPriorityTooLow=r;var s=function(t){function e(){t.apply(this,arguments)}return n(e,t),e}(Error);e.TransportClosed=s;var a=function(t){function e(){t.apply(this,arguments)}return n(e,t),e}(Error);e.UnsupportedTransport=a;var c=function(t){function e(){t.apply(this,arguments)}return n(e,t),e}(Error);e.UnsupportedStrategy=c},function(t,e,n){"use strict";var i=n(32),o=n(33),r=n(35),s=n(36),a=n(37),c={createStreamingSocket:function(t){return this.createSocket(r["default"],t)},createPollingSocket:function(t){return this.createSocket(s["default"],t)},createSocket:function(t,e){return new o["default"](t,e)},createXHR:function(t,e){return this.createRequest(a["default"],t,e)},createRequest:function(t,e,n){return new i["default"](t,e,n)}};e.__esModule=!0,e["default"]=c},function(t,e,n){"use strict";var i=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},o=n(2),r=n(23),s=262144,a=function(t){function e(e,n,i){t.call(this),this.hooks=e,this.method=n,this.url=i}return i(e,t),e.prototype.start=function(t){var e=this;this.position=0,this.xhr=this.hooks.getRequest(this),this.unloader=function(){e.close()},o["default"].addUnloadListener(this.unloader),this.xhr.open(this.method,this.url,!0),this.xhr.setRequestHeader&&this.xhr.setRequestHeader("Content-Type","application/json"),this.xhr.send(t)},e.prototype.close=function(){this.unloader&&(o["default"].removeUnloadListener(this.unloader),this.unloader=null),this.xhr&&(this.hooks.abortRequest(this.xhr),this.xhr=null)},e.prototype.onChunk=function(t,e){for(;;){var n=this.advanceBuffer(e);if(!n)break;this.emit("chunk",{status:t,data:n})}this.isBufferTooLong(e)&&this.emit("buffer_too_long")},e.prototype.advanceBuffer=function(t){var e=t.slice(this.position),n=e.indexOf("\n");return n!==-1?(this.position+=n+1,e.slice(0,n)):null},e.prototype.isBufferTooLong=function(t){return this.position===t.length&&t.length>s},e}(r["default"]);e.__esModule=!0,e["default"]=a},function(t,e,n){"use strict";function i(t){var e=/([^\?]*)\/*(\??.*)/.exec(t);return{base:e[1],queryString:e[2]}}function o(t,e){return t.base+"/"+e+"/xhr_send"}function r(t){var e=t.indexOf("?")===-1?"?":"&";return t+e+"t="+ +new Date+"&n="+p++}function s(t,e){var n=/(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(t);return n[1]+e+n[3]}function a(t){return Math.floor(Math.random()*t)}function c(t){for(var e=[],n=0;n<t;n++)e.push(a(32).toString(32));return e.join("")}var u=n(34),l=n(11),h=n(2),p=1,f=function(){function t(t,e){this.hooks=t,this.session=a(1e3)+"/"+c(8),this.location=i(e),this.readyState=u["default"].CONNECTING,this.openStream()}return t.prototype.send=function(t){return this.sendRaw(JSON.stringify([t]))},t.prototype.ping=function(){this.hooks.sendHeartbeat(this)},t.prototype.close=function(t,e){this.onClose(t,e,!0)},t.prototype.sendRaw=function(t){if(this.readyState!==u["default"].OPEN)return!1;try{
    return h["default"].createSocketRequest("POST",r(o(this.location,this.session))).start(t),!0}catch(e){return!1}},t.prototype.reconnect=function(){this.closeStream(),this.openStream()},t.prototype.onClose=function(t,e,n){this.closeStream(),this.readyState=u["default"].CLOSED,this.onclose&&this.onclose({code:t,reason:e,wasClean:n})},t.prototype.onChunk=function(t){if(200===t.status){this.readyState===u["default"].OPEN&&this.onActivity();var e,n=t.data.slice(0,1);switch(n){case"o":e=JSON.parse(t.data.slice(1)||"{}"),this.onOpen(e);break;case"a":e=JSON.parse(t.data.slice(1)||"[]");for(var i=0;i<e.length;i++)this.onEvent(e[i]);break;case"m":e=JSON.parse(t.data.slice(1)||"null"),this.onEvent(e);break;case"h":this.hooks.onHeartbeat(this);break;case"c":e=JSON.parse(t.data.slice(1)||"[]"),this.onClose(e[0],e[1],!0)}}},t.prototype.onOpen=function(t){this.readyState===u["default"].CONNECTING?(t&&t.hostname&&(this.location.base=s(this.location.base,t.hostname)),this.readyState=u["default"].OPEN,this.onopen&&this.onopen()):this.onClose(1006,"Server lost session",!0)},t.prototype.onEvent=function(t){this.readyState===u["default"].OPEN&&this.onmessage&&this.onmessage({data:t})},t.prototype.onActivity=function(){this.onactivity&&this.onactivity()},t.prototype.onError=function(t){this.onerror&&this.onerror(t)},t.prototype.openStream=function(){var t=this;this.stream=h["default"].createSocketRequest("POST",r(this.hooks.getReceiveURL(this.location,this.session))),this.stream.bind("chunk",function(e){t.onChunk(e)}),this.stream.bind("finished",function(e){t.hooks.onFinished(t,e)}),this.stream.bind("buffer_too_long",function(){t.reconnect()});try{this.stream.start()}catch(e){l["default"].defer(function(){t.onError(e),t.onClose(1006,"Could not start streaming",!1)})}},t.prototype.closeStream=function(){this.stream&&(this.stream.unbind_all(),this.stream.close(),this.stream=null)},t}();e.__esModule=!0,e["default"]=f},function(t,e){"use strict";var n;!function(t){t[t.CONNECTING=0]="CONNECTING",t[t.OPEN=1]="OPEN",t[t.CLOSED=3]="CLOSED"}(n||(n={})),e.__esModule=!0,e["default"]=n},function(t,e){"use strict";var n={getReceiveURL:function(t,e){return t.base+"/"+e+"/xhr_streaming"+t.queryString},onHeartbeat:function(t){t.sendRaw("[]")},sendHeartbeat:function(t){t.sendRaw("[]")},onFinished:function(t,e){t.onClose(1006,"Connection interrupted ("+e+")",!1)}};e.__esModule=!0,e["default"]=n},function(t,e){"use strict";var n={getReceiveURL:function(t,e){return t.base+"/"+e+"/xhr"+t.queryString},onHeartbeat:function(){},sendHeartbeat:function(t){t.sendRaw("[]")},onFinished:function(t,e){200===e?t.reconnect():t.onClose(1006,"Connection interrupted ("+e+")",!1)}};e.__esModule=!0,e["default"]=n},function(t,e,n){"use strict";var i=n(2),o={getRequest:function(t){var e=i["default"].getXHRAPI(),n=new e;return n.onreadystatechange=n.onprogress=function(){switch(n.readyState){case 3:n.responseText&&n.responseText.length>0&&t.onChunk(n.status,n.responseText);break;case 4:n.responseText&&n.responseText.length>0&&t.onChunk(n.status,n.responseText),t.emit("finished",n.status),t.close()}},n},abortRequest:function(t){t.onreadystatechange=null,t.abort()}};e.__esModule=!0,e["default"]=o},function(t,e,n){"use strict";var i=n(9),o=n(11),r=n(39),s=function(){function t(t,e,n){this.key=t,this.session=e,this.events=[],this.options=n||{},this.sent=0,this.uniqueID=0}return t.prototype.log=function(t,e){t<=this.options.level&&(this.events.push(i.extend({},e,{timestamp:o["default"].now()})),this.options.limit&&this.events.length>this.options.limit&&this.events.shift())},t.prototype.error=function(t){this.log(r["default"].ERROR,t)},t.prototype.info=function(t){this.log(r["default"].INFO,t)},t.prototype.debug=function(t){this.log(r["default"].DEBUG,t)},t.prototype.isEmpty=function(){return 0===this.events.length},t.prototype.send=function(t,e){var n=this,o=i.extend({session:this.session,bundle:this.sent+1,key:this.key,lib:"js",version:this.options.version,cluster:this.options.cluster,features:this.options.features,timeline:this.events},this.options.params);return this.events=[],t(o,function(t,i){t||n.sent++,e&&e(t,i)}),!0},t.prototype.generateUniqueID=function(){return this.uniqueID++,this.uniqueID},t}();e.__esModule=!0,e["default"]=s},function(t,e){"use strict";var n;!function(t){t[t.ERROR=3]="ERROR",t[t.INFO=6]="INFO",t[t.DEBUG=7]="DEBUG"}(n||(n={})),e.__esModule=!0,e["default"]=n},function(t,e,n){"use strict";function i(t){return function(e){return[t.apply(this,arguments),e]}}function o(t){return"string"==typeof t&&":"===t.charAt(0)}function r(t,e){return e[t.slice(1)]}function s(t,e){if(0===t.length)return[[],e];var n=u(t[0],e),i=s(t.slice(1),n[1]);return[[n[0]].concat(i[0]),i[1]]}function a(t,e){if(!o(t))return[t,e];var n=r(t,e);if(void 0===n)throw"Undefined symbol "+t;return[n,e]}function c(t,e){if(o(t[0])){var n=r(t[0],e);if(t.length>1){if("function"!=typeof n)throw"Calling non-function "+t[0];var i=[l.extend({},e)].concat(l.map(t.slice(1),function(t){return u(t,l.extend({},e))[0]}));return n.apply(this,i)}return[n,e]}return s(t,e)}function u(t,e){return"string"==typeof t?a(t,e):"object"==typeof t&&t instanceof Array&&t.length>0?c(t,e):[t,e]}var l=n(9),h=n(11),p=n(41),f=n(30),d=n(55),y=n(56),v=n(57),m=n(58),g=n(59),b=n(60),_=n(61),w=n(2),k=w["default"].Transports;e.build=function(t,e){var n=l.extend({},C,e);return u(t,n)[1].strategy};var S={isSupported:function(){return!1},connect:function(t,e){var n=h["default"].defer(function(){e(new f.UnsupportedStrategy)});return{abort:function(){n.ensureAborted()},forceMinPriority:function(){}}}},C={extend:function(t,e,n){return[l.extend({},e,n),t]},def:function(t,e,n){if(void 0!==t[e])throw"Redefining symbol "+e;return t[e]=n,[void 0,t]},def_transport:function(t,e,n,i,o,r){var s=k[n];if(!s)throw new f.UnsupportedTransport(n);var a,c=!(t.enabledTransports&&l.arrayIndexOf(t.enabledTransports,e)===-1||t.disabledTransports&&l.arrayIndexOf(t.disabledTransports,e)!==-1);a=c?new d["default"](e,i,r?r.getAssistant(s):s,l.extend({key:t.key,encrypted:t.encrypted,timeline:t.timeline,ignoreNullOrigin:t.ignoreNullOrigin},o)):S;var u=t.def(t,e,a)[1];return u.Transports=t.Transports||{},u.Transports[e]=a,[void 0,u]},transport_manager:i(function(t,e){return new p["default"](e)}),sequential:i(function(t,e){var n=Array.prototype.slice.call(arguments,2);return new y["default"](n,e)}),cached:i(function(t,e,n){return new m["default"](n,t.Transports,{ttl:e,timeline:t.timeline,encrypted:t.encrypted})}),first_connected:i(function(t,e){return new _["default"](e)}),best_connected_ever:i(function(){var t=Array.prototype.slice.call(arguments,1);return new v["default"](t)}),delayed:i(function(t,e,n){return new g["default"](n,{delay:e})}),"if":i(function(t,e,n,i){return new b["default"](e,n,i)}),is_supported:i(function(t,e){return function(){return e.isSupported()}})}},function(t,e,n){"use strict";var i=n(42),o=function(){function t(t){this.options=t||{},this.livesLeft=this.options.lives||1/0}return t.prototype.getAssistant=function(t){return i["default"].createAssistantToTheTransportManager(this,t,{minPingDelay:this.options.minPingDelay,maxPingDelay:this.options.maxPingDelay})},t.prototype.isAlive=function(){return this.livesLeft>0},t.prototype.reportDeath=function(){this.livesLeft-=1},t}();e.__esModule=!0,e["default"]=o},function(t,e,n){"use strict";var i=n(43),o=n(44),r=n(47),s=n(48),a=n(49),c=n(50),u=n(51),l=n(53),h=n(54),p={createChannels:function(){return new h["default"]},createConnectionManager:function(t,e){return new l["default"](t,e)},createChannel:function(t,e){return new u["default"](t,e)},createPrivateChannel:function(t,e){return new c["default"](t,e)},createPresenceChannel:function(t,e){return new a["default"](t,e)},createTimelineSender:function(t,e){return new s["default"](t,e)},createAuthorizer:function(t,e){return new r["default"](t,e)},createHandshake:function(t,e){return new o["default"](t,e)},createAssistantToTheTransportManager:function(t,e,n){return new i["default"](t,e,n)}};e.__esModule=!0,e["default"]=p},function(t,e,n){"use strict";var i=n(11),o=n(9),r=function(){function t(t,e,n){this.manager=t,this.transport=e,this.minPingDelay=n.minPingDelay,this.maxPingDelay=n.maxPingDelay,this.pingDelay=void 0}return t.prototype.createConnection=function(t,e,n,r){var s=this;r=o.extend({},r,{activityTimeout:this.pingDelay});var a=this.transport.createConnection(t,e,n,r),c=null,u=function(){a.unbind("open",u),a.bind("closed",l),c=i["default"].now()},l=function(t){if(a.unbind("closed",l),1002===t.code||1003===t.code)s.manager.reportDeath();else if(!t.wasClean&&c){var e=i["default"].now()-c;e<2*s.maxPingDelay&&(s.manager.reportDeath(),s.pingDelay=Math.max(e/2,s.minPingDelay))}};return a.bind("open",u),a},t.prototype.isSupported=function(t){return this.manager.isAlive()&&this.transport.isSupported(t)},t}();e.__esModule=!0,e["default"]=r},function(t,e,n){"use strict";var i=n(9),o=n(45),r=n(46),s=function(){function t(t,e){this.transport=t,this.callback=e,this.bindListeners()}return t.prototype.close=function(){this.unbindListeners(),this.transport.close()},t.prototype.bindListeners=function(){var t=this;this.onMessage=function(e){t.unbindListeners();var n;try{n=o.processHandshake(e)}catch(i){return t.finish("error",{error:i}),void t.transport.close()}"connected"===n.action?t.finish("connected",{connection:new r["default"](n.id,t.transport),activityTimeout:n.activityTimeout}):(t.finish(n.action,{error:n.error}),t.transport.close())},this.onClosed=function(e){t.unbindListeners();var n=o.getCloseAction(e)||"backoff",i=o.getCloseError(e);t.finish(n,{error:i})},this.transport.bind("message",this.onMessage),this.transport.bind("closed",this.onClosed)},t.prototype.unbindListeners=function(){this.transport.unbind("message",this.onMessage),this.transport.unbind("closed",this.onClosed)},t.prototype.finish=function(t,e){this.callback(i.extend({transport:this.transport,action:t},e))},t}();e.__esModule=!0,e["default"]=s},function(t,e){"use strict";e.decodeMessage=function(t){try{var e=JSON.parse(t.data);if("string"==typeof e.data)try{e.data=JSON.parse(e.data)}catch(n){if(!(n instanceof SyntaxError))throw n}return e}catch(n){throw{type:"MessageParseError",error:n,data:t.data}}},e.encodeMessage=function(t){return JSON.stringify(t)},e.processHandshake=function(t){if(t=e.decodeMessage(t),"pusher:connection_established"===t.event){if(!t.data.activity_timeout)throw"No activity timeout specified in handshake";return{action:"connected",id:t.data.socket_id,activityTimeout:1e3*t.data.activity_timeout}}if("pusher:error"===t.event)return{action:this.getCloseAction(t.data),error:this.getCloseError(t.data)};throw"Invalid handshake"},e.getCloseAction=function(t){return t.code<4e3?t.code>=1002&&t.code<=1004?"backoff":null:4e3===t.code?"ssl_only":t.code<4100?"refused":t.code<4200?"backoff":t.code<4300?"retry":"refused"},e.getCloseError=function(t){return 1e3!==t.code&&1001!==t.code?{type:"PusherError",data:{code:t.code,message:t.reason||t.message}}:null}},function(t,e,n){"use strict";var i=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},o=n(9),r=n(23),s=n(45),a=n(8),c=function(t){function e(e,n){t.call(this),this.id=e,this.transport=n,this.activityTimeout=n.activityTimeout,this.bindListeners()}return i(e,t),e.prototype.handlesActivityChecks=function(){return this.transport.handlesActivityChecks()},e.prototype.send=function(t){return this.transport.send(t)},e.prototype.send_event=function(t,e,n){var i={event:t,data:e};return n&&(i.channel=n),a["default"].debug("Event sent",i),this.send(s.encodeMessage(i))},e.prototype.ping=function(){this.transport.supportsPing()?this.transport.ping():this.send_event("pusher:ping",{})},e.prototype.close=function(){this.transport.close()},e.prototype.bindListeners=function(){var t=this,e={message:function(e){var n;try{n=s.decodeMessage(e)}catch(i){t.emit("error",{type:"MessageParseError",error:i,data:e.data})}if(void 0!==n){switch(a["default"].debug("Event recd",n),n.event){case"pusher:error":t.emit("error",{type:"PusherError",data:n.data});break;case"pusher:ping":t.emit("ping");break;case"pusher:pong":t.emit("pong")}t.emit("message",n)}},activity:function(){t.emit("activity")},error:function(e){t.emit("error",{type:"WebSocketError",error:e})},closed:function(e){n(),e&&e.code&&t.handleCloseEvent(e),t.transport=null,t.emit("closed")}},n=function(){o.objectApply(e,function(e,n){t.transport.unbind(n,e)})};o.objectApply(e,function(e,n){t.transport.bind(n,e)})},e.prototype.handleCloseEvent=function(t){var e=s.getCloseAction(t),n=s.getCloseError(t);n&&this.emit("error",n),e&&this.emit(e)},e}(r["default"]);e.__esModule=!0,e["default"]=c},function(t,e,n){"use strict";var i=n(2),o=function(){function t(t,e){this.channel=t;var n=e.authTransport;if("undefined"==typeof i["default"].getAuthorizers()[n])throw"'"+n+"' is not a recognized auth transport";this.type=n,this.options=e,this.authOptions=(e||{}).auth||{}}return t.prototype.composeQuery=function(t){var e="socket_id="+encodeURIComponent(t)+"&channel_name="+encodeURIComponent(this.channel.name);for(var n in this.authOptions.params)e+="&"+encodeURIComponent(n)+"="+encodeURIComponent(this.authOptions.params[n]);return e},t.prototype.authorize=function(e,n){return t.authorizers=t.authorizers||i["default"].getAuthorizers(),t.authorizers[this.type].call(this,i["default"],e,n)},t}();e.__esModule=!0,e["default"]=o},function(t,e,n){"use strict";var i=n(2),o=function(){function t(t,e){this.timeline=t,this.options=e||{}}return t.prototype.send=function(t,e){this.timeline.isEmpty()||this.timeline.send(i["default"].TimelineTransport.getAgent(this,t),e)},t}();e.__esModule=!0,e["default"]=o},function(t,e,n){"use strict";var i=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},o=n(50),r=n(8),s=n(52),a=function(t){function e(e,n){t.call(this,e,n),this.members=new s["default"]}return i(e,t),e.prototype.authorize=function(e,n){var i=this;t.prototype.authorize.call(this,e,function(t,e){if(!t){if(void 0===e.channel_data)return r["default"].warn("Invalid auth response for channel '"+i.name+"', expected 'channel_data' field"),void n("Invalid auth response");var o=JSON.parse(e.channel_data);i.members.setMyID(o.user_id)}n(t,e)})},e.prototype.handleEvent=function(t,e){switch(t){case"pusher_internal:subscription_succeeded":this.subscriptionPending=!1,this.subscribed=!0,this.subscriptionCancelled?this.pusher.unsubscribe(this.name):(this.members.onSubscription(e),this.emit("pusher:subscription_succeeded",this.members));break;case"pusher_internal:member_added":var n=this.members.addMember(e);this.emit("pusher:member_added",n);break;case"pusher_internal:member_removed":var i=this.members.removeMember(e);i&&this.emit("pusher:member_removed",i);break;default:o["default"].prototype.handleEvent.call(this,t,e)}},e.prototype.disconnect=function(){this.members.reset(),t.prototype.disconnect.call(this)},e}(o["default"]);e.__esModule=!0,e["default"]=a},function(t,e,n){"use strict";var i=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},o=n(42),r=n(51),s=function(t){function e(){t.apply(this,arguments)}return i(e,t),e.prototype.authorize=function(t,e){var n=o["default"].createAuthorizer(this,this.pusher.config);return n.authorize(t,e)},e}(r["default"]);e.__esModule=!0,e["default"]=s},function(t,e,n){"use strict";var i=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},o=n(23),r=n(30),s=n(8),a=function(t){function e(e,n){t.call(this,function(t,n){s["default"].debug("No callbacks on "+e+" for "+t)}),this.name=e,this.pusher=n,this.subscribed=!1,this.subscriptionPending=!1,this.subscriptionCancelled=!1}return i(e,t),e.prototype.authorize=function(t,e){return e(!1,{})},e.prototype.trigger=function(t,e){if(0!==t.indexOf("client-"))throw new r.BadEventName("Event '"+t+"' does not start with 'client-'");return this.pusher.send_event(t,e,this.name)},e.prototype.disconnect=function(){this.subscribed=!1},e.prototype.handleEvent=function(t,e){0===t.indexOf("pusher_internal:")?"pusher_internal:subscription_succeeded"===t&&(this.subscriptionPending=!1,this.subscribed=!0,this.subscriptionCancelled?this.pusher.unsubscribe(this.name):this.emit("pusher:subscription_succeeded",e)):this.emit(t,e)},e.prototype.subscribe=function(){var t=this;this.subscribed||(this.subscriptionPending=!0,this.subscriptionCancelled=!1,this.authorize(this.pusher.connection.socket_id,function(e,n){e?t.handleEvent("pusher:subscription_error",n):t.pusher.send_event("pusher:subscribe",{auth:n.auth,channel_data:n.channel_data,channel:t.name})}))},e.prototype.unsubscribe=function(){this.subscribed=!1,this.pusher.send_event("pusher:unsubscribe",{channel:this.name})},e.prototype.cancelSubscription=function(){this.subscriptionCancelled=!0},e.prototype.reinstateSubscription=function(){this.subscriptionCancelled=!1},e}(o["default"]);e.__esModule=!0,e["default"]=a},function(t,e,n){"use strict";var i=n(9),o=function(){function t(){this.reset()}return t.prototype.get=function(t){return Object.prototype.hasOwnProperty.call(this.members,t)?{id:t,info:this.members[t]}:null},t.prototype.each=function(t){var e=this;i.objectApply(this.members,function(n,i){t(e.get(i))})},t.prototype.setMyID=function(t){this.myID=t},t.prototype.onSubscription=function(t){this.members=t.presence.hash,this.count=t.presence.count,this.me=this.get(this.myID)},t.prototype.addMember=function(t){return null===this.get(t.user_id)&&this.count++,this.members[t.user_id]=t.user_info,this.get(t.user_id)},t.prototype.removeMember=function(t){var e=this.get(t.user_id);return e&&(delete this.members[t.user_id],this.count--),e},t.prototype.reset=function(){this.members={},this.count=0,this.myID=null,this.me=null},t}();e.__esModule=!0,e["default"]=o},function(t,e,n){"use strict";var i=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},o=n(23),r=n(12),s=n(8),a=n(9),c=n(2),u=function(t){function e(e,n){var i=this;t.call(this),this.key=e,this.options=n||{},this.state="initialized",this.connection=null,this.encrypted=!!n.encrypted,this.timeline=this.options.timeline,this.connectionCallbacks=this.buildConnectionCallbacks(),this.errorCallbacks=this.buildErrorCallbacks(),this.handshakeCallbacks=this.buildHandshakeCallbacks(this.errorCallbacks);var o=c["default"].getNetwork();o.bind("online",function(){i.timeline.info({netinfo:"online"}),"connecting"!==i.state&&"unavailable"!==i.state||i.retryIn(0)}),o.bind("offline",function(){i.timeline.info({netinfo:"offline"}),i.connection&&i.sendActivityCheck()}),this.updateStrategy()}return i(e,t),e.prototype.connect=function(){if(!this.connection&&!this.runner){if(!this.strategy.isSupported())return void this.updateState("failed");this.updateState("connecting"),this.startConnecting(),this.setUnavailableTimer()}},e.prototype.send=function(t){return!!this.connection&&this.connection.send(t)},e.prototype.send_event=function(t,e,n){return!!this.connection&&this.connection.send_event(t,e,n)},e.prototype.disconnect=function(){this.disconnectInternally(),this.updateState("disconnected")},e.prototype.isEncrypted=function(){return this.encrypted},e.prototype.startConnecting=function(){var t=this,e=function(n,i){n?t.runner=t.strategy.connect(0,e):"error"===i.action?(t.emit("error",{type:"HandshakeError",error:i.error}),t.timeline.error({handshakeError:i.error})):(t.abortConnecting(),t.handshakeCallbacks[i.action](i))};this.runner=this.strategy.connect(0,e)},e.prototype.abortConnecting=function(){this.runner&&(this.runner.abort(),this.runner=null)},e.prototype.disconnectInternally=function(){if(this.abortConnecting(),this.clearRetryTimer(),this.clearUnavailableTimer(),this.connection){var t=this.abandonConnection();t.close()}},e.prototype.updateStrategy=function(){this.strategy=this.options.getStrategy({key:this.key,timeline:this.timeline,encrypted:this.encrypted})},e.prototype.retryIn=function(t){var e=this;this.timeline.info({action:"retry",delay:t}),t>0&&this.emit("connecting_in",Math.round(t/1e3)),this.retryTimer=new r.OneOffTimer(t||0,function(){e.disconnectInternally(),e.connect()})},e.prototype.clearRetryTimer=function(){this.retryTimer&&(this.retryTimer.ensureAborted(),this.retryTimer=null)},e.prototype.setUnavailableTimer=function(){var t=this;this.unavailableTimer=new r.OneOffTimer(this.options.unavailableTimeout,function(){t.updateState("unavailable")})},e.prototype.clearUnavailableTimer=function(){this.unavailableTimer&&this.unavailableTimer.ensureAborted()},e.prototype.sendActivityCheck=function(){var t=this;this.stopActivityCheck(),this.connection.ping(),this.activityTimer=new r.OneOffTimer(this.options.pongTimeout,function(){t.timeline.error({pong_timed_out:t.options.pongTimeout}),t.retryIn(0)})},e.prototype.resetActivityCheck=function(){var t=this;this.stopActivityCheck(),this.connection.handlesActivityChecks()||(this.activityTimer=new r.OneOffTimer(this.activityTimeout,function(){t.sendActivityCheck()}))},e.prototype.stopActivityCheck=function(){this.activityTimer&&this.activityTimer.ensureAborted()},e.prototype.buildConnectionCallbacks=function(){var t=this;return{message:function(e){t.resetActivityCheck(),t.emit("message",e)},ping:function(){t.send_event("pusher:pong",{})},activity:function(){t.resetActivityCheck()},error:function(e){t.emit("error",{type:"WebSocketError",error:e})},closed:function(){t.abandonConnection(),t.shouldRetry()&&t.retryIn(1e3)}}},e.prototype.buildHandshakeCallbacks=function(t){var e=this;return a.extend({},t,{connected:function(t){e.activityTimeout=Math.min(e.options.activityTimeout,t.activityTimeout,t.connection.activityTimeout||1/0),e.clearUnavailableTimer(),e.setConnection(t.connection),e.socket_id=e.connection.id,e.updateState("connected",{socket_id:e.socket_id})}})},e.prototype.buildErrorCallbacks=function(){var t=this,e=function(e){return function(n){n.error&&t.emit("error",{type:"WebSocketError",error:n.error}),e(n)}};return{ssl_only:e(function(){t.encrypted=!0,t.updateStrategy(),t.retryIn(0)}),refused:e(function(){t.disconnect()}),backoff:e(function(){t.retryIn(1e3)}),retry:e(function(){t.retryIn(0)})}},e.prototype.setConnection=function(t){this.connection=t;for(var e in this.connectionCallbacks)this.connection.bind(e,this.connectionCallbacks[e]);this.resetActivityCheck()},e.prototype.abandonConnection=function(){if(this.connection){this.stopActivityCheck();for(var t in this.connectionCallbacks)this.connection.unbind(t,this.connectionCallbacks[t]);var e=this.connection;return this.connection=null,e}},e.prototype.updateState=function(t,e){var n=this.state;if(this.state=t,n!==t){var i=t;"connected"===i&&(i+=" with new socket ID "+e.socket_id),s["default"].debug("State changed",n+" -> "+i),this.timeline.info({state:t,params:e}),this.emit("state_change",{previous:n,current:t}),this.emit(t,e)}},e.prototype.shouldRetry=function(){return"connecting"===this.state||"connected"===this.state},e}(o["default"]);e.__esModule=!0,e["default"]=u},function(t,e,n){"use strict";function i(t,e){return 0===t.indexOf("private-")?r["default"].createPrivateChannel(t,e):0===t.indexOf("presence-")?r["default"].createPresenceChannel(t,e):r["default"].createChannel(t,e)}var o=n(9),r=n(42),s=function(){function t(){this.channels={}}return t.prototype.add=function(t,e){return this.channels[t]||(this.channels[t]=i(t,e)),this.channels[t]},t.prototype.all=function(){return o.values(this.channels)},t.prototype.find=function(t){return this.channels[t]},t.prototype.remove=function(t){var e=this.channels[t];return delete this.channels[t],e},t.prototype.disconnect=function(){o.objectApply(this.channels,function(t){t.disconnect()})},t}();e.__esModule=!0,e["default"]=s},function(t,e,n){"use strict";function i(t,e){return r["default"].defer(function(){e(t)}),{abort:function(){},forceMinPriority:function(){}}}var o=n(42),r=n(11),s=n(30),a=n(9),c=function(){function t(t,e,n,i){this.name=t,this.priority=e,this.transport=n,this.options=i||{}}return t.prototype.isSupported=function(){return this.transport.isSupported({encrypted:this.options.encrypted})},t.prototype.connect=function(t,e){var n=this;if(!this.isSupported())return i(new s.UnsupportedStrategy,e);if(this.priority<t)return i(new s.TransportPriorityTooLow,e);var r=!1,c=this.transport.createConnection(this.name,this.priority,this.options.key,this.options),u=null,l=function(){c.unbind("initialized",l),c.connect()},h=function(){u=o["default"].createHandshake(c,function(t){r=!0,d(),e(null,t)})},p=function(t){d(),e(t)},f=function(){d();var t;t=a.safeJSONStringify(c),e(new s.TransportClosed(t))},d=function(){c.unbind("initialized",l),c.unbind("open",h),c.unbind("error",p),c.unbind("closed",f)};return c.bind("initialized",l),c.bind("open",h),c.bind("error",p),c.bind("closed",f),c.initialize(),{abort:function(){r||(d(),u?u.close():c.close())},forceMinPriority:function(t){r||n.priority<t&&(u?u.close():c.close())}}},t}();e.__esModule=!0,e["default"]=c},function(t,e,n){"use strict";var i=n(9),o=n(11),r=n(12),s=function(){function t(t,e){this.strategies=t,this.loop=Boolean(e.loop),this.failFast=Boolean(e.failFast),this.timeout=e.timeout,this.timeoutLimit=e.timeoutLimit}return t.prototype.isSupported=function(){return i.any(this.strategies,o["default"].method("isSupported"))},t.prototype.connect=function(t,e){var n=this,i=this.strategies,o=0,r=this.timeout,s=null,a=function(c,u){u?e(null,u):(o+=1,n.loop&&(o%=i.length),o<i.length?(r&&(r=2*r,n.timeoutLimit&&(r=Math.min(r,n.timeoutLimit))),s=n.tryStrategy(i[o],t,{timeout:r,failFast:n.failFast},a)):e(!0))};return s=this.tryStrategy(i[o],t,{timeout:r,failFast:this.failFast},a),{abort:function(){s.abort()},forceMinPriority:function(e){t=e,s&&s.forceMinPriority(e)}}},t.prototype.tryStrategy=function(t,e,n,i){var o=null,s=null;return n.timeout>0&&(o=new r.OneOffTimer(n.timeout,function(){s.abort(),i(!0)})),s=t.connect(e,function(t,e){t&&o&&o.isRunning()&&!n.failFast||(o&&o.ensureAborted(),i(t,e))}),{abort:function(){o&&o.ensureAborted(),s.abort()},forceMinPriority:function(t){s.forceMinPriority(t)}}},t}();e.__esModule=!0,e["default"]=s},function(t,e,n){"use strict";function i(t,e,n){var i=s.map(t,function(t,i,o,r){return t.connect(e,n(i,r))});return{abort:function(){s.apply(i,r)},forceMinPriority:function(t){s.apply(i,function(e){e.forceMinPriority(t)})}}}function o(t){return s.all(t,function(t){return Boolean(t.error)})}function r(t){t.error||t.aborted||(t.abort(),t.aborted=!0)}var s=n(9),a=n(11),c=function(){function t(t){this.strategies=t}return t.prototype.isSupported=function(){return s.any(this.strategies,a["default"].method("isSupported"))},t.prototype.connect=function(t,e){return i(this.strategies,t,function(t,n){return function(i,r){return n[t].error=i,i?void(o(n)&&e(!0)):(s.apply(n,function(t){t.forceMinPriority(r.transport.priority)}),void e(null,r))}})},t}();e.__esModule=!0,e["default"]=c},function(t,e,n){"use strict";function i(t){return"pusherTransport"+(t?"Encrypted":"Unencrypted")}function o(t){var e=c["default"].getLocalStorage();if(e)try{var n=e[i(t)];if(n)return JSON.parse(n)}catch(o){s(t)}return null}function r(t,e,n){var o=c["default"].getLocalStorage();if(o)try{o[i(t)]=l.safeJSONStringify({timestamp:a["default"].now(),transport:e,latency:n})}catch(r){}}function s(t){var e=c["default"].getLocalStorage();if(e)try{delete e[i(t)]}catch(n){}}var a=n(11),c=n(2),u=n(56),l=n(9),h=function(){function t(t,e,n){this.strategy=t,this.transports=e,this.ttl=n.ttl||18e5,this.encrypted=n.encrypted,this.timeline=n.timeline}return t.prototype.isSupported=function(){return this.strategy.isSupported()},t.prototype.connect=function(t,e){var n=this.encrypted,i=o(n),c=[this.strategy];if(i&&i.timestamp+this.ttl>=a["default"].now()){var l=this.transports[i.transport];l&&(this.timeline.info({cached:!0,transport:i.transport,latency:i.latency}),c.push(new u["default"]([l],{timeout:2*i.latency+1e3,failFast:!0})))}var h=a["default"].now(),p=c.pop().connect(t,function f(i,o){i?(s(n),c.length>0?(h=a["default"].now(),p=c.pop().connect(t,f)):e(i)):(r(n,o.transport.name,a["default"].now()-h),e(null,o))});return{abort:function(){p.abort()},forceMinPriority:function(e){t=e,p&&p.forceMinPriority(e)}}},t}();e.__esModule=!0,e["default"]=h},function(t,e,n){"use strict";var i=n(12),o=function(){function t(t,e){var n=e.delay;this.strategy=t,this.options={delay:n}}return t.prototype.isSupported=function(){return this.strategy.isSupported()},t.prototype.connect=function(t,e){var n,o=this.strategy,r=new i.OneOffTimer(this.options.delay,function(){n=o.connect(t,e)});return{abort:function(){r.ensureAborted(),n&&n.abort()},forceMinPriority:function(e){t=e,n&&n.forceMinPriority(e)}}},t}();e.__esModule=!0,e["default"]=o},function(t,e){"use strict";var n=function(){function t(t,e,n){this.test=t,this.trueBranch=e,this.falseBranch=n}return t.prototype.isSupported=function(){var t=this.test()?this.trueBranch:this.falseBranch;return t.isSupported()},t.prototype.connect=function(t,e){var n=this.test()?this.trueBranch:this.falseBranch;return n.connect(t,e)},t}();e.__esModule=!0,e["default"]=n},function(t,e){"use strict";var n=function(){function t(t){this.strategy=t}return t.prototype.isSupported=function(){return this.strategy.isSupported()},t.prototype.connect=function(t,e){var n=this.strategy.connect(t,function(t,i){i&&n.abort(),e(t,i)});return n},t}();e.__esModule=!0,e["default"]=n},function(t,e,n){"use strict";var i=n(5);e.getGlobalConfig=function(){return{wsHost:i["default"].host,wsPort:i["default"].ws_port,wssPort:i["default"].wss_port,httpHost:i["default"].sockjs_host,httpPort:i["default"].sockjs_http_port,httpsPort:i["default"].sockjs_https_port,httpPath:i["default"].sockjs_path,statsHost:i["default"].stats_host,authEndpoint:i["default"].channel_auth_endpoint,authTransport:i["default"].channel_auth_transport,activity_timeout:i["default"].activity_timeout,pong_timeout:i["default"].pong_timeout,unavailable_timeout:i["default"].unavailable_timeout}},e.getClusterConfig=function(t){return{wsHost:"ws-"+t+".pusher.com",httpHost:"sockjs-"+t+".pusher.com"}}}])});

angular.module('appModule')

//Factory for communication with rest
.factory('apiServices', ['$http', function($http) {

    return{

        get: (function(serviceUrl) {
            return $http({
                url: serviceUrl,
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json'
                }
            });
        }),

        post: (function(serviceUrl, object) {
            return $http({
                url: serviceUrl,
                method: 'POST',
                data: object,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }),

        put: (function(serviceUrl, object) {
            return $http({
                url: serviceUrl,
                method: 'PUT',
                data: object,
                headers: {
                    'Content-Type' : 'application/json'
                }
            });
        }),

        delete: (function(serviceUrl) {
            return $http({
                url: serviceUrl,
                method: 'DELETE'
            });
        })
    };
}]);

angular.module('appModule')

    .factory('dataStorage', function () {

        var objData = {};

        function _get(key) {
            return objData[key];
        }

        function _set(key, data) {
            objData[key] = data;
        }

        function _remove(key) {
            delete objData[key];
        }

        return {
            get: _get,
            set: _set,
            remove: _remove
        }

    });

angular.module('appModule')

    .factory('localStorage', ['$localStorage', function ($localStorage) {

        var _get = function getLocalStorage(key) {
            return $localStorage[key];
        };

        var _set = function setLocalStorage(key, value) {
            var obj = {};
            obj[key] = value;
            $localStorage.$default(obj);
        };

        var _remove = function removeLocalStorage(key) {
            delete $localStorage[key];
        };

        return {
            get: _get,
            set: _set,
            remove: _remove
        };

    }])

;
angular.module('appModule')

    .factory('googleAnalyticsAbstraction', function () {

        /**
         * @description
         * To start tracking Analytics
         *
         * @function startTrackerWithId
         *
         * @param {string} trackerId
         * @param {number} dispatchIntervalInMinutes
         * */
        function _startTrackerWithId(trackerId, dispatchIntervalInMinutes) {
            if(dispatchIntervalInMinutes) {
                window.ga.startTrackerWithId(trackerId, dispatchIntervalInMinutes);
            } else {
                window.ga.startTrackerWithId(trackerId);
            }
        }

        /**
         * @description
         * To track a Screen (PageView)
         *
         * @function trackView
         *
         * @param {string} screenTitle
         * */
        function _trackView(screenTitle) {
            window.ga.trackView(screenTitle);
        }

        /**
         * @description
         * To track a Screen (PageView) w/ campaign details
         *
         * @function trackViewWithCampaign
         *
         * @param {string} screenTitle
         * @param {string} campaign
         * */
        function _trackViewWithCampaign(screenTitle, campaign) {
            window.ga.trackView(screenTitle, campaign);
        }

        /**
         * @description
         * To track a Screen (PageView) and create a new session
         *
         * @function trackViewNewSession
         *
         * @param {string} screenTitle
         * @param {string} session
         * */
        function _trackViewNewSession(screenTitle, session) {
            window.ga.trackView(screenTitle, session, true)
        }

        /**
         * @description
         * To track an Event
         *
         * @function trackEvent
         *
         * @param {string} category
         * @param {string} action
         * @param {string} [label]
         * @param {number} [value]
         * */
        function _trackEvent(category, action, label, value) {

            if(label && !value){
                window.ga.trackEvent(category, action, label);
            }
            else if(value && !label) {
                window.ga.trackEvent(category, action, value);
            }
            else if(!label && !value) {
                window.ga.trackEvent(category, action);
            }
            else if(label && value) {
                window.ga.trackEvent(category, action, label, value);
            }

        }

        /**
         * @description
         * To track custom metrics
         *
         * @function trackMetric
         *
         * @param {string} key
         * @param {number} [value]
         * */
        function _trackMetric(key, value) {

            if(!value) {
                window.ga.trackMetric(key);
            }
            else if(value) {
                window.ga.trackMetric(key, value);
            }

        }

        /**
         * @description
         * To track an Exception
         *
         * @function trackException
         *
         * @param {string} description
         * @param {boolean} isFatal
         * */
        function _trackException(description, isFatal) {
            window.ga.trackException(description, isFatal)
        }

        /**
         * @description
         * To track User Timing (App Speed)
         *
         * @function trackTiming
         *
         * @param {string} category
         * @param {number} intervalInMilliseconds
         * @param {string} variable
         * @param {string} label
         * */
        function _trackTiming(category, intervalInMilliseconds, variable, label) {
            window.ga.trackTiming(category, intervalInMilliseconds, variable, label);
        }

        /**
         * @description To add a Transaction (E-commerce)
         *
         * @param {string} id
         * @param {string} affiliation
         * @param {number} revenue
         * @param {number} tax
         * @param {number} shipping
         * @param {string} currencyCode
         * */
        function _addTransaction(id, affiliation, revenue, tax, shipping, currencyCode) {
            window.ga.addTransaction(id, affiliation, revenue, tax, shipping, currencyCode);
        }

        /**
         * @description To add a Transaction Item (E-commerce)
         *
         * @param {string} id
         * @param {string} name
         * @param {string} sku
         * @param {string} category
         * @param {number} price
         * @param {number} quantity
         * @param {string} currencyCode
         * */
        function _addTransactionItem(id, name, sku, category, price, quantity, currencyCode) {
            window.ga.addTransactionItem(id, name, sku, category, price, quantity, currencyCode);
        }

        /**
         * @description
         * To add a Custom Dimension
         *
         * Key should be integer index of the dimension i.e. send 1 instead of dimension1 for the first custom dimension you are tracking.
         * e.g. window.ga.addCustomDimension(1, 'Value', success, error)
         *
         * @function addCustomDimension
         *
         * @param {string} key
         * @param {string} value
         * @param {function} success
         * @param {function} error
         * */
        function _addCustomDimension(key, value, success, error) {
            window.ga.addCustomDimension(key, value, success, error);
        }

        /**
         * @description
         * To set a UserId
         *
         * @function setUserId
         *
         * @param {string} userId
         * */
        function _setUserId(userId) {
            window.ga.setUserId(userId);
        }

        /**
         * @description
         * To set a specific app version
         *
         * @function setAppVersion
         *
         * @param {string} version
         * */
        function _setAppVersion(version) {
            window.ga.setAppVersion(version);
        }

        /**
         * @description
         * To set a anonymize Ip address
         *
         * @function setAnonymizeIp
         * */
        function _setAnonymizeIp() {
            window.ga.setAnonymizeIp(true);
        }

        /**
         * @description
         * To set Opt-out
         *
         * @function setOptOut
         * */
        function _setOptOut() {
            window.ga.setOptOut(true);
        }

        /**
         * @description
         * To enabling Advertising Features in Google Analytics allows you to take advantage of Remarketing,
         * Demographics & Interests reports, and more
         *
         * @function setAllowIDFACollection
         * */
        function _setAllowIDFACollection() {
            window.ga.setAllowIDFACollection(true);
        }

        /**
         * @description
         * To enable verbose logging
         *
         * @function debugMode
         * */
        function _debugMode() {
            window.ga.debugMode()
        }

        /**
         * @description
         * To enable/disable automatic reporting of uncaught exceptions
         *
         * @function enableUncaughtExceptionReporting
         *
         * @param {boolean} enable
         * @param {function} success
         * @param {function} error
         * */
        function _enableUncaughtExceptionReporting(enable, success, error) {
            window.ga.enableUncaughtExceptionReporting(enable, success, error);
        }

        return {
            startTrackerWithId: _startTrackerWithId,
            trackView: _trackView,
            trackViewWithCampaign: _trackViewWithCampaign,
            trackViewNewSession: _trackViewNewSession,
            trackEvent: _trackEvent,
            trackMetric: _trackMetric,
            trackException: _trackException,
            trackTiming: _trackTiming,
            addTransaction: _addTransaction,
            addTransactionItem: _addTransactionItem,
            addCustomDimension: _addCustomDimension,
            setUserId: _setUserId,
            setAppVersion: _setAppVersion,
            setAnonymizeIp: _setAnonymizeIp,
            setOptOut: _setOptOut,
            setAllowIDFACollection: _setAllowIDFACollection,
            debugMode: _debugMode,
            enableUncaughtExceptionReporting: _enableUncaughtExceptionReporting
        }

    })

;
angular.module('appModule')

    .service('CheckLoginService', function () {

        function facebookLogin() {
            facebookConnectPlugin.login(["public_profile"], function (response) {
                console.log(response);
                return response.status;
            });
        }

        return {
            facebookLogin: facebookLogin
        }

    })

;
angular.module('appModule')

    .controller('BeaconCtrl', ['$cordovaBeacon', '$cordovaLocalNotification', '$http', '$ionicPlatform', '$ionicPopup', '$rootScope', '$scope', 'googleAnalyticsAbstraction', function ($cordovaBeacon, $cordovaLocalNotification, $http, $ionicPlatform, $ionicPopup, $rootScope, $scope, googleAnalyticsAbstraction) {

        //googleAnalyticsAbstraction.trackView('Beacons');

        $scope.showBeacon = false;
        $scope.beaconRegion = {};

        //Initialize beacons objects
        $scope.nearestBeacon = {
            uuid: '',
            major: '',
            minor: '',
            proximity: ''
        };

        var nearestBeaconFound = {
            uuid: '',
            major: '',
            minor: '',
            proximity: ''
        };

        $scope.updateBeacons = function () {
            $scope.showBeacon = true;
        };

        $ionicPlatform.ready(function () {

            //PRIMEIRA IMPLEMENTACAO BEACON
            /*var locationManager = cordova.plugins.locationManager;

            //Cria uma região que monitora os beacons que possuam o uuid, major ou minor passados a função
            var beaconRegion = new cordova.plugins.locationManager.BeaconRegion(
                'Regiao', 'B9407F30-F5F8-466E-AFF9-25556B57FE6D', 36926
            );

            //Check bluetooth availability
            cordova.plugins.locationManager.isBluetoothEnabled()
                .then(function(isBluetoothEnabled){ //Return a boolean
                    if (!isBluetoothEnabled) {
                        $ionicPopup.confirm({
                            title: 'Por favor, ligue o bluetooth',
                            template: 'Clique em OK para ligar o bluetooth'
                        }).then(function (answer) {
                            if(answer) {
                                cordova.plugins.locationManager.enableBluetooth();
                            }
                        })
                    }
                })
                .fail(function(e) { console.error(e); })
                .done();

            //Check location - GPS availability
            cordova.plugins.diagnostic.isLocationEnabled(function (isLocationEnabled) { //Return a boolean
                if(!isLocationEnabled) {
                    $ionicPopup.confirm({
                        title: 'Por favor, ligue a sua localização',
                        template: 'Clique em OK para acessar as configurações de localização'
                    }).then(function (answer) {
                        if(answer) {
                            cordova.plugins.diagnostic.switchToLocationSettings();
                        }
                    })
                }
            }, function (errorMessage) { //Return a string with the error
                console.error(errorMessage);
            });

            var delegate = new cordova.plugins.locationManager.Delegate();

            //Check if a monitoring region was started
            delegate.didStartMonitoringForRegion = function(pluginResult) {
                console.log('startou regiao', pluginResult);
            };

            //Check what is the state of a device for the beacon specified region (inside or outside)
            delegate.didDetermineStateForRegion = function (pluginResult) {
                console.log('determinou estado', pluginResult);
                cordova.plugins.locationManager.enableDebugNotifications();
                cordova.plugins.locationManager.enableDebugLogs();

                $scope.$apply(function () {
                    $scope.beaconRegion = pluginResult;
                });

                if(pluginResult.state === 'CLRegionStateInside') {
                    // $http.post('http://porta.mixd.com.br/open-door.php').then(function () {});
                    $cordovaLocalNotification.schedule({
                        id: 1,
                        title: "WELCOME",
                        text: "You just enter in region!"
                    })
                } else if (pluginResult.state === 'CLRegionStateOutside') {
                    $cordovaLocalNotification.schedule({
                        id: 1,
                        title: "BYE, BYE",
                        text: "See ya soon!"
                    })
                }

            };

            //Check if there are beacons in range of a specified region
            delegate.didRangeBeaconsInRegion = function (pluginResult) {
                var beacons = pluginResult.beacons;

                for(var i = 0; i < beacons.length; i++) {
                    if(beacons[i].proximity === 'ProximityImmediate') {
                        if(beacons[i].minor !== nearestBeaconFound.minor) {
                            nearestBeaconFound = beacons[i];
                            $scope.$apply(function(){
                                googleAnalyticsAbstraction.trackEvent('User', 'Beacon Found');
                                $scope.nearestBeacon = nearestBeaconFound;
                            });
                        }
                    }
                }

                console.log('beacons no range', pluginResult);
            };

            cordova.plugins.locationManager.setDelegate(delegate);

            //Control status ranging
            $scope.startRangingBeacons = function () {
                locationManager.startRangingBeaconsInRegion(beaconRegion)
                    .fail(function (e) {
                        console.error(e);
                    })
                    .done();
            };

            $scope.stopRangingBeacons = function () {
                locationManager.stopRangingBeaconsInRegion(beaconRegion)
                    .fail(function (e) {
                        console.error(e);
                    })
                    .done();
            };

            //Control status monitoring
            $scope.startMonitoringBeacons = function () {
                locationManager.startMonitoringForRegion(beaconRegion)
                    .fail(function (e) {
                        console.error(e);
                    })
                    .done();
            };

            $scope.stopMonitoringBeacons = function () {
                locationManager.stopRangingBeaconsInRegion(beaconRegion)
                    .fail(function (e) {
                        console.error(e);
                    })
                    .done();
            };*/
            //FIM PRIMEIRA IMPLEMENTACAO BEACON

            //NOVA IMPLEMENTACAO BEACON
            var beaconRegion = $cordovaBeacon.createBeaconRegion('Sede MIXD', 'B9407F30-F5F8-466E-AFF9-25556B57FE6D', 36926, 6251, true);

            $scope.startMonitoringBeacons = function () {
                $cordovaBeacon.getAuthorizationStatus().then(function (response) {
                    if(response.authorizationStatus === 'AuthorizationStatusAuthorized') {
                        $cordovaBeacon.startMonitoringForRegion(beaconRegion);
                    }
                    //TODO else solicite a autorizacao
                });
            };

            $scope.stopMonitoringBeacons = function () {
                return $cordovaBeacon.stopMonitoringForRegion(beaconRegion);
            };

            $cordovaBeacon.setCallbackDidStartMonitoringForRegion(function (pluginResult) {
                console.log(pluginResult);
            });

            $cordovaBeacon.setCallbackDidEnterRegion(function (pluginResult) {
                $scope.beaconRegion = pluginResult;
                $cordovaLocalNotification.schedule({
                    id: 1,
                    title: "WELCOME",
                    text: "You just enter in region!"
                })
            });

            $cordovaBeacon.setCallbackDidExitRegion(function () {
                $scope.beaconRegion = {};
                $cordovaLocalNotification.schedule({
                    id: 1,
                    title: "Bye, Bye",
                    text: "See ya soon!"
                })
            });

            //FIM NOVA IMPLEMENTACAO BEACON

        });

    }])

;

angular.module('appModule')

    .controller('MixdDoorCtrl', ['$http', '$ionicPlatform', '$ionicPopup', '$scope', 'moment', function ($http, $ionicPlatform, $ionicPopup, $scope, moment) {

        $scope.stateInRegion = {};
        var lastExit = moment().subtract(3, 'minutes');
        var lastEnter = '';

        $ionicPlatform.ready(function () {

            var locationManager = cordova.plugins.locationManager;
            var delegate = new cordova.plugins.locationManager.Delegate();

            //Create a region that monitors beacons with the specified uuid, major ou minor
            var beaconRegion = new cordova.plugins.locationManager.BeaconRegion(
                'Sede MIXD', 'B9407F30-F5F8-466E-AFF9-25556B57FE6D', 36926, 6251
            );

            //Check bluetooth availability
            cordova.plugins.locationManager.isBluetoothEnabled()
                .then(function(isBluetoothEnabled){ //Return a boolean
                    if (!isBluetoothEnabled) {
                        $ionicPopup.confirm({
                            title: 'Por favor, ligue o bluetooth',
                            template: 'Clique em OK para ligar o bluetooth'
                        }).then(function (answer) {
                            if(answer) {
                                cordova.plugins.locationManager.enableBluetooth();
                            }
                        })
                    }
                })
                .fail(function(e) { console.error(e); })
                .done();

            //Check location - GPS availability
            cordova.plugins.diagnostic.isLocationEnabled(function (isLocationEnabled) { //Return a boolean
                if(!isLocationEnabled) {
                    $ionicPopup.confirm({
                        title: 'Por favor, ligue a sua localização',
                        template: 'Clique em OK para acessar as configurações de localização'
                    }).then(function (answer) {
                        if(answer) {
                            cordova.plugins.diagnostic.switchToLocationSettings();
                        }
                    })
                }
            }, function (errorMessage) { //Return a string with the error
                console.error(errorMessage);
            });

            //Check if a monitoring region was started
            delegate.didStartMonitoringForRegion = function(pluginResult) {
                console.log('startou regiao', pluginResult);
            };

            //Check what is the state of a device for the beacon specified region (inside or outside)
            delegate.didDetermineStateForRegion = function (pluginResult) {
                lastEnter = moment();

                $scope.$apply(function () {
                   $scope.lastEnter = lastEnter;
                   $scope.lastExit = lastExit;
                });

                if((pluginResult.state === 'CLRegionStateInside') && (lastEnter > lastExit)) {

                    for(var i=0; i <= 1; i++) {
                        $http.post('http://porta.mixd.com.br/open-door.php').then(function () {

                        });
                    }
                    /*$ionicPopup.alert({
                        title: 'Porta',
                        template: 'Aberta'
                    });*/

                } else if(pluginResult.state === 'CLRegionStateOutside'){
                    lastExit = moment().add(2, 'minutes');
                }

                console.log('DETERMINOU ESTADO:', pluginResult.state);
            };

            cordova.plugins.locationManager.setDelegate(delegate);

            $scope.startMonitoringBeacons = function () {
                locationManager.startMonitoringForRegion(beaconRegion)
                    .fail(function (e) {
                        console.error(e);
                    })
                    .done();
            };

            $scope.stopMonitoringBeacons = function () {
                $scope.stateInRegion = {};
                locationManager.stopMonitoringForRegion(beaconRegion)
                    .fail(function (e) {
                        console.error(e);
                    })
                    .done();
            };

        });

    }])

;
angular.module('appModule')

    .controller('CalendarCtrl', /*function ($scope) {*/

        /*$scope.eventSources = [];

         $scope.uiConfig = {
         defaultView: 'month',
         disableDragging: false,
         allDaySlot: false,
         selectable: true,
         unselectAuto: true,
         selectHelper: true,
         editable: true,
         maxTime: "21:00:00",
         minTime: "8:00:00",
         eventDurationEditable: false, // disabling will show resize
         /!*columnFormat: {
         week: 'dd-MM-yyyy',
         day: 'D-MMM-YYYY'
         },
         titleFormat: {
         day: 'dd-MM-yyyy'
         },*!/
         axisFormat: 'H:mm',
         weekends: true,
         header: {
         left: 'month agendaWeek agendaDay',
         center: 'title',
         right: 'today prev,next'
         },
         select: $scope.onSelect,
         eventClick: eventClick,
         events: [{
         "id": "8",
         "title": "Adam Scott",
         "start": "2017-01-04 10:30:00",
         "end": "2017-01-04 12:00:00",
         "allDay": false,
         "color": "#734187"
         }]
         };

         function eventClick() {
         console.log($('td.fc-event-container > a > div'));
         }*/

        ['$scope', '$compile', 'uiCalendarConfig', function CalendarCtrl($scope, $compile, uiCalendarConfig) {
            var date = new Date();
            var d = date.getDate();
            var m = date.getMonth();
            var y = date.getFullYear();

            /* event source that pulls from google.com */
            /*$scope.eventSource = {
                url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic",
                className: 'gcal-event',           // an option!
                currentTimezone: 'America/Chicago' // an option!
            };*/

            /* event source that contains custom events on the scope */
            var events = [
                {
                    title: 'All Day Event',
                    start: new Date(y, m, 1),
                    allDay: true
                },
                {
                    title: 'Long Event',
                    start: new Date(y, m, d - 5),
                    end: new Date(y, m, d - 2)
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: new Date(y, m, d - 3, 16, 0),
                    allDay: false
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: new Date(y, m, d + 4, 16, 0),
                    allDay: false
                },
                {
                    title: 'Birthday Party',
                    start: new Date(y, m, d + 1, 19, 0),
                    end: new Date(y, m, d + 1, 22, 30),
                    allDay: false
                },
                {
                    title: 'Click for Google',
                    start: new Date(y, m, 28),
                    end: new Date(y, m, 29),
                    url: 'http://google.com/'
                }
            ];

            console.log(events);

            /* event source that calls a function on every view switch */
            /*eventsF = function (start, end, timezone, callback) {
                var s = new Date(start).getTime() / 1000;
                var e = new Date(end).getTime() / 1000;
                var m = new Date(start).getMonth();
                var events = [{
                    title: 'Feed Me ' + m,
                    start: s + (50000),
                    end: s + (100000),
                    allDay: false,
                    className: ['customFeed']
                }];
                console.log(events);
                callback(events);
            };*/

            /*$scope.calEventsExt = {
                color: '#f00',
                textColor: 'yellow',
                events: [
                    {
                        type: 'party',
                        title: 'Lunch',
                        start: new Date(y, m, d, 12, 0),
                        end: new Date(y, m, d, 14, 0),
                        allDay: false
                    },
                    {
                        type: 'party',
                        title: 'Lunch 2',
                        start: new Date(y, m, d, 12, 0),
                        end: new Date(y, m, d, 14, 0),
                        allDay: false
                    },
                    {
                        type: 'party',
                        title: 'Click for Google',
                        start: new Date(y, m, 28),
                        end: new Date(y, m, 29),
                        url: 'http://google.com/'
                    }
                ]
            };*/

            /* alert on eventClick */
            $scope.alertOnEventClick = function (date, jsEvent, view) {
                $scope.alertMessage = (date.title + ' was clicked ');
            };

            /* alert on Drop */
            $scope.alertOnDrop = function (event, delta, revertFunc, jsEvent, ui, view) {
                $scope.alertMessage = ('Event Droped to make dayDelta ' + delta);
            };

            /* alert on Resize */
            $scope.alertOnResize = function (event, delta, revertFunc, jsEvent, ui, view) {
                $scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
            };

            function select (start, end, jsEvent, view) {
                $scope.addEvent('teste', moment(start._d).add(1, 'days'), end);
                console.log(events);
            }

            /* add and removes an event source of choice */
            /*$scope.addRemoveEventSource = function (sources, source) {
                var canAdd = 0;
                angular.forEach(sources, function (value, key) {
                    if (sources[key] === source) {
                        sources.splice(key, 1);
                        canAdd = 1;
                    }
                });
                if (canAdd === 0) {
                    sources.push(source);
                }
            };*/

            /* add custom event*/
            $scope.addEvent = function (title, start, end) {
                events.push({
                    title: title,
                    start: start._d,
                    end: end,
                    className: ['openSesame']
                });
            };

            /* remove event */
            $scope.remove = function (index) {
                events.splice(index, 1);
            };

            /*/!* Change View *!/
            $scope.changeView = function (view, calendar) {
                console.log(view);
                console.log(calendar);
                uiCalendarConfig.calendars[calendar].fullCalendar('changeView', view);
            };

            /!* Change View *!/
            $scope.renderCalender = function (calendar) {
                if (uiCalendarConfig.calendars[calendar]) {
                    uiCalendarConfig.calendars[calendar].fullCalendar('render');
                }
            };*/

            /* Render Tooltip */
            /*$scope.eventRender = function (event, element, view) {
                element.attr({
                    'tooltip': event.title,
                    'tooltip-append-to-body': true
                });
                $compile(element)($scope);
            };*/

            /* config object */
            $scope.uiConfig = {
                calendar: {
                    height: 450,
                    editable: true,
                    header: {
                        left: 'month agendaWeek agendaDay',
                        center: 'title',
                        right: 'today prev,next'
                    },
                    axisFormat: 'H:mm',
                    selectable: true,
                    select: select,
                    eventClick: $scope.alertOnEventClick,
                    eventDrop: $scope.alertOnDrop,
                    eventResize: $scope.alertOnResize,
                    eventRender: $scope.eventRender
                }
            };

            /* event sources array*/
            $scope.eventSources = [events];
            // }

        }])

;
angular.module('appModule')

    .controller('CallCtrl', ['$scope', '$state', 'googleAnalyticsAbstraction', function ($scope, $state, googleAnalyticsAbstraction) {

        //googleAnalyticsAbstraction.trackView('Call');

        $scope.phone = '11111111111';
        
        $scope.makeACall = function (phoneNumber) {
            //googleAnalyticsAbstraction.trackEvent('User', 'Made a call');
            window.open('tel:' + phoneNumber, '_system');
        };

        $scope.goBack = function (state) {
            //googleAnalyticsAbstraction.trackEvent('User', 'Back to Home');
            $state.go(state);
        };

    }])

;
angular.module('appModule')

    .controller('EmailCtrl', ['$scope', '$state', 'googleAnalyticsAbstraction', function ($scope, $state, googleAnalyticsAbstraction) {

        //googleAnalyticsAbstraction.trackView('Email');
        //googleAnalyticsAbstraction.trackEvent('User', 'Send an email');

        $scope.email = 'vitor@mixd.com.br';

        $scope.goBack = function (state) {
            //googleAnalyticsAbstraction.trackEvent('User', 'Back to Home');
            $state.go(state);
        };
        
    }])

;
angular.module('appModule')

    .controller('HomeCtrl', ['$ionicPlatform', '$scope', '$state', 'dataStorage', 'googleAnalyticsAbstraction', function ($ionicPlatform, $scope, $state, dataStorage, googleAnalyticsAbstraction) {

        //googleAnalyticsAbstraction.trackView('Home');

        $scope.loggedUserWithGooglePlus = dataStorage.get('googlePlusBasicData');

        $scope.goToProject = function (project) {
            //googleAnalyticsAbstraction.trackEvent('Projects', 'Go To Project: ' + project);
            $state.go(project)
        };

    }])

;

LoginCtrl.$inject = ['$ionicAuth', '$scope', '$state', 'dataStorage', 'googleAnalyticsAbstraction'];angular.module('appModule')

    .controller('LoginCtrl', LoginCtrl);

function LoginCtrl($ionicAuth, $scope, $state, dataStorage, googleAnalyticsAbstraction) {

    $scope.user = {
        email: '',
        password: ''
    };

    $scope.facebookSignIn = function () {
        //googleAnalyticsAbstraction.trackEvent('User', 'Facebook login');
        facebookConnectPlugin.login(["public_profile"], function (response) {
            console.log(response);
            $state.go('home');
        });
    };

    $scope.googleSignIn = function () {
        //googleAnalyticsAbstraction.trackEvent('User', 'Google login');
        window.plugins.googleplus.login({
        }, function (response) { //SUCCESS
            console.log(response);
            dataStorage.set('googlePlusBasicData', response);
            $state.go('home');
        }, function (errorStatus) { //ERROR
            console.error(errorStatus);
        });
    };

    $scope.ionicSignUp = function (user) {

        $ionicAuth.signup(user).then(function () {
            $ionicAuth.login('basic', user).then(function () {
                $state.go('home');
            });
        }, function (errors) {
            errors = errors.details;
            for (var i = 0; i < errors.length; i++) {
                if (errors[i] === 'conflict_email') {
                    $ionicAuth.login('basic', user).then(function () {
                        $state.go('home');
                    });
                } else {
                    alert(errors[i]);
                }
            }
        })
    };

    $scope.goHome = function () {

        //googleAnalyticsAbstraction.trackEvent('User', 'Just enter');
        $state.go('app.home');
    };
}