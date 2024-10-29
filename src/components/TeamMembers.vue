<template>
    <div class="main-team-section">
        <div class="team-details">
            <div class="team-texting">
                <h1 class="team-text">Our Professionals</h1>
            </div>

        </div>
        <div class="team-row">
            <div class="team-card-1">
                <div class="team-mem-image">
                    <img src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6" alt="Team Member 2">
                </div>
                <div class="team-mem-name">
                    <h1>John Doe</h1>
                </div>
                <div class="team-mem-role">
                    <h1>Creative Leader</h1>
                </div>
                <div class="team-mem-dsp">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod, nunc id aliquam
                        lacinia,
                        nisl nunc tincidunt nunc, id lacinia nunc nunc id nunc.</p>
                </div>
                <div class="team-mem-social">
                    <div class="mem-icons">
                        <i class="fa-brands fa-x-twitter"></i>
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                </div>
            </div>
            <div class="team-card-1">
                <div class="team-mem-image">
                    <img src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6" alt="Team Member 2">
                </div>
                <div class="team-mem-name">
                    <h1>Bob GreenField</h1>
                </div>
                <div class="team-mem-role">
                    <h1>Frontend Developer</h1>
                </div>
                <div class="team-mem-dsp">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod, nunc id aliquam
                        lacinia,
                        nisl nunc tincidunt nunc, id lacinia nunc nunc id nunc.</p>
                </div>
                <div class="team-mem-social">
                    <div class="mem-icons">
                        <i class="fa-brands fa-x-twitter"></i>
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                </div>
            </div>
            <div class="team-card-1">
                <div class="team-mem-image">
                    <img src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6" alt="Team Member 2">
                </div>
                <div class="team-mem-name">
                    <h1>Ann Richmond</h1>
                </div>
                <div class="team-mem-role">
                    <h1>Sales Manager</h1>
                </div>
                <div class="team-mem-dsp">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod, nunc id aliquam
                        lacinia,
                        nisl nunc tincidunt nunc, id lacinia nunc nunc id nunc.</p>
                </div>
                <div class="team-mem-social">
                    <div class="mem-icons">
                        <i class="fa-brands fa-x-twitter"></i>
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.mem-icons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 5px;
    margin-bottom: 5px;
}
.mem-icons i{
    font-size: 25px;
    margin: 5px;
    background: linear-gradient(90deg, #29DFFD 0%, #245AF8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
}
.team-text {
    background: linear-gradient(90deg, #29DFFD 0%, #245AF8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    font-size: 52px;
    margin-top: -60px;
    z-index: 1;
    position: relative;
}
@media(max-width:420px){
    .team-text {
        font-size: 33px;
    }
}
.team-mem-dsp p {
    color: #fff;
    font-size: 12px;
    margin-top: 10px;
}

.team-mem-name h1 {
    background: linear-gradient(180deg, #FFFFFF 51.38%, #999999 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: 10px;
    font-size: 25px;
}

.team-mem-role h1 {
    background: linear-gradient(90deg, #29DFFD 0%, #245AF8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    font-size: 16px;
    margin-top: 10px;
}

.team-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    max-width: 1200px;
    padding: 50px 0;
}

.team-card-1 {
    width: 300px;
    margin: 20px;
    border-radius: 12px;
    padding: 30px;
    background-color: #2b2b2b;
}

.team-mem-image {
    width: 100%;
    text-align: center;
}

.team-mem-image img {
    width: 100%;
    height: auto;
    padding: 20px;
    border: 10px solid rgb(14, 113, 194);
    border-radius: 50%;
}
</style>