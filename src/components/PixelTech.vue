<template>
    <div class="parent-pixel">
        <div class="pixel-container">
            <div class="pixel-row">
                <div class="pixel-col-1">
                    <div class="pixel-info">
                        <div class="pixel-head">
                            <h1>Welcome to <span class="animated-2">Pixel Tech.</span></h1>
                            <h1>Let's animate your world.</h1>
                        </div>
                        <div class="pixel-description">
                            <p>Pixel Tech is a cutting-edge 3D animation studio. We specialize in turning your ideas
                                into stunning visual experiences, crafting high-quality 3D animations that captivate and
                                engage audiences. From intricate visual effects to dynamic animated narratives, we
                                transform concepts into compelling animations that make an impact.
                            </p>
                            <p>Our dedicated team of animators and creatives is here to elevate your brand through
                                innovative and immersive animations. If you’re ready to bring your vision to life with
                                unparalleled artistry and precision, you’re in the right place. Partner with Pixel Tech
                                and watch your imagination take shape in three dimensions.</p>
                        </div>
                        <router-link to="/services">
                            <div class="pixel-btn">
                                <button class="gradient-btn">Begin Project</button>
                            </div>
                        </router-link>
                    </div>
                </div>

                <div class="pixel-col-2" style="position:relative">
                    <div class="pixel-image" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
                        <div class="model-viewer" ref="modelViewer"></div>
                    </div>
                </div>
                <div class="modelloader pixel-col-2" v-if="modelLoader">
                    <div class="loader-component">
                        <LoaderComponent />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import LoaderComponent from './LoaderComponent.vue';

export default {
    name: 'ThreeDModelViewer',
    components: {
        LoaderComponent,
    },
    data() {
        return {
            modelLoader: true,
            isMouseInside: false,  // Track if the mouse is inside the div
        }
    },
    mounted() {
        this.init();
    },
    beforeUnmount() {
        this.cleanup();
    },
    methods: {
        init() {
            const container = this.$refs.modelViewer;
            this.scene = new THREE.Scene();
            this.camera = new THREE.PerspectiveCamera(70, container.clientWidth / 400, 0.1, 1000);
            this.camera.position.set(0, 3, 6);

            this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            this.renderer.setSize(container.clientWidth, 400);
            this.renderer.shadowMap.enabled = true;
            this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

            this.$refs.modelViewer.appendChild(this.renderer.domElement);
            this.setupLights();
            this.loadModel();
            document.addEventListener('mousemove', this.onMouseMove, false);
            this.animate();
            window.addEventListener('resize', this.onWindowResize);
        },

        onMouseEnter() {
            this.isMouseInside = true;  // Mouse entered the div
        },

        onMouseLeave() {
            this.isMouseInside = false;  // Mouse left the div
        },

        onMouseMove(event) {
            if (!this.isMouseInside) return;  // Only process if the mouse is inside the div

            const container = this.$refs.modelViewer;
            const rect = container.getBoundingClientRect();

            const mouseX = (event.clientX - rect.left) / rect.width * 2 - 1;
            const mouseY = -(event.clientY - rect.top) / rect.height * 2 + 0.55;

            if (this.headBone) {
                this.headBone.rotation.y = mouseX * 0.5;
                this.headBone.rotation.x = mouseY * -0.5;
            }
            if (this.spine2Bone) {
                this.spine2Bone.rotation.y = mouseX * 0.3;
                this.spine2Bone.rotation.x = mouseY * -0.1;
            }
            if (this.spineBone) {
                this.spineBone.rotation.y = mouseX * 0.2;
                this.spineBone.rotation.x = mouseY * -0.1;
            }
            if (this.eyerBone) {
                this.eyerBone.rotation.y = mouseX * 0.5;
                this.eyerBone.rotation.x = mouseY * -0.5;
            }
            if (this.eyelBone) {
                this.eyelBone.rotation.y = mouseX * 0.5;
                this.eyelBone.rotation.x = mouseY * -0.5;
            }
        },

        animate() {
            requestAnimationFrame(this.animate);
            if (this.mixer) this.mixer.update(0.016);
            this.renderer.render(this.scene, this.camera);
        },

        onWindowResize() {
            const container = this.$refs.modelViewer;
            this.camera.aspect = container.clientWidth / 400;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(container.clientWidth, 400);
        },

        setupLights() {
            const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1.5);
            directionalLight1.position.set(5, 10, 5);
            directionalLight1.castShadow = true;
            this.scene.add(directionalLight1);

            const directionalLight2 = new THREE.DirectionalLight(0xf4a7a7, 1.5);
            directionalLight2.position.set(-5, 3, 0);
            directionalLight2.castShadow = true;
            this.scene.add(directionalLight2);

            const rimLight = new THREE.DirectionalLight(0x005d79, 1.5);
            rimLight.position.set(10, 25, 0);
            this.scene.add(rimLight);

            const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
            this.scene.add(ambientLight);
        },

        loadModel() {
            const loader = new GLTFLoader();
            loader.load('pixieyes10.glb', (gltf) => {
                this.character = gltf.scene;
                this.character.traverse((node) => {
                    if (node.isMesh) {
                        node.castShadow = true;
                        node.receiveShadow = true;
                        node.material.needsUpdate = true;
                    }
                });

                this.headBone = this.character.getObjectByName('head');
                this.spine2Bone = this.character.getObjectByName('spine2');
                this.spineBone = this.character.getObjectByName('spine');
                this.eyerBone = this.character.getObjectByName('eyeR');
                this.eyelBone = this.character.getObjectByName('eyeL');

                this.scene.add(this.character);
                this.mixer = new THREE.AnimationMixer(this.character);
                const action = this.mixer.clipAction(gltf.animations[0]);
                action.timeScale = 0.4;
                action.play();
                this.modelLoader = false;
            }, undefined, (error) => {
                console.error('An error occurred while loading the model:', error);
                this.modelLoader = false;
            });
        },

        cleanup() {
            document.removeEventListener('mousemove', this.onMouseMove);
            window.removeEventListener('resize', this.onWindowResize);
            this.renderer.dispose();
        }
    }
};
</script>
