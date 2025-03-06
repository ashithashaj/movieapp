import React from "react";
export default function Footer()
    {
     return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <img src="/logo.jpg" className="footer-logo" alt="" />
                    <p>Sharing Is Caring.</p>
                </div>
                <div className="footer-section">
                    <h3>Contact</h3>
                    <p>Email: hdtoday@example.com</p>
                    <p>Phone: +123 456 7890</p>
                </div>
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="#"><img src="/facebook.svg" alt="" /></a>
                        <a href="#"><img src="/instagram.svg" alt="" /></a>
                        <a href="#"><img src="/linkedIN.svg" alt="" /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
            </div>
        </footer>
     )   
    }
