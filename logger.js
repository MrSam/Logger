/*
 * Copyright (c) 2019 - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Sam Hermans <sam.hermans@gmail.com>
 */

"use strict";

module.exports = class Logger {
    constructor() {
        this._clc = require("cli-color");

        this._error = this._clc.red;
        this._warning = this._clc.yellow;
        this._notice = this._clc.blueBright;
    }

    clearScreen() {
        process.stdout.write(this._clc.reset);
        process.stdout.write(this._clc.erase.screen);
    }

    message(txt) {
        console.log("[" + Logger.getTime() + "] " + txt);
    }

    error(txt) {
        console.log(this._error("[" + Logger.getTime() + "] " + txt));
    }

    warning(txt) {
        console.log(this._warning("[" + Logger.getTime() + "] " +  txt));
    }

    notice(txt) {
        console.log(this._notice("[" + Logger.getTime() + "] " + txt));
    }

    static getTime() {
        let d = new Date();
        return d.getDay()
            + "/"
            + d.getMonth()
            + "/"
            + d.getFullYear()
            + " "
            + d.getHours()
            + ":"
            + d.getMinutes();
    }
};