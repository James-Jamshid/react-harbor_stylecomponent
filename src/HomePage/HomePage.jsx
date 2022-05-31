import React from 'react'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons';
import { FiTwitter } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';
import { FiFacebook } from 'react-icons/fi';
import apple from '../assets/img/image2.png';
import playmarket from '../assets/img/playmarket.png';
import phone from '../assets/img/image1.png';
import frame from '../assets/img/Frame.png';
import frame2 from '../assets/img/Frame2.png';
import frame3 from '../assets/img/Frame3.png';
import frame4 from '../assets/img/Frame4.png';
import rate from '../assets/img/rate1.png';
import applegreen from '../assets/img/applegreen.png';
import thumb from '../assets/img/thumb.png';
import nature from '../assets/img/nature.png';
import join from '../assets/img/join.png';
import { AppleGreen, AppleLogo, Bottom, Child, Container, Family, FamilyButton, Footer, FourPics, FourPics1, GreenBox, Join, JoinImg, Mail, Nature, Navbar, Phone, PLaymarketLogo, Rate, RateImg, Thumb, ThumbImg, Wrapper, WrapperButtons } from './style'

const HomePage = () => {

  return (
    <IconContext.Provider value={{ color: " #28514F" }}>


      {/*  <Link to='/' style={{textDecoration:'none'}}>
     </Link> */}
      <Container>
        <Navbar>
          <Navbar.Left>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <h1>
                harbor
              </h1>
            </Link>

          </Navbar.Left>
          <Navbar.Right>
            <Link to='/home' style={{ textDecoration: 'none' }}>
              <h5 id='home'>
                Home

              </h5>
            </Link>
            <Link to='/about' style={{ textDecoration: 'none' }}>
              <h5>
                About

              </h5>
            </Link>
            <Link to='/risk' style={{ textDecoration: 'none' }}>
              <h5>
                Know Your Risks

              </h5>
            </Link>
            <Link to='/forwork' style={{ textDecoration: 'none' }}>
              <h5>
                For Work

              </h5>
            </Link>
            <Link to='/journal' style={{ textDecoration: 'none' }}>
              <h5>
                Journal

              </h5>
            </Link>
            <Link to='/shop' style={{ textDecoration: 'none' }}>
              <h5>
                Shop

              </h5>
            </Link>

          </Navbar.Right>


        </Navbar>
        <Wrapper>
          {/* <Link to='/' style={{ textDecoration: 'none' }}>
        </Link>
        <Link to='/' style={{ textDecoration: 'none' }}>
        </Link> */}
          <h2>
            Reimagining readiness for <br /> life's uncertain moments.
          </h2>
          <p>
            The app that makes disaster preparedness easy and accessible. <br /> Because sometimes tomorrow doesn't look like today.

          </p>

          <Wrapper.Buttons>
            <Link to='/btn' style={{ textDecoration: 'none' }}>
              <WrapperButtons id='btn'>
                <AppleLogo src={apple} />
                <p>App Store</p>


              </WrapperButtons>


            </Link>
            <Link to='/btn' style={{ textDecoration: 'none' }}>
              <WrapperButtons id='btn2'>

                <PLaymarketLogo src={playmarket} />
                <p>Play Store</p>
              </WrapperButtons>

            </Link>

          </Wrapper.Buttons>
          <Phone src={phone} />


        </Wrapper>
        <Child>
          <h2>
            The right plan for when <br /> things don't go as planned
          </h2>
          <p>Not prepared? You're not alone. Emergency planning is <br /> overwhelming. We work with experts to make the hard parts easy, so <br /> you can have confidence when it matters most.</p>
          <Child.Img>
            <FourPics1 src={frame} />
            <FourPics src={frame2} />
            <FourPics src={frame3} />
            <FourPics src={frame4} />

          </Child.Img>


        </Child>
        <Bottom>
          <h2>We're ready, are you?</h2>
          <p>Here's what people are saying about harbor.</p>
          <Rate>
            <Rate.Inner>
              <p>
                It's beautiful, easy to use, and is <br /> genuinely growing my confidence <br /> for crisis preparation.
              </p>
              <RateImg src={rate} />
              <GreenBox>

                <AppleGreen src={applegreen} />
                <p>Antonea <br />iOS Beta Tester</p>

              </GreenBox>


            </Rate.Inner>
            <Rate.Inner>
              <p>
                This app is something I have been <br /> hoping for for a while now. So <br /> I am excited to be beta testing it.
              </p>
              <RateImg src={rate} />
              <GreenBox>

                <AppleGreen src={applegreen} />
                <p>Kathryn <br />iOS Beta Tester</p>

              </GreenBox>

            </Rate.Inner>
            <Rate.Inner>
              <p>
                It is a great app and I can not wait to <br /> use it more and see what all <br /> content you add.
              </p>
              <RateImg src={rate} />
              <GreenBox>

                <AppleGreen src={applegreen} />
                <p>Gabriel <br />iOS Beta Tester</p>

              </GreenBox>

            </Rate.Inner>

          </Rate>

        </Bottom>
        <Family>
          <Thumb>
            <ThumbImg src={thumb} />


          </Thumb>
          <h2>Our mission is to <br /> encourage readiness for all</h2>
          <p>It's our dream that one day, everyday readiness will be quite ordinary <br /> - like brushing your teeth.</p>
          <p>A little bit of effort with a big payoff.</p>
          <Link to='/btn' style={{ textDecoration: 'none' }}>
            <FamilyButton>
              <button>Learn more</button>

            </FamilyButton>
          </Link>
          <Nature src={nature} />

        </Family>
        <Join>
          <Join.Upper>
            <Join.UpperLeft>
              <h2>Stay one step <br /> ahead with harbor</h2>
              <Wrapper.Buttons>
                <Link to='/btn' style={{ textDecoration: 'none' }}>
                  <WrapperButtons id='btn'>
                    <AppleLogo src={apple} />
                    <p>App Store</p>


                  </WrapperButtons>


                </Link>
                <Link to='/btn' style={{ textDecoration: 'none' }}>
                  <WrapperButtons id='btn2'>

                    <PLaymarketLogo src={playmarket} />
                    <p>Play Store</p>
                  </WrapperButtons>

                </Link>

              </Wrapper.Buttons>

            </Join.UpperLeft>
            <Join.UpperRight>
              <JoinImg src={join} />


            </Join.UpperRight>

          </Join.Upper>
          <Join.Lower>
            <h2>Join harbor high fives</h2>
            <p>Up high. Down low. Tips on how to find your way through any disaster <br /> in the best way possible: together. And be the first in line for Android.</p>

          </Join.Lower>
          <Mail>
            <input type="email" placeholder='Email adress' />
            <button id='btn'>SIGN UP </button>

          </Mail>
          <p>Our commitment to protecting your Data Privacy</p>


        </Join>
        <Footer>
          <Footer.Left>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <h1>harbor</h1>
            </Link>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <p>© 2020 harbor. All rights reserved</p>
            </Link>
            <Footer.LeftUpper1>
              <Link to='/privacy' style={{ textDecoration: 'none' }}>
                <h5>Privacy</h5>
              </Link>
              <Link to='/terms' style={{ textDecoration: 'none' }}>
                <h5>Terms</h5>
              </Link>
              <Link to='/btn' style={{ textDecoration: 'none' }}>
                <h5>FAQ</h5>
              </Link>

            </Footer.LeftUpper1>
            <Footer.LeftUpper2>
              <Link to='/btn' style={{ textDecoration: 'none' }}>
                <h5>Jounal</h5>
              </Link>
              <Link to='/btn' style={{ textDecoration: 'none' }}>
                <h5>Contact</h5>
              </Link>
              <Link to='/btn' style={{ textDecoration: 'none' }}>
                <h5>Shop</h5>
              </Link>
            </Footer.LeftUpper2>

          </Footer.Left>
          <Footer.Middle>
            <Link to='/btn' style={{ textDecoration: 'none' }}>
              <h5> Home  </h5>
            </Link>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <h5>About</h5>
            </Link>
            <Link to='/btn' style={{ textDecoration: 'none' }}>
              <h5>Risks</h5>
            </Link>

          </Footer.Middle>
          <Footer.Right>

            <a href="https://twitter.com">

              <FiTwitter />
            </a>


            <a href="https://www.instagram.com">

              <FaInstagram />
            </a>


            <a href="https://www.facebook.com">

              <FiFacebook />
            </a>


          </Footer.Right>
        </Footer>
      </Container>
    </IconContext.Provider>
  )
}

export default HomePage