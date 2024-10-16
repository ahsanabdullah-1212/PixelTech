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
.recaptcha-wrapper {
  width: 300px; /* Desired width */
  margin: auto; /* Center the reCAPTCHA */
  display: flex; /* Use flexbox for centering */
  justify-content: center; /* Center horizontally */
}

.g-recaptcha {
  width: 100%; /* Make the reCAPTCHA fill the wrapper */
  transform: scale(0.8); /* Scale down if needed */
  transform-origin: top left; /* Ensure scaling is from the top left */
  height: auto; /* Adjust height based on content */
}

/* Optional: Hide the default iframe outline */
.g-recaptcha iframe {
  border: none; /* Remove default border */
}

@media(max-width:382px){
    #rc-anchor-container{
        width:200px!important;
    }
}
@media(max-width:545px){
    .contact-infos {
        margin-bottom: 10px;
    }
}
.booking-box {
    margin: 15px;
    background: linear-gradient(180deg, #181818 0%, #070707 100%);
    border-radius: 12px;
    border:1px solid var(--tech-grey);
    width: 250px;
    padding: 15px;
    display: flex;
    flex-direction: column;
}
.book-row1 {
    display:flex;
    flex-direction: row;
    justify-content:space-between
}
.book-dsp p{
    text-align: left;
    font-size: 14px;
    color:var(--tech-grey);
    margin-top:10px;
}
.book-row1 p{
    font-size: 18px;
    text-align: left;
    background: linear-gradient(180deg, #FFFFFF 51.38%, #999999 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
}
#phone {
    border-radius: 0px;
    background-color: transparent;
    border-bottom: 1px solid var(--tech-grey);
}

#email {
    background-color: transparent;
    border-radius: 0px;
    border-bottom: 1px solid var(--tech-grey);
}

#company {
    background-color: transparent;
    border-radius: 0px;
    border-bottom: 1px solid var(--tech-grey);
}

#fullName {
    background-color: transparent;
    border-radius: 0px;
    border-bottom: 1px solid var(--tech-grey);
}

#budget {
    background-color: transparent;
    border: 1px solid var(--tech-grey);
    border-radius: 12px;
}

#details {
    background-color: transparent;
    border: 1px solid var(--tech-grey);
    border-radius: 12px;
}
.main-contact {
    background-image:  url('@/assets/images/contact-img.png');
    background-position:  right 0px top 5px;
    background-repeat: no-repeat;
    background-size:  contain;
    /* You can adjust this to 'cover' or a specific size if needed */
    position: relative; /* Rotate the background image */
}

.contact-form {
    max-width: 600px;
    text-align: left;
    margin: 15px;
    padding: 20px;
    background: linear-gradient(180deg, #181818 0%, #070707 100%);
    border-radius: 10px;
    color: #fff;
    border: 1px solid var(--tech-grey);
}

.contact-form h2 {
    text-align: left;
    margin-bottom: 20px;
    font-weight: 100;
    background: linear-gradient(180deg, #FFFFFF 51.38%, #999999 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
}

.contact-row {
    display: flex;
    justify-content: center;
}
@media(max-width:680px){
    .contact-row{
        flex-direction: column;
    }
}
.contact-form-group {
    margin-bottom: 15px;
    flex: 1;
    margin-right: 10px;
}

.contact-form-group:last-child {
    margin-right: 0;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: 100;
    font-weight: bold;
}

input,
textarea,
select {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border-radius: 5px;
    border: none;
    background-color: #2c2c2e;
    color: #fff;
}

input::placeholder,
textarea::placeholder {
    color: #7a7a7a;
}

.contact-help-options {
    display: flex;
    flex-wrap: wrap;
}

.contact-help-btn {
    background-color: transparent;
    color: #fff;
    padding: 10px 15px;
    border-radius: 20px;
    border: 1px solid var(--tech-grey);
    margin: 5px;
    cursor: pointer;
}

.contact-help-btn:hover {
    background-color: #3a3a3e;
}

textarea {
    height: 100px;
}

.contact-submit-btn {
    width: 100%;
    padding: 15px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
}

.contact-submit-btn:hover {
    background-color: #0056b3;
}

.contact-footer {
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
    font-size: 14px;
}
@media(max-width:546px){
    .contact-footer{
        flex-direction:column;
        justify-content: center;
    }
}
.contact-footer a {
    color: #007bff;
    text-decoration: none;
}

@media (max-width: 600px) {
    .contact-row {
        flex-direction: column;
    }

    .contact-form {
        padding: 15px;
    }

    .contact-help-btn {
        width: 100%;
    }
}
</style>