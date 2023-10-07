import React from 'react'

export default function Section() {
    return (
        <div>
            <section class="home" id="home">
                <div class="home-content">
                    <h3>Hello, It's Me</h3>
                    <h1>Shivam Thakur</h1>
                    <h3>And I'm a <span>Frontend Developer</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Commodi fuga
                        unde eius  nisi!<br/>  Nesciunt sint qui deleniti!</p>

                    <div class="social-media">
                        <a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                        <a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/feed/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="https://twitter.com/home?lang=en-in" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                    </div>

                    <a href="#" class="btn">Download CV</a>
                </div>

                <div class="home-img">
                    <img src="shivam pic.jpg" alt="user-image"/>
                </div>

            </section>
        </div>
    )
}
