<template>
    <div class="main-contact">
        <div class="contact-row">
            <div class="contact-col-1">
                <div class="contact-form">
                    <h2>Send a Message</h2>
                    <form @submit.prevent="submitForm">
                        <!-- Full Name and Company in one row -->
                        <div class="contact-row">
                            <div class="contact-form-group">
                                <label for="fullName">Full Name</label>
                                <input type="text" id="fullName" v-model="formData.fullName" placeholder="John Doe" />
                            </div>

                            <div class="contact-form-group">
                                <label for="company">Company</label>
                                <input type="text" id="company" v-model="formData.company" placeholder="PixelTech" />
                            </div>
                        </div>

                        <!-- Email and Phone Number in one row -->
                        <div class="contact-row">
                            <div class="contact-form-group">
                                <label for="email">Email</label>
                                <input type="email" id="email" v-model="formData.email"
                                    placeholder="johndoe@gmail.com" />
                            </div>

                            <div class="contact-form-group">
                                <label for="phone">Phone number</label>
                                <input type="tel" id="phone" v-model="formData.phone" placeholder="+92" />
                            </div>
                        </div>

                        <div class="contact-form-group">
                            <label>What do you need help with?</label>
                            <div class="contact-help-options">
                                <button type="button" class="contact-help-btn" v-for="option in helpOptions"
                                    :key="option" @click="toggleHelpOption(option)">
                                    {{ option }}
                                </button>
                            </div>
                        </div>

                        <div class="contact-form-group">
                            <label for="budget">What is your estimated budget?</label>
                            <select id="budget" v-model="formData.budget">
                                <option value="$0 - $1000">$0 - $1000</option>
                                <option value="$1000 - $5000">$1000 - $5000</option>
                                <option value="$5000+">$5000+</option>
                            </select>
                        </div>

                        <div class="contact-form-group">
                            <label for="details">Enter your project details:</label>
                            <textarea id="details" v-model="formData.details"
                                placeholder="Tell us more about your project..."></textarea>
                        </div>

                        <!-- Google reCAPTCHA -->
                        <div class="contact-form-group">
                            <div class="g-recaptcha" data-sitekey="your-site-key"></div>
                        </div>


                    </form>

                    <footer class="contact-footer">
                        <div class="contact-infos">
                            <span><img src="@/assets/images/mail.svg"
                                    alt="">&nbsp;&nbsp;hr@pixelsbox.com.ph</span>&nbsp;
                            <span><img src="@/assets/images/call.svg" alt="">&nbsp;&nbsp;+92 336 255 7391</span>
                        </div>
                        <div class="contact-btn">
                            <button type="submit" class="gradient-btn">Send Enquiry</button>
                        </div>

                    </footer>
                </div>
            </div>
            <div class="contact-col-2">
                <div class="booking-box">
                    <div class="book-row1">
                        <p>Book a call</p><img src="@/assets/images/call.svg" alt="">
                    </div>
                    <div class="book-dsp">
                        <p>Choose a time that fits your schedule, and we will arrange a video or voice call—whichever
                            you prefer.</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                fullName: '',
                company: '',
                email: '',
                phone: '',
                helpOptionsSelected: [],
                budget: '',
                details: '',
            },
            helpOptions: [
                '3D Character',
                '3D Game Assets',
                '2D Motion Graphics',
                'NFT Design',
                'Product Visualization',
                'Website Customizers'
            ]
        };
    },
    methods: {
        toggleHelpOption(option) {
            if (this.formData.helpOptionsSelected.includes(option)) {
                this.formData.helpOptionsSelected = this.formData.helpOptionsSelected.filter(opt => opt !== option);
            } else {
                this.formData.helpOptionsSelected.push(option);
            }
        },
        submitForm() {
            // You can add your form submission logic here, including Google reCAPTCHA validation
            console.log('Form data:', this.formData);
        }
    },
    mounted() {
        // Load Google reCAPTCHA
        const script = document.createElement('script');
        script.src = 'https://www.google.com/recaptcha/api.js';
        script.async = true;
        document.head.appendChild(script);
    }
};
</script>

<style scoped>
</style>