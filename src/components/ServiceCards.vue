<template>
    <div class="main-service-cards">
        <div class="service-card-container">
            <div v-for="(chunk, index) in rows" :key="index">
                <div class="service-cards-row-1">
                    <div class="service-card-one" v-if="chunk[0]">
                        <div class="ss-card-info-1">
                            <div class="serial-details-2">
                                <div class="serial-number">
                                    <h2>{{ chunk[0].serial }}</h2>
                                </div>
                                <div class="ss-card-detail">
                                    <h3 class="animated-6">{{ chunk[0].title }}</h3>
                                    <p>{{ chunk[0].description }}</p>
                                </div>
                            </div>

                            <!-- <div class="ss-card-image1">
                                <img :src="chunk[0].image" :alt="chunk[0].title" />
                            </div> -->
                        </div>
                    </div>
                    <div class="service-card-two" v-if="chunk[1]">
                        <div class="ss-card-info-2">
                            <!-- <div class="ss-card-image2">
                                <img :src="chunk[1].image" :alt="chunk[1].title" />
                            </div> -->
                            <div class="serial-details">
                                <div class="serial-number">
                                    <h2>{{ chunk[1].serial }}</h2>
                                </div>
                                <div class="ss-card-detail">
                                    <h3 class="animated-6">{{ chunk[1].title }}</h3>
                                    <p>{{ chunk[1].description }}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

               
            </div>
        </div>
        <!-- <div class="service-card-container">
            <div v-for="(chunk, index) in rows" :key="index">
                <div class="service-cards-row-1">
                    <div class="service-card-one" v-if="chunk[0]">
                        <div class="ss-card-info-1">
                            <div class="serial-details-2">
                                <div class="serial-number">
                                    <h2>{{ chunk[0].serial }}</h2>
                                </div>
                                <div class="ss-card-detail">
                                    <h3 class="animated-6">{{ chunk[0].title }}</h3>
                                    <p>{{ chunk[0].description }}</p>
                                </div>
                            </div>

                            <div class="ss-card-image1">
                                <img :src="chunk[0].image" :alt="chunk[0].title" />
                            </div>
                        </div>
                    </div>
                    <div class="service-card-two" v-if="chunk[1]">
                        <div class="ss-card-info-2">
                            <div class="ss-card-image2">
                                <img :src="chunk[1].image" :alt="chunk[1].title" />
                            </div>
                            <div class="serial-details">
                                <div class="serial-number">
                                    <h2>{{ chunk[1].serial }}</h2>
                                </div>
                                <div class="ss-card-detail">
                                    <h3 class="animated-6">{{ chunk[1].title }}</h3>
                                    <p>{{ chunk[1].description }}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="service-cards-row-2">
                    <div class="service-large-card" v-if="chunk[2]">
                        <div class="ss-card-info-3">
                            <div class="sd-1">
                                <div class="serial-number">
                                    <h2>{{ chunk[2].serial }}</h2>
                                </div>
                                <div class="ss-card-detail">
                                    <div class="ch-title">
                                        <h3 class="animated-6">{{ chunk[2].title }}</h3>
                                    </div>
                                    <div class="ch-p">
                                        <p>{{ chunk[2].description }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="s-d-image">
                                <div class="ss-card-image">
                                    <img :src="chunk[2].image" :alt="chunk[2].title" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
        <div class="specail-cards-btns">
            <router-link to="/contact">
                <button class="gradient-btn">See our Plans</button>
            </router-link>
            <router-link to="/contact">
                <button class="simple-btn">Unique Project?</button>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cards: [
                { serial: '01', title: '3D Character Design', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ', image: require('@/assets/images/card-1.png') },
                { serial: '02', title: '3D Game Assets Modeling', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', image: require('@/assets/images/ss-2.jpeg') },
                { serial: '03', title: 'Product Visualization', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', image: require('@/assets/images/ss-3.jpeg') },
                { serial: '04', title: '2D Motion Graphics', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', image: require('@/assets/images/ss-4.jpeg') },
                { serial: '05', title: '3D Customizers for Websites', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', image: require('@/assets/images/ss-5.jpeg') },
                { serial: '06', title: 'NFT Design  & Development', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', image: require('@/assets/images/ss-6.jpeg') },
            ],
        };
    },
    computed: {
        rows() {
            const chunked = [];
            for (let i = 0; i < this.cards.length; i += 2) {
                chunked.push(this.cards.slice(i, i + 2));
            }
            return chunked;
        },
    },
};
</script>

<style></style>