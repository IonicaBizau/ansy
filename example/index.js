"use strict";

const ansy = require("../lib");

console.log(ansy.fg.rgb(255, 0, 0) + "Red foreground." + ansy.close.fg);
// => "Red foreground"

console.log(ansy.bg.hex("#000000") + "Black background." + ansy.close.bg);
// => "Black background"
