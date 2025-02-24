import React from "react";
import { CATEGORIES, PRODUCTS } from "../../constants/constants";
import { Chip, ProductCard, Slider } from "../../components";
import {
  HomeContainer,
  Section,
  SectionTitle,
  SliderWrapper,
} from "./Home.styles";

export const Home: React.FC = () => (
  <HomeContainer>
    <Section>
      <SectionTitle>Product Slider With One Element Per Slide</SectionTitle>
      <SliderWrapper>
        <Slider
          shouldShowOneItem
          orientation="horizontal"
          moveBy="item"
          items={PRODUCTS}
          renderItem={(item) => <ProductCard {...item} />}
        />
      </SliderWrapper>
    </Section>
    <Section>
      <SectionTitle>Product Slider</SectionTitle>
      <SliderWrapper>
        <Slider
          orientation="horizontal"
          moveBy="item"
          items={PRODUCTS}
          renderItem={(item) => <ProductCard {...item} />}
        />
      </SliderWrapper>
    </Section>

    <Section>
      <SectionTitle>Category Slider with move by pixels (50)</SectionTitle>
      <SliderWrapper>
        <Slider
          orientation="horizontal"
          moveBy="pixels"
          items={CATEGORIES}
          renderItem={(name) => <Chip name={name} />}
          moveAmount={50}
        />
      </SliderWrapper>
    </Section>
    <Section>
      <SectionTitle>
        Product Slider Vertical with one item per slide
      </SectionTitle>
      <SliderWrapper>
        <Slider
          shouldShowOneItem
          orientation="vertical"
          moveBy="item"
          items={PRODUCTS}
          renderItem={(item) => <ProductCard {...item} />}
        />
      </SliderWrapper>
    </Section>
    <Section>
      <SectionTitle>Product Slider Vertical</SectionTitle>
      <SliderWrapper>
        <Slider
          orientation="vertical"
          moveBy="item"
          items={PRODUCTS}
          renderItem={(item) => <ProductCard {...item} />}
        />
      </SliderWrapper>
    </Section>
  </HomeContainer>
);
