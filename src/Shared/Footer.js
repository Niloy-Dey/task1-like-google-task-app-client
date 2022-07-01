import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-slate-600 text-neutral-content">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Alert Task</a>
                    <a className="link link-hover">Save Time</a>
                    <a className="link link-hover">Give Routin</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;