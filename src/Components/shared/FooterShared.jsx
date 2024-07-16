import React from "react";
import "./styles/FooterShared.css"

const FooterShared = () => {
    return (
        <footer className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                <div className="sb__footer-links-div">
                     <h4>About Us</h4>
                     <p>Welcome to TravelingApp, your home away from home. We provide luxurious stays with unparalleled service to ensure your comfort and satisfaction.</p>
                     
                 </div>
                 <div className="sb__footer-links-div">
                     <h4>Services</h4>
                     <ul>
                         <li>Room Service</li>
                         <li>Spa and Wellness</li>
                         <li>Conference Rooms</li>
                         <li>Free Wi-Fi</li>
                     </ul>
                 </div>
                 <div className="sb__footer-links-div">
                     <h4>Contact Us</h4>
                     <p>Email: info@TravelingApp.com</p>
                     <p>Phone: +123 456 7890</p>
                     <p>Address: 123 TravelingApp St, Beverly Hills, CA</p>
                    </div>

                    <div className="sb__footer-links-div">
                        <h4>Coming soon on</h4>
                        <div className="socialmedia">
                            <p><img src="{fb}" alt="" /></p>
                            <p><img src="{twitter}" alt="" /></p>
                            <p><img src="{linkedin}" alt="" /></p>
                            <p><img src="{fb}" alt="" /></p>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default FooterShared