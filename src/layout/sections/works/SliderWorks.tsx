import AliceCarousel from "react-alice-carousel";
import { workData } from "./consts";
import { Work } from "./work/Work";
import { S } from "./Works_Styles";

export const items = workData.map((wo) => {
  return (
    <Work
      title={wo.title}
      text={wo.text}
      src={wo.src}
      type={wo.type}
      key={wo.id}
      hrefCode={wo.hrefCode}
      hrefLive={wo.hrefLive}
    />
  );
});

export const SliderWorks: React.FC = () => {
  return (
    <S.Slider>
      <AliceCarousel mouseTracking items={items} />;
    </S.Slider>
  );
};
