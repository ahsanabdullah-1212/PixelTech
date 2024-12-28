<template>
    <div class="main-contact">
        <div class="contact-row">
            <div class="contact-col-1">
                <div class="contact-form">
                    <h2>Send a Message</h2>
                    <form @submit.prevent="submitForm">
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

                        <div class="contact-row">
                            <div class="contact-form-group">
                                <label for="email">Email</label>
                                <input type="email" id="email" v-model="formData.email" placeholder="johndoe@gmail.com" />
                            </div>

                            <div class="contact-form-group">
                                <label for="phone">Phone number</label>
                                <input type="tel" id="phone" v-model="formData.phone" placeholder="+92" />
                            </div>
                        </div>

                        <div class="contact-form-group">
                            <label>What do you need help with?</label>
                            <div class="contact-help-options">
                                <button
                                    type="button"
                                    class="contact-help-btn"
                                    v-for="option in helpOptions"
                                    :key="option"
                                    :class="{ active: formData.helpOptionsSelected.includes(option) }"
                                    @click="toggleHelpOption(option)"
                                >
                                    {{ option }}
                                </button>
                            </div>
                        </div>

                        <div class="contact-form-group">
                            <label for="budget">What is your estimated budget?</label>
                            <div class="dropdown-container" ref="dropdownContainer">
                                <input type="text" id="budget" v-model="formData.budget" placeholder="Select your budget" readonly />
                                <button type='button' @click.stop="toggleDropdown" class="dropdown-button">▼</button>
                                <div v-if="dropdownVisible" class="dropdown-options" @click.stop>
                                    <div @click="selectOption('$0 - $1000')">$0 - $1000</div>
                                    <div @click="selectOption('$1000 - $5000')">$1000 - $5000</div>
                                    <div @click="selectOption('$5000+')">$5000+</div>
                                </div>
                            </div>
                        </div>

                        <div class="contact-form-group">
                            <label for="details">Enter your project details:</label>
                            <textarea id="details" v-model="formData.details" placeholder="Tell us more about your project..."></textarea>
                        </div>

                        <div class="contact-btn">
                            <button class="gradient-btn">Send Enquiry</button>
                        </div>
                    </form>
                </div>
            </div>

            <div class="contact-col-2">
                <div class="booking-box">
                    <div class="book-row1">
                        <p>Book a call</p><img src="@/assets/images/call.svg" alt="" />
                    </div>
                    <div class="book-dsp">
                        <p>Choose a time that fits your schedule, and we will arrange a video or voice call—whichever you prefer.</p>
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
                fullName: "",
                company: "",
                email: "",
                phone: "",
                helpOptionsSelected: [],
                details: "",
                budget: "",
            },
            helpOptions: [
                "3D Character",
                "3D Game Assets",
                "2D Motion Graphics",
                "NFT Design",
                "Product Visualization",
                "Website Customizers",
            ],
            dropdownVisible: false,
        };
    },
    methods: {
        toggleDropdown() {
            this.dropdownVisible = !this.dropdownVisible;
        },
        selectOption(option) {
            this.formData.budget = option;
            this.dropdownVisible = false;
        },
        toggleHelpOption(option) {
            const index = this.formData.helpOptionsSelected.indexOf(option);
            if (index === -1) {
                this.formData.helpOptionsSelected.push(option);
            } else {
                this.formData.helpOptionsSelected.splice(index, 1);
            }
        },
        async submitForm() {
            const formData = this.formData;
        this.$apiClient
          .post('/api/contactUs', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then(() => {
            alert('Form submitted successfully!');
          });
        },
        resetForm() {
            this.formData = {
                fullName: "",
                company: "",
                email: "",
                phone: "",
                helpOptionsSelected: [],
                details: "",
                budget: "",
            };
        },
    },
    mounted() {
        const script = document.createElement("script");
        script.src = "https://www.google.com/recaptcha/api.js";
        script.async = true;
        document.head.appendChild(script);
        document.addEventListener("click", this.closeDropdown);
    },
    beforeUnmount() {
        document.removeEventListener("click", this.closeDropdown);
    },
};
</script>

<style scoped>

.dropdown-container {
    display: flex;
    align-items: center;
    position: relative;
}

.dropdown-container input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.dropdown-button {
    margin-left: 4px;
    padding: 8px;
    background-color: #343639;
    color: #696464;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 5px;
}

.dropdown-options {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #1f1e1e;
    width: 93%;
    color: var(--white-color);
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.dropdown-options div {
    padding: 8px 12px;
    cursor: pointer;
}

.dropdown-options div:hover {
    background-color: #ddd;
}

/* Active Button Styling */
.contact-help-btn.active {
    background-color: #29DFFD;
    color: white;
}
</style>
