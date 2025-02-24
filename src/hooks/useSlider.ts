import {
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
  useCallback,
} from "react";

interface UseSliderProps {
  moveBy?: "pixels" | "item";
  moveAmount?: number;
  itemSize?: number;
  orientation?: "horizontal" | "vertical";
  itemsLength: number;
}

export const useSlider = ({
  moveBy = "item",
  moveAmount = 200,
  itemSize = 100,
  orientation = "horizontal",
  itemsLength,
}: UseSliderProps) => {
  const [position, setPosition] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const getSliderMetrics = () => {
    const container = containerRef.current;
    if (!container) return { containerSize: 0, maxScroll: 0 };

    const containerSize =
      orientation === "horizontal"
        ? container.clientWidth
        : container.clientHeight;
    const maxScroll =
      orientation === "horizontal"
        ? container.scrollWidth
        : itemSize * itemsLength;

    return { containerSize, maxScroll };
  };

  useLayoutEffect(() => {
    const { containerSize, maxScroll } = getSliderMetrics();
    setPosition((prev) =>
      Math.min(0, Math.max(prev, -(maxScroll - containerSize)))
    );
  }, [itemsLength, orientation]);

  useEffect(() => {
    const { containerSize, maxScroll } = getSliderMetrics();
    setCanScrollLeft(position < 0);
    setCanScrollRight(Math.abs(position) < maxScroll - containerSize);
  }, [position, itemsLength, orientation]);

  const moveSlider = useCallback(
    (direction: "prev" | "next") => {
      const { containerSize, maxScroll } = getSliderMetrics();
      if (!containerRef.current) return;
      setPosition((prev) => {
        let updatedPosition = prev;

        if (moveBy === "pixels") {
          updatedPosition += direction === "next" ? -moveAmount : moveAmount;
        } else {
          updatedPosition += direction === "next" ? -itemSize : itemSize;
        }

        const minScroll = -(maxScroll - containerSize);
        updatedPosition = Math.max(updatedPosition, minScroll);
        updatedPosition = Math.min(updatedPosition, 0);

        return updatedPosition;
      });
    },
    [moveBy, moveAmount, itemSize, orientation]
  );

  return { containerRef, position, canScrollLeft, canScrollRight, moveSlider };
};
