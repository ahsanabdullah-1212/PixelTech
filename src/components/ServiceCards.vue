<template>
    <div class="main-service-cards">
        <div class="service-card-container">
            <div v-for="(chunk, index) in rows" :key="index">
                <div class="service-cards-row-1">
                    <div class="service-card-one" v-if="chunk[0]">
                        <div class="ss-card-info-1">
                            <div class="serial-number">
                                <h2>{{ chunk[0].serial }}</h2>
                            </div>
                            <div class="ss-card-detail">
                                <h3 class="animated-3">{{ chunk[0].title }}</h3>
                                <p>{{ chunk[0].description }}</p>
                            </div>
                            <div class="ss-card-image">
                                <img :src="chunk[0].image" :alt="chunk[0].title" />
                            </div>
                        </div>
                    </div>

                    <div class="service-card-two" v-if="chunk[1]">
                        <div class="ss-card-info-2">
                            <div class="ss-card-image">
                                <img :src="chunk[1].image" :alt="chunk[1].title" />
                            </div>
                            <div class="serial-number">
                                <h2>{{ chunk[1].serial }}</h2>
                            </div>
                            <div class="ss-card-detail">
                                <h3 class="animated-3">{{ chunk[1].title }}</h3>
                                <p>{{ chunk[1].description }}</p>
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
                                        <h3 class="animated-3">{{ chunk[2].title }}</h3>
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
        </div>
        <div class="specail-cards-btns"><button class="gradient-btn">See our Plans</button><button
                class="simple-btn">Unique Project</button></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cards: [
                { serial: '01', title: '3D Character Design', description: 'By mastering in on what we do best, we consistently deliver top tier results. Our expertise spans six core areas. If you’re not sure where your project fits, reach out to us—we’re here to guide you every step of the way ', image: require('@/assets/images/card-1.png') },
                { serial: '02', title: '3D Game Assets Modeling', description: 'By mastering in on what we do best, we consistently deliver top tier results. Our expertise spans six core areas. If you’re not sure where your project fits, reach out to us—we’re here to guide you every step of the way.', image: require('@/assets/images/ss-2.jpeg') },
                { serial: '03', title: 'Product Visualization', description: 'By mastering in on what we do best, we consistently deliver top tier results. Our expertise spans six core areas. If you’re not sure where your project fits, reach out to us—we’re here to guide you every step of the way.', image: require('@/assets/images/ss-3.jpeg') },
                { serial: '04', title: '2D Motion Graphics', description: 'By mastering in on what we do best, we consistently deliver top tier results. Our expertise spans six core areas. If you’re not sure where your project fits, reach out to us—we’re here to guide you every step of the way.', image: require('@/assets/images/ss-4.jpeg') },
                { serial: '05', title: '3D Customizers for Websites', description: 'By mastering in on what we do best, we consistently deliver top tier results. Our expertise spans six core areas. If you’re not sure where your project fits, reach out to us—we’re here to guide you every step of the way.', image: require('@/assets/images/ss-5.jpeg') },
                { serial: '06', title: 'NFT Design  & Development', description: 'By mastering in on what we do best, we consistently deliver top tier results. Our expertise spans six core areas. If you’re not sure where your project fits, reach out to us—we’re here to guide you every step of the way.', image: require('@/assets/images/ss-6.jpeg') },
            ],
        };
    },
    computed: {
        rows() {
            const chunked = [];
            for (let i = 0; i < this.cards.length; i += 3) {
                chunked.push(this.cards.slice(i, i + 3));
            }
            return chunked;
        },
    },
};
</script>

<style></style>