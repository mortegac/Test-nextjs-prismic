import { SliceFactory } from "../../../../commonComponents/Containers/";
import { Description, CtaContainer } from "../oneCta/oneCtaStyles";
import Button from "../../../../commonComponents/Buttons/ButtonBase";
import { RichText } from "prismic-reactjs";

const Base = (slice) => {
  const { description, image, title, primaryCtaText } = slice.primary;
  return (
    <div style={{ display: "flex" }}>
      <Description>
        {title[0]?.text ? RichText.render(title) : <h1>Title</h1>}
        {description[0]?.text ? (
          RichText.render(description)
        ) : (
          <p>Description</p>
        )}
        <CtaContainer>
          <Button
            type="primary"
            innerText={primaryCtaText[0]?.text || "Call to action"}
          ></Button>
        </CtaContainer>
      </Description>
      <img src={image.url} alt={image.alt || "Image"} />
    </div>
  );
};

const OneCta = SliceFactory(Base);
export { OneCta, Base };
