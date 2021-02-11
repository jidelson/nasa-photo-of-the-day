import React from 'react';
import banner from '../.././images/banner.jpg';

function Home() {
    return (
        <div className="main-home">
            <div className="home-top">
                <div className="container text-center">
                    <h1>Joe Idelson</h1>
                        <h3>Hey there! I'm Joe Idelson, a full stack web developer.</h3>
                        <p>
                        I live in the San Francisco Bay Area. Prior to coding, I recieved my Bachelor's in Applied Science for Animation 
                        and Visual Effects. I am hard working and passionate about my work. I am always looking for ways to improve. I 
                        graduated from Lambda School, a nine month intensive boot-camp style school, where I was taught the most contemporary
                        techniques and skills for web development. When I am not coding, I enjoy spending time with family and friends, and 
                        working on a variety of art projects.
                        </p>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-12 site-title">
                        <h3 class="title-text">Hey there! I am</h3>
                        <h1 class="title-text text-uppercase">Joe Idelson</h1>
                        <h4 class="title-text text-uppercase">Full Stack Web Developer</h4>
                        <div class="site-buttons">
                            <div class="d-flex flex-row flex-wrap">
                                <button type="button" class="btn button primary-button mr-4 text-uppercase">Hire Me</button>
                                <button type="button" class="btn button secondary-button text-uppercase">My Resume</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 banner-image">
                        <img src={banner} alt="banner-img" class="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;

// const HomeContainer = styled.home`

// `