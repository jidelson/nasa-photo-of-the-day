import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
        <FooterContainer className="main-footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-3 col-sm-6">
                            <ul className="list-unstyled">
                                <li><a href="/">Home</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <ul className="list-unstyled">
                                <li><a href="/portfolio">Portfolio</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <ul className="list-unstyled">
                                <li><a href="/resume">Resume</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p className="text-center">
                            &copy;{new Date().getFullYear()} Joe Idelson - All Rights Reserved
                        </p>

                    </div>
                </div>
            </div>
        </FooterContainer>
    )
}
export default Footer;

const FooterContainer = styled.footer`
.footer-middle{
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite)
}
.footer-bottom{
    padding-top: 3rem;
    padding-bottom: 2rem;
}
ul li a{
    color: var(--mainGrey);
}
ul li a:hover{
    color:var(--mainLightGrey)
}

`;