import React from 'react'
import { TbArrowBadgeRightFilled } from 'react-icons/tb'

const CookiePolicy = () => {
  return (
    <main className='row cookies-policy-container'>
        <div className='col-lg-12'>
            <div className='text-center pb-lg-4 pb-sm-2'>
                <h2>Cookie Policy</h2>
            </div>
            <div>
                <h4 className='cookies-subheading'>Cookie Policy for Wappgo.com</h4>
                <p>This is the Cookie Policy for Wappgo.com, accessible from https://wappgo.com</p>
            </div>
            <div className='cookies-meaning'>
                <h4 className='cookies-subheading'>What Are Cookies</h4>
                <p>As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the sites functionality.</p>
            <p>An HTTP cookie is a small piece of data stored on the user's computer by the web browser while browsing a website. Cookies were designed to be a reliable mechanism for websites to remember stateful information or to record the user's browsing activity.</p>
            </div>
            <article className='cookies-uses'>
                <h4 className='cookies-subheading'>How We Use Cookies</h4>
                <p>We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p>
            </article>
            <div>
                <h4 className='cookies-subheading'>Disabling Cookies</h4>
            <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies</p>
            </div>
            <article >
                <h4 className='cookies-subheading'>The Cookies We Set</h4>
                <span className='cookies-small-heading'>Account related cookies</span>
                <p>If you create an account with us then we will use cookies for the management of the signup process and general administration. These cookies will usually be deleted when you log out however in some cases they may remain afterwards to remember your site preferences when logged out.</p>
            <span className='cookies-small-heading'>Login related cookies</span>
            <p>We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit a new page. These cookies are typically removed or cleared when you log out to ensure that you can only access restricted features and areas when logged in.</p>
            <span className='cookies-small-heading'>Email newsletters related cookies</span>
            <p>This site offers newsletter or email subscription services and cookies may be used to remember if you are already registered and whether to show certain notifications which might only be valid to subscribed/unsubscribed users.</p>
            <span className='cookies-small-heading'>Orders processing related cookies</span>
            <p>This site offers e-commerce or payment facilities and some cookies are essential to ensure that your order is remembered between pages so that we can process it properly.</p>
            <span className='cookies-small-heading'>Forms related cookies</span>
            <p>When you submit data to through a form such as those found on contact pages or comment forms cookies may be set to remember your user details for future correspondence.</p>
            </article>
            <section className='third-party-cookies'>
                <h4 className='cookies-subheading'>In some special cases we also use cookies provided by trusted third parties.</h4>
                <p><TbArrowBadgeRightFilled className="list-arrow-icon" />Third party analytics are used to track and measure usage of this site so that we can continue to produce engaging content. These cookies may track things such as how long you spend on the site or pages you visit which helps us to understand how we can improve the site for you.</p>
            </section>
            <article className='privacy-contact'>
                <h4 className='cookies-subheading'>Contact</h4>
                <p>Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.</p>
                <p>However if you are still looking for more information then you can contact us through one of our preferred contact methods:</p>
            <address><TbArrowBadgeRightFilled className="list-arrow-icon" />Email: <a href='contact@wappgo.co'>contact@wappgo.com</a></address>
            </article>
        </div>
    </main>
  )
}

export default CookiePolicy