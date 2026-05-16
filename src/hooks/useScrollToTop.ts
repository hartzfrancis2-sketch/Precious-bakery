import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Hook to scroll to a specific position when the route changes.
 * @param position - The scroll position to scroll to (default: 0, 0)
 * @param behavior - The scroll behavior (default: "auto" for instant, use "smooth" for smooth scrolling)
 *
 * Usage:
 * - useScrollToTop() - scrolls to top instantly on route change
 * - useScrollToTop({ x: 0, y: 100 }, "smooth") - scrolls to specific position smoothly
 */
export function useScrollToTop(
  position: { x: number; y: number } = { x: 0, y: 0 },
  behavior: ScrollBehavior = "auto",
) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: position.y,
      left: position.x,
      behavior: behavior,
    });
  }, [pathname, position.x, position.y, behavior]);
}

export default useScrollToTop;
