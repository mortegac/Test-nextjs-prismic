import React from "react";
import { Default, OneCta, TwoCtas, PartnerBanner, Dandelion } from "./variants";

export const HeroSlice = ({ slice }) => {
  const { variation } = slice;

  const typeOfComponents = {
    ["default"]: Default,
    ["oneCta"]: OneCta,
    ["twoCtas"]: TwoCtas,
    ["partnerBanner"]: PartnerBanner,
    ["dandelion"]: Dandelion,
  };

  const TypeOfVariants = typeOfComponents[variation];

  return <TypeOfVariants {...slice} />;
};

export default HeroSlice;
