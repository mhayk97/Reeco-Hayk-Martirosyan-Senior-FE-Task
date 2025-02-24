export interface SliderProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  moveBy?: "pixels" | "item";
  moveAmount?: number;
  orientation?: "horizontal" | "vertical";
  gap?: number;
  width?: number;
  height?: number;
  shouldShowOneItem?: boolean;
}
