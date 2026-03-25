import { useEffect } from 'react';
import { useLocation } from 'react-router';

/**
 * Resets window scroll position on route changes.
 * Place inside the Router tree so it runs on every navigation.
 */
export default function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		// Use 0,0 to ensure we always start at the top of the page.
		window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
	}, [pathname]);

	return null;
}

