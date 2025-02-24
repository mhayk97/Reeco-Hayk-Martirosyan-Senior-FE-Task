import React from "react";
import { StyledChip } from "./Chip.styles";

interface ChipProps {
  name: string;
  bgColor?: string;
  size?: number;
}

export const Chip: React.FC<ChipProps> = React.memo(
  ({ name, bgColor, size = 100 }) => (
    <StyledChip bgColor={bgColor} size={size}>
      {name}
    </StyledChip>
  )
);
