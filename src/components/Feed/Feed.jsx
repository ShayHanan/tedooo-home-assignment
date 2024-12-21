import React from 'react';

import './feed.css'
import FeedItem from "../FeedItem/FeedItem";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";

const ITEMS_PER_CALL = 6;

const Feed = () => {
    const [feedItems, setFeedItems] = React.useState([]);
    const [skip, setSkip] = React.useState(0);
    const [hasMore, setHasMore] = React.useState(true);
    const [isLoading, setIsLoading] = React.useState(false);

    const loadFeedItems = React.useCallback(async () => {
        if (!hasMore) {
            return;
        }
        try {
            setIsLoading(true);
            const res = await fetch(`https://backend.tedooo.com/hw/feed.json?skip=${skip}`);
            setIsLoading(false);
            const items = await res.json();
            setFeedItems((prevItems) => [...prevItems, ...items.data]);
            setSkip(skip + ITEMS_PER_CALL);
            setHasMore(items.hasMore);
        } catch (error) {
            setIsLoading(false);
            console.error(error);
        }
    }, [hasMore, skip]);

    useInfiniteScroll(loadFeedItems, hasMore);


    React.useEffect(() => {
        loadFeedItems();
    }, []);


    return (
        <div className="feed">
            {feedItems.map((item) => (<FeedItem data={item} key={item.id}/>))}
            {isLoading && <div className="loader"></div>}
        </div>
    );
};

export default Feed;