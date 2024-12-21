import React from 'react';

import './navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="left">
                    <img className="logo" src="/logo.png" alt="logo"/>
                    <div className="search">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="search-icon">
                            <path
                                d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
                                stroke="#949796" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M14.0001 14L11.1001 11.1" stroke="#949796" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>
                        <input className="search-input" type="text" placeholder="Search"/>
                    </div>
                </div>

                <div className="right">
                    <div className="pages">
                        <div className="page selected">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.25 6.75L9 1.5L15.75 6.75V15C15.75 15.3978 15.592 15.7794 15.3107 16.0607C15.0294 16.342 14.6478 16.5 14.25 16.5H3.75C3.35218 16.5 2.97064 16.342 2.68934 16.0607C2.40804 15.7794 2.25 15.3978 2.25 15V6.75Z"
                                    stroke="#2DB8A1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6.75 16.5V9H11.25V16.5" stroke="#2DB8A1" strokeWidth="1.5"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="page-name">Home</span>
                        </div>
                        <div className="page">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.75 8.62502C15.7526 9.61492 15.5213 10.5914 15.075 11.475C14.5458 12.5338 13.7323 13.4244 12.7256 14.047C11.7189 14.6696 10.5587 14.9996 9.375 15C8.3851 15.0026 7.40859 14.7713 6.525 14.325L2.25 15.75L3.675 11.475C3.2287 10.5914 2.99742 9.61492 3 8.62502C3.00046 7.44134 3.33046 6.28116 3.95304 5.27443C4.57562 4.26771 5.46619 3.4542 6.525 2.92502C7.40859 2.47872 8.3851 2.24744 9.375 2.25002H9.75C11.3133 2.33627 12.7898 2.99609 13.8969 4.10317C15.0039 5.21024 15.6638 6.68676 15.75 8.25002V8.62502Z"
                                    stroke="#949796" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="page-name">Messaging</span>
                        </div>
                        <div className="page">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.5 6C13.5 4.80653 13.0259 3.66193 12.182 2.81802C11.3381 1.97411 10.1935 1.5 9 1.5C7.80653 1.5 6.66193 1.97411 5.81802 2.81802C4.97411 3.66193 4.5 4.80653 4.5 6C4.5 11.25 2.25 12.75 2.25 12.75H15.75C15.75 12.75 13.5 11.25 13.5 6Z"
                                    stroke="#949796" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M10.2974 15.75C10.1655 15.9773 9.97627 16.166 9.74856 16.2971C9.52085 16.4283 9.26268 16.4973 8.99989 16.4973C8.73711 16.4973 8.47893 16.4283 8.25122 16.2971C8.02351 16.166 7.83425 15.9773 7.70239 15.75"
                                    stroke="#949796" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                            <span className="page-name">Notifications</span>
                        </div>
                    </div>
                    <img className="profile-picture" src="/profile.png" alt="profile"/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;