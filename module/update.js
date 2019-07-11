var t = require("Set");
var value = require("threejsInitional");
var a = {
    normalMapFactor : "uNormalMapFactor",
    normalMap : "sTextureNormalMap",
    matcapMap : "sTextureAOMap"
};
/**
 * @param {?} value
 * @param {string} defaultValue
 * @return {?}
 */
function optionalParameter(value, defaultValue) {
    return void 0 !== value ? value : defaultValue;
}

/**
 * @param {!Function} data
 * @return {undefined}
 */
var update = function(data) {
    /** @type {!Object} */
    data = Object.assign({
        vertexShader : data.vertexShader,
        fragmentShader : data.fragmentShader,
        uniforms : {
            uNormalMapFactor : {
                type : "f",
                value : 1
            },
            sTextureMatcapMap : {
                type : "t",
                value : null
            },
            sTextureNormalMap : {
                type : "t",
                value : null
            },
            uFlipY : {
                type : "i",
                value : 0
            },
            uOutputLinear : {
                type : "i",
                value : 0
            }
        }
    }, data);
    t.call(this, data);
    Object.keys(this.uniforms).forEach(function(name) {
        this.onPropertyChange(name, function(initSBC) {
            /** @type {!Object} */
            this.uniforms[name].value = initSBC;
        });
    }, this);
    _.each(a, function(javascriptName, prop) {
        this.onPropertyChange(prop, function(jsonName) {
            this[javascriptName] = jsonName;
        });
    }, this);
    this.extensions = {
        derivatives : true
    };
};
update.inherit(t, {
    clone : function(params) {
        var data = params || new update;
        return t.prototype.clone.call(this, data), data.name = this.name, data.transparent = this.transparent, _.each(this.uniforms, function(dom, name) {
            var value = dom.type;
            if ("v2" === value || "m4" === value) {
                data.uniforms[name].value.copy(dom.value);
            } else {
                data.uniforms[name].value = dom.value;
            }
        }, this), data;
    }
});
/**
 * @param {!Object} material
 * @return {?}
 */
update.create = function(material) {
    var source = new update;
    source.uuid = material.uuid;
    source.name = material.name;
    source.transparent = optionalParameter(material.transparent, false);
    source.polygonOffset = optionalParameter(material.polygonOffset, false);
    source.polygonOffsetUnits = optionalParameter(material.polygonOffsetUnits, 0);
    source.polygonOffsetFactor = optionalParameter(material.polygonOffsetFactor, 0);
    var pm = (value.getTexture("white.png"), material.normalMap);
    var color = material.matcapMap;
    return source.uNormalMapFactor = optionalParameter(material.normalMapFactor, 1), source.uFlipY = optionalParameter(material.flipNormals, 0), source.side = optionalParameter(material.side, THREE.FrontSide), pm.needsUpdate = true, color.needsUpdate = true, source.sTextureNormalMap = pm, source.sTextureMatcapMap = color, source;
};
/** @type {function(!Function): undefined} */
module.exports = update;
var town20=function(require, module, n) {
        /**
         * @param {?} value
         * @param {string} defaultValue
         * @return {?}
         */
        function optionalParameter(value, defaultValue) {
            return void 0 !== value ? value : defaultValue;
        }
        var t = require("21");
        var value = require("15");
        var a = {
            normalMapFactor : "uNormalMapFactor",
            normalMap : "sTextureNormalMap",
            matcapMap : "sTextureAOMap"
        };
        /**
         * @param {!Function} data
         * @return {undefined}
         */
        var update = function(data) {
            /** @type {!Object} */
            data = Object.assign({
                vertexShader : data.vertexShader,
                fragmentShader : data.fragmentShader,
                uniforms : {
                    uNormalMapFactor : {
                        type : "f",
                        value : 1
                    },
                    sTextureMatcapMap : {
                        type : "t",
                        value : null
                    },
                    sTextureNormalMap : {
                        type : "t",
                        value : null
                    },
                    uFlipY : {
                        type : "i",
                        value : 0
                    },
                    uOutputLinear : {
                        type : "i",
                        value : 0
                    }
                }
            }, data);
            t.call(this, data);
            Object.keys(this.uniforms).forEach(function(name) {
                this.onPropertyChange(name, function(initSBC) {
                    /** @type {!Object} */
                    this.uniforms[name].value = initSBC;
                });
            }, this);
            _.each(a, function(javascriptName, prop) {
                this.onPropertyChange(prop, function(jsonName) {
                    this[javascriptName] = jsonName;
                });
            }, this);
            this.extensions = {
                derivatives : true
            };
        };
        update.inherit(t, {
            clone : function(params) {
                var data = params || new update;
                return t.prototype.clone.call(this, data), data.name = this.name, data.transparent = this.transparent, _.each(this.uniforms, function(dom, name) {
                    var value = dom.type;
                    if ("v2" === value || "m4" === value) {
                        data.uniforms[name].value.copy(dom.value);
                    } else {
                        data.uniforms[name].value = dom.value;
                    }
                }, this), data;
            }
        });
        /**
         * @param {!Object} material
         * @return {?}
         */
        update.create = function(material) {
            var source = new update;
            source.uuid = material.uuid;
            source.name = material.name;
            source.transparent = optionalParameter(material.transparent, false);
            source.polygonOffset = optionalParameter(material.polygonOffset, false);
            source.polygonOffsetUnits = optionalParameter(material.polygonOffsetUnits, 0);
            source.polygonOffsetFactor = optionalParameter(material.polygonOffsetFactor, 0);
            var pm = (value.getTexture("white.png"), material.normalMap);
            var color = material.matcapMap;
            return source.uNormalMapFactor = optionalParameter(material.normalMapFactor, 1), source.uFlipY = optionalParameter(material.flipNormals, 0), source.side = optionalParameter(material.side, THREE.FrontSide), pm.needsUpdate = true, color.needsUpdate = true, source.sTextureNormalMap = pm, source.sTextureMatcapMap = color, source;
        };
        /** @type {function(!Function): undefined} */
        module.exports = update;
    }