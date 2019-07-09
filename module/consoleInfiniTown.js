var consoleInfiniTown = {};
/**
 * @param {undefined} message
 * @param {undefined} callback
 * @return {?}
 */
consoleInfiniTown.CreateWhiteTexture = function(message, callback) {
    var request = consoleInfiniTown.CreateDataTexture(message, callback);
    /** @type {number} */
    var i = 0;
    for (; i < request.image.data.length; i++) {
        /** @type {number} */
        request.image.data[i] = 255;
    }
    return request;
};
/**
 * @param {undefined} s
 * @param {undefined} e
 * @return {?}
 */
consoleInfiniTown.CreateBlackTexture = function(s, e) {
    var div = consoleInfiniTown.CreateDataTexture(s, e);
    /** @type {number} */
    var i = 0;
    for (; i < div.image.data.length; i++) {
        /** @type {number} */
        div.image.data[i] = 0;
    }
    return div;
};
/**
 * @param {undefined} s
 * @param {undefined} e
 * @return {?}
 */
consoleInfiniTown.CreateNormalTexture = function(s, e) {
    var div = consoleInfiniTown.CreateDataTexture(s, e);
    /** @type {number} */
    var i = 0;
    for (; i < div.image.data.length; i = i + 3) {
        /** @type {number} */
        div.image.data[i] = 128;
        /** @type {number} */
        div.image.data[i + 1] = 128;
        /** @type {number} */
        div.image.data[i + 2] = 255;
    }
    return div;
};
/**
 * @param {number} size
 * @param {number} width
 * @return {?}
 */
consoleInfiniTown.CreateDataTexture = function(size, width) {
    if (void 0 === size) {
        /** @type {number} */
        size = 4;
    }
    if (void 0 === width) {
        /** @type {number} */
        width = 4;
    }
    /** @type {number} */
    var calculated_mac = size * width * 3;
    /** @type {!Uint8Array} */
    var a = new Uint8Array(calculated_mac);
    var texture = new THREE.DataTexture(a, size, width, THREE.RGBFormat);
    return texture.needsUpdate = true, texture;
};
module.exports = consoleInfiniTown;
var town4=function(require, module, n) {
        var consoleInfiniTown = {};
        /**
         * @param {undefined} message
         * @param {undefined} callback
         * @return {?}
         */
        consoleInfiniTown.CreateWhiteTexture = function(message, callback) {
            var request = consoleInfiniTown.CreateDataTexture(message, callback);
            /** @type {number} */
            var i = 0;
            for (; i < request.image.data.length; i++) {
                /** @type {number} */
                request.image.data[i] = 255;
            }
            return request;
        };
        /**
         * @param {undefined} s
         * @param {undefined} e
         * @return {?}
         */
        consoleInfiniTown.CreateBlackTexture = function(s, e) {
            var div = consoleInfiniTown.CreateDataTexture(s, e);
            /** @type {number} */
            var i = 0;
            for (; i < div.image.data.length; i++) {
                /** @type {number} */
                div.image.data[i] = 0;
            }
            return div;
        };
        /**
         * @param {undefined} s
         * @param {undefined} e
         * @return {?}
         */
        consoleInfiniTown.CreateNormalTexture = function(s, e) {
            var div = consoleInfiniTown.CreateDataTexture(s, e);
            /** @type {number} */
            var i = 0;
            for (; i < div.image.data.length; i = i + 3) {
                /** @type {number} */
                div.image.data[i] = 128;
                /** @type {number} */
                div.image.data[i + 1] = 128;
                /** @type {number} */
                div.image.data[i + 2] = 255;
            }
            return div;
        };
        /**
         * @param {number} size
         * @param {number} width
         * @return {?}
         */
        consoleInfiniTown.CreateDataTexture = function(size, width) {
            if (void 0 === size) {
                /** @type {number} */
                size = 4;
            }
            if (void 0 === width) {
                /** @type {number} */
                width = 4;
            }
            /** @type {number} */
            var calculated_mac = size * width * 3;
            /** @type {!Uint8Array} */
            var a = new Uint8Array(calculated_mac);
            var texture = new THREE.DataTexture(a, size, width, THREE.RGBFormat);
            return texture.needsUpdate = true, texture;
        };
        module.exports = consoleInfiniTown;
    }
