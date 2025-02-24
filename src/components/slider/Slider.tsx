import { useRef, useLayoutEffect, useCallback } from "react";
import { useSlider } from "../../hooks/useSlider";
import { SliderProps } from "./types";
import { NavigationButton } from "./components/NavigationButton";
import {
  ParentContainer,
  SliderContainer,
  SliderWrapper,
} from "./Slider.styles";

export const Slider = <T,>({
  items,
  renderItem,
  moveBy = "item",
  moveAmount = 200,
  orientation = "horizontal",
  gap = 6,
  shouldShowOneItem = false,
}: SliderProps<T>) => {
  const itemSizeRef = useRef<number>(100);
  const firstItemRef = useRef<HTMLDivElement>(null);

  const { containerRef, position, canScrollLeft, canScrollRight, moveSlider } =
    useSlider({
      moveBy,
      moveAmount,
      itemSize: itemSizeRef.current,
      orientation,
      itemsLength: items.length,
    });

  const computeItemSize = useCallback(() => {
    if (!firstItemRef.current) return;

    const size =
      orientation === "horizontal"
        ? firstItemRef.current.clientWidth
        : firstItemRef.current.clientHeight;

    itemSizeRef.current = size + gap;
  }, [orientation, gap]);

  useLayoutEffect(() => {
    computeItemSize();
  }, [items.length, orientation, computeItemSize]);

  const handleMove = useCallback(
    (direction: "prev" | "next") => moveSlider(direction),
    [moveSlider]
  );

  return (
    <ParentContainer
      orientation={orientation}
      size={itemSizeRef.current}
      shouldShowOneItem={shouldShowOneItem}
    >
      <NavigationButton
        direction="prev"
        onClick={() => handleMove("prev")}
        orientation={orientation}
        isVisible={canScrollLeft}
      />

      <SliderContainer ref={containerRef} orientation={orientation}>
        <SliderWrapper gap={gap} translate={position} orientation={orientation}>
          {items.map((item, index) => (
            <div key={index} ref={index === 0 ? firstItemRef : undefined}>
              {renderItem(item)}
            </div>
          ))}
        </SliderWrapper>
      </SliderContainer>

      <NavigationButton
        direction="next"
        onClick={() => handleMove("next")}
        orientation={orientation}
        isVisible={canScrollRight}
      />
    </ParentContainer>
  );
};
