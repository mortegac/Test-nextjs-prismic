import { SliceFactory } from "../../../../commonComponents/Containers/";
import {
  Description,
  PartnerBannerDiv,
  PartnerBannerContainer,
  PartnerLogo,
} from "./partnerBannerStyles";
import { RichText } from "prismic-reactjs";

const Base = (slice) => {
  const { description, image, title, partnerLogo, partnerText } = slice.primary;
  return (
    <div style={{ display: "flex" }}>
      <Description>
        {title[0]?.text ? RichText.render(title) : <h1>Title</h1>}
        {description[0]?.text ? (
          RichText.render(description)
        ) : (
          <p>Description</p>
        )}
        <PartnerBannerDiv>
          <PartnerBannerContainer>
            <PartnerLogo
              src={partnerLogo.url}
              alt={partnerLogo.alt || "Logo of partner"}
            />
            {partnerText[0]?.text ? (
              RichText.render(partnerText)
            ) : (
              <p>Partner text</p>
            )}
          </PartnerBannerContainer>
        </PartnerBannerDiv>
      </Description>
      <img src={image.url} alt={image.alt || "Image"} />
    </div>
  );
};

const PartnerBanner = SliceFactory(Base);
export { PartnerBanner, Base };
