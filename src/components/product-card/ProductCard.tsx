import React from "react";
import { ProductProps } from "./types";
import { Card, Content, Description, Image, Title } from "./ProductCard.styles";

export const ProductCard: React.FC<ProductProps> = React.memo(
  ({ name = "Product image", description, image }) => {
    return (
      <Card>
        <Image src={image} alt={name} />
        <Content>
          <Title>{name}</Title>
          <Description>{description}</Description>
        </Content>
      </Card>
    );
  }
);
