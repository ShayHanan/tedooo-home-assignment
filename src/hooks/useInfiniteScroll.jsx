import { useEffect, useState } from 'react';
import { debounce } from 'lodash';

const useInfiniteScroll = (scrollHandler, moreAvailable) => {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const handleScroll = debounce(async () => {
			if (loading || !moreAvailable) {
				return;
			}
			const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

			if (scrollTop + clientHeight >= scrollHeight - 5) {
				setLoading(true);

				try {
					await scrollHandler();
				} finally {
					setLoading(false);
				}
			}
		}, 500);

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [scrollHandler, moreAvailable, loading]);

	return loading;
};

export default useInfiniteScroll;
