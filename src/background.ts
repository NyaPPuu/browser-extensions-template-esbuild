"use strict";
/**
* This is a background script
* It is running in the background process of chrome
* You can debug it by clicking the "background page"
* button in the extension settings
*
* Read more about background scripts:
* https://developer.chrome.com/docs/extensions/mv2/background_pages/
*/

if (typeof browser == "undefined" && typeof chrome !== "undefined") var browser = chrome;
