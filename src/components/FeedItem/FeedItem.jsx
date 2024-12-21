import React from 'react';

import './feedItem.css'
import ItemDescription from "../ItemDescription/ItemDescription";

const FeedItem = ({ data }) => {
    const [didLike, setDidLike] = React.useState(data.didLike);
    const [likes, setLikes] = React.useState(data.likes);
    const [images, setImages] = React.useState(data.images);
    const feedItemRef = React.useRef(null);

    const sendImpression = async () => {
        await fetch(`https://backend.tedooo.com/?itemId=${data.id}`)
    }

    const toggleLike = () => {
        if (didLike) {
            setLikes(likes - 1);
        } else {
            setLikes(likes + 1);
        }

        setDidLike(!didLike);
    }

    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                sendImpression();
                observer.disconnect();
            }
        }, {
            threshold: 0.5,
        });

        if (feedItemRef.current) {
            observer.observe(feedItemRef.current);
        }

        return () => {
            if (feedItemRef.current) {
                observer.unobserve(feedItemRef.current);
            }
        };
    }, []);
    return (
        <div className="feed-item" ref={feedItemRef}>
            <ItemDescription shopName={data.shopName} avatar={data.avatar} username={data.username} date={data.date}
                             text={data.text}/>
            <div className="images">
                {images[0] && <img className="image" src={images[0]} alt=""/>}
                {images[1] && <img className="image" src={images[1]} alt=""/>}
            </div>
            <div className="stats">
                <div className="stat">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_3_1043)">
                            <path
                                d="M9 0C6.61305 0 4.32387 0.948212 2.63604 2.63604C0.948212 4.32387 0 6.61305 0 9C0 11.3869 0.948212 13.6761 2.63604 15.364C4.32387 17.0518 6.61305 18 9 18C11.3869 18 13.6761 17.0518 15.364 15.364C17.0518 13.6761 18 11.3869 18 9C18 6.61305 17.0518 4.32387 15.364 2.63604C13.6761 0.948212 11.3869 0 9 0V0Z"
                                fill="url(#paint0_linear_3_1043)"/>
                            <path
                                d="M13.6823 8.25525C13.8802 8.39362 14.0625 8.53088 14.0625 9.0135C14.0625 9.49725 13.8049 9.693 13.5293 9.82913C13.6418 10.0125 13.6777 10.2341 13.6294 10.4434C13.5427 10.8304 13.1884 11.1307 12.8734 11.2196C13.0095 11.4379 13.0522 11.6528 12.8903 11.9171C12.6821 12.249 12.501 12.375 11.7 12.375H8.4375C7.326 12.375 6.75 11.7607 6.75 11.25V8.62313C6.75 7.23937 8.40037 6.06375 8.40037 5.10187L8.28113 3.90375C8.2755 3.83063 8.29013 3.65175 8.34637 3.6C8.43638 3.51113 8.685 3.375 9.06075 3.375C9.306 3.375 9.46913 3.42112 9.6615 3.51337C10.3151 3.825 10.485 4.61362 10.485 5.24812C10.485 5.553 10.0193 6.4665 9.95625 6.78262C9.95625 6.78262 10.9316 6.56662 12.0701 6.55875C13.2638 6.552 14.0377 6.7725 14.0377 7.506C14.0377 7.79962 13.7914 8.09437 13.6823 8.25525ZM4.05 7.875H4.95C5.12902 7.875 5.30071 7.94612 5.4273 8.0727C5.55388 8.19929 5.625 8.37098 5.625 8.55V12.825C5.625 13.004 5.55388 13.1757 5.4273 13.3023C5.30071 13.4289 5.12902 13.5 4.95 13.5H4.05C3.87098 13.5 3.69929 13.4289 3.5727 13.3023C3.44612 13.1757 3.375 13.004 3.375 12.825V8.55C3.375 8.37098 3.44612 8.19929 3.5727 8.0727C3.69929 7.94612 3.87098 7.875 4.05 7.875Z"
                                fill="white"/>
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_3_1043" x1="-2.7" y1="-2.025" x2="25.116" y2="22.9894"
                                            gradientUnits="userSpaceOnUse">
                                <stop offset="0.03125" stopColor="#96DCD0"/>
                                <stop offset="0.0520833" stopColor="#6CCEBD"/>
                                <stop offset="0.333333" stopColor="#2DB8A1"/>
                                <stop offset="0.697917" stopColor="#28A38F"/>
                                <stop offset="1" stopColor="#208171"/>
                            </linearGradient>
                            <clipPath id="clip0_3_1043">
                                <rect width="18" height="18" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <span>{likes} Likes</span>
                </div>
                <span className="stat">{data.comments} Comments</span>
            </div>
            <hr className="line"/>
            <div className="actions">
                <button className={`action ${didLike && 'liked'}`} onClick={toggleLike}>
                    <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M8.23598 4.27155C8.32626 4.06841 8.52771 3.9375 8.75 3.9375C9.49592 3.9375 10.2113 4.23382 10.7387 4.76126C11.2662 5.28871 11.5625 6.00408 11.5625 6.75V9.1875H15.2421C15.5399 9.18462 15.8348 9.24628 16.1065 9.36823C16.3793 9.49065 16.6222 9.67092 16.8184 9.89653C17.0145 10.1222 17.1593 10.3877 17.2427 10.6749C17.3261 10.962 17.346 11.2638 17.3011 11.5594L16.2661 18.3093C16.1915 18.8011 15.9417 19.2495 15.5627 19.5716C15.1846 19.893 14.7033 20.0673 14.2071 20.0625H3.5C2.95299 20.0625 2.42839 19.8452 2.04159 19.4584C1.6548 19.0716 1.4375 18.547 1.4375 18V12.75C1.4375 12.203 1.6548 11.6784 2.04159 11.2916C2.42839 10.9048 2.95299 10.6875 3.5 10.6875H5.38445L8.23598 4.27155ZM6.3125 11.3694L9.09931 5.09904C9.41658 5.16618 9.71043 5.32394 9.94324 5.55676C10.2597 5.87322 10.4375 6.30245 10.4375 6.75V9.75C10.4375 10.0607 10.6893 10.3125 11 10.3125H15.245L15.2514 10.3125C15.3873 10.3109 15.5219 10.3389 15.6459 10.3946C15.7698 10.4502 15.8803 10.5322 15.9694 10.6347C16.0586 10.7373 16.1244 10.858 16.1623 10.9885C16.2002 11.1189 16.2093 11.256 16.1889 11.3903L15.1539 18.1407C15.12 18.3642 15.0064 18.568 14.8341 18.7144C14.6618 18.8609 14.4424 18.9401 14.2164 18.9375L6.3125 18.9375V11.3694ZM5.1875 18.9375V11.8125H3.5C3.25136 11.8125 3.0129 11.9113 2.83709 12.0871C2.66127 12.2629 2.5625 12.5014 2.5625 12.75V18C2.5625 18.2486 2.66127 18.4871 2.83709 18.6629C3.0129 18.8387 3.25136 18.9375 3.5 18.9375H5.1875Z"
                              fill={`${didLike ? "#0A66C2" : "#484E4C"}`}/>
                    </svg>
                    Like
                </button>
                <button className="action">
                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M4.25 2.8125C4.00136 2.8125 3.7629 2.91127 3.58709 3.08709C3.41127 3.2629 3.3125 3.50136 3.3125 3.75V14.392L5.35225 12.3523C5.45774 12.2468 5.60082 12.1875 5.75 12.1875H14.75C14.9986 12.1875 15.2371 12.0887 15.4129 11.9129C15.5887 11.7371 15.6875 11.4986 15.6875 11.25V3.75C15.6875 3.50136 15.5887 3.2629 15.4129 3.08709C15.2371 2.91127 14.9986 2.8125 14.75 2.8125H4.25ZM2.79159 2.29159C3.17839 1.9048 3.70299 1.6875 4.25 1.6875H14.75C15.297 1.6875 15.8216 1.9048 16.2084 2.29159C16.5952 2.67839 16.8125 3.20299 16.8125 3.75V11.25C16.8125 11.797 16.5952 12.3216 16.2084 12.7084C15.8216 13.0952 15.297 13.3125 14.75 13.3125H5.983L3.14775 16.1477C2.98687 16.3086 2.74493 16.3567 2.53474 16.2697C2.32455 16.1826 2.1875 15.9775 2.1875 15.75V3.75C2.1875 3.20299 2.4048 2.67839 2.79159 2.29159Z"
                              fill="#737877"/>
                    </svg>
                    Comment
                </button>
            </div>
        </div>
    );
};

export default FeedItem;