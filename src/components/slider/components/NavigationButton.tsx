import { ArrowIcon } from "../../icons";
import { ArrowButton } from "./NavigationButton.styles";

export const NavigationButton: React.FC<{
  direction: "prev" | "next";
  onClick: () => void;
  orientation: "horizontal" | "vertical";
  isVisible: boolean;
}> = ({ direction, onClick, orientation, isVisible }) => {
  if (!isVisible) return null;

  return (
    <ArrowButton
      orientation={orientation}
      direction={direction}
      onClick={onClick}
    >
      <ArrowIcon direction={direction} orientation={orientation} />
    </ArrowButton>
  );
};
