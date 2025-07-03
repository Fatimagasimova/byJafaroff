import React from 'react'
import "./LandingPage.css"

const LandingPage = () => {
  return (
    <div className='landing-page' id='home'>
      <nav>
        <div className='logo'>byJafaroff</div>
        <ul className='nav-elements'>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section className="hero-section">
        <div className="overlay"></div>
        <div className="hero-content">
          <h2>Build Your Digital Future</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente.</p>
<a href="#about" className="learn-more-button">Learn More</a>
        </div>
      </section>

          <h1>About Us</h1>
      <section className='about-company'  id="about">
        <div>
          <h3>Lorem ipsum dolor sit amet consectetur.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit molestiae cumque similique dignissimos esse vitae veritatis aperiam culpa, repellat possimus? Obcaecati dignissimos molestias numquam quas tempore! Asperiores laudantium delectus tenetur?
          </p>
        </div>
        <div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae adipisci hic vero iure illo, aliquam praesentium quibusdam accusamus doloremque officiis dignissimos odio molestiae minima neque consequuntur repellat fugit odit excepturi eius aperiam earum assumenda nisi suscipit! Obcaecati hic aspernatur, fuga reiciendis vel, ducimus, omnis facere id delectus velit ipsam. Labore.</p>
        </div>

        <img src="https://img.freepik.com/free-photo/portrait-confident-young-businessman-with-his-arms-crossed_23-2148176206.jpg?semt=ais_hybrid&w=740" alt="ceo" />


      </section>

      <section className='service-section' id="services">
        <h1>Our Services</h1>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae.</h3>
        <div className='service-cards'>
          <div className='card'>
            <img src="https://cdn-icons-png.freepik.com/256/17365/17365478.png?semt=ais_hybrid" alt="logo" />
            <p className='service-name'>Web development</p>
            <p className='service-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fugiat, perferendis, voluptates beatae sit, inventore exercitationem repellendus quo fuga tempore unde velit tempora eligendi animi hic dolorem non sed cupiditate.</p>
            <button className='service-button'>Read More -&gt;</button>
          </div>

          <div className='card'>
            <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/ui-ux-design-4132435-3421648.png" alt="" />
            <p className='service-name'>UX/UI design</p>
            <p className='service-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fugiat, perferendis, voluptates beatae sit, inventore exercitationem repellendus quo fuga tempore unde velit tempora eligendi animi hic dolorem non sed cupiditate.</p>
            <button className='service-button'>Read More -&gt;</button>
          </div>

          <div className='card'>
            <img src="https://cdn-icons-png.flaticon.com/512/12196/12196076.png" alt="" />
            <p className='service-name'>SMM</p>
            <p className='service-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fugiat, perferendis, voluptates beatae sit, inventore exercitationem repellendus quo fuga tempore unde velit tempora eligendi animi hic dolorem non sed cupiditate.</p>
            <button className='service-button'>Read More -&gt;</button>
          </div>
        </div>
      </section>


          <h1>Contact with us</h1>
      <section className='contact-us' id="contact">
        <div className='contact-info'>
          <input type="text" placeholder='Enter your name:' />
          <input type="text" placeholder='Enter your email:' />
          <textarea cols={2} rows={5} />
          <button type="submit" className='submit-button'>Submit</button>
        </div>

        <img src="https://static.vecteezy.com/system/resources/thumbnails/019/586/169/small_2x/online-documentation-database-and-process-document-electronic-automation-platform-it-staff-working-with-document-management-system-dms-corporate-business-technology-cognition-on-modern-management-photo.jpg" alt="img" />
      </section>

    <footer className="footer">
  <div className="footer-content">
    <div className="footer-left">
      <h2>byJafaroff</h2>
      <p>Digital solutions that move your business forward.</p>
    </div>
    <div className="footer-links">
      <a href="#home">Home</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>
    </div>
  </div>
  <p className="footer-copy">© {new Date().getFullYear()} byJafaroff. All rights reserved.</p>
</footer>

    </div>)
}

export default LandingPage;