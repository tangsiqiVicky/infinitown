var town17 = function (create, module, n) {
    var _getServer = create("24");
    create("13");
    var shape = create("15");
    var instance = (create("22"), create("16"), {});
    /**
     * @param {string} name
     * @param {string} data
     * @param {!Object} options
     * @param {string} callback
     * @return {?}
     */
    instance.loadScene = function(name, data, options, callback) {
        return new _getServer(function(_emscripten_bind_Vector___destroy___0, a) {
            var addedRenderer = (options.renderer, shape.getGeometry(name));
            if (addedRenderer) {
                shape.sceneLoader.setBinaryGeometryBuffer(addedRenderer);
            }
            shape.loadScene(data + name + (callback || ".json")).spread(function(self, canCreateDiscussions) {
                var camera;
                self.materials = {};
                if (self.cameras && self.cameras.length > 0) {
                    camera = self.cameras[0];
                }
                if (camera) {
                    /** @type {number} */
                    camera.aspect = window.innerWidth / window.innerHeight;
                    camera.updateProjectionMatrix();
                } else {
                    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, .01, 2E3);
                    camera.position.set(-3.5, 2, 3);
                }
                /** @type {number} */
                var size = 100;
                /** @type {number} */
                var step = 10;
                var grid = new THREE.GridHelper(size, step);
                self.add(grid);
                var s = new THREE.AxisHelper(5);
                self.add(s);
                /** @type {!Array} */
                self.dirLights = [];
                self.traverse(function(camera) {
                    if (camera instanceof THREE.DirectionalLight) {
                        camera.position.set(0, 0, 5);
                        camera.quaternion.normalize();
                        camera.position.applyQuaternion(camera.quaternion);
                        camera.quaternion.set(0, 0, 0, 0);
                        camera.scale.set(1, 1, 1);
                        self.dirLights.push(camera);
                    }
                });
                mixer = new THREE.AnimationMixer(self);
                /** @type {number} */
                var i = 0;
                for (; i < self.animations.length; i++) {
                    mixer.clipAction(self.animations[i]).play();
                }
                self.traverse(function(options) {
                    var material = options.material;
                    if (material && material.aoMap) {
                        !material.map;
                    }
                });
                self.traverse(function(box1) {
                    if ("Line" === box1.name) {
                        /** @type {number} */
                        box1.material.linewidth = 10;
                        box1.material.color.setRGB(1, 0, 1);
                    }
                });
                self.traverse(function(node) {
                    if (node instanceof THREE.SpotLight) {
                        var p = new THREE.Vector3(0, 0, -1);
                        var sprite = new THREE.Object3D;
                        node.updateMatrixWorld();
                        node.localToWorld(p);
                        sprite.position.copy(p);
                        self.add(sprite);
                        node.target = sprite;
                    }
                    if (node.material) {
                        if (node.material.materials) {
                            node.material.materials.forEach(function(b) {
                                /** @type {number} */
                                self.materials[b.uuid] = b;
                            });
                        } else {
                            self.materials[node.material.uuid] = node.material;
                        }
                    }
                });
                _emscripten_bind_Vector___destroy___0(self);
            });
        });
    };
    module.exports = instance;
}