import { useEffect, type RefObject } from "react";

function useTimelineProgress(timelineRef: RefObject<HTMLOListElement | null>) {
  useEffect(() => {
    let frameId: number | null = null;

    const updateProgress = () => {
      frameId = null;
      const timeline = timelineRef.current;

      if (!timeline) return;

      const { top, height } = timeline.getBoundingClientRect();
      const progress = Math.min(
        1,
        Math.max(0, (window.innerHeight * 0.65 - top) / height),
      );

      timeline.style.setProperty("--timeline-progress", String(progress));
    };

    const scheduleUpdate = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [timelineRef]);
}

export default useTimelineProgress;
