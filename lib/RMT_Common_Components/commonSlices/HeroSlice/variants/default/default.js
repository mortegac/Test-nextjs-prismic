import { SliceFactory } from "../../../../commonComponents/Containers/";
import { Description } from "../default/defaultStyles";
import { RichText } from "prismic-reactjs";

const Base = (slice) => {
  const { description, image, title } = slice.primary;
  return (
    <div style={{ display: "flex" }}>
      <Description>
        {title[0]?.text ? RichText.render(title) : <h1>Title</h1>}
        {description[0]?.text ? (
          RichText.render(description)
        ) : (
          <p>Description</p>
        )}
      </Description>
      <img src={image.url} alt={image.alt || "Image"} />
    </div>
  );
};

const Default = SliceFactory(Base);
export { Default, Base };
