import { S } from "./../Works_Styles";
import { Link } from "../../../../components/Link";
import { Button } from "../../../../components/Button";

type WorkPropsType = {
  title: string;
  text: string;
  src: string;
  type: string;
  hrefCode: string;
  hrefLive: string;
};

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
  const handleClick = () => {
    
  }
  return (
    <S.Work>
      <S.ImageWrapper>
        <S.Image src={props.src} alt="" />
        <a href={props.hrefLive}>
          <Button onClick={handleClick}>view project</Button>
        </a>
      </S.ImageWrapper>
      <S.Description>
        <S.Title>{props.title}</S.Title>
        <S.Text>{props.text}</S.Text>
        <Link active href={props.hrefLive}>
          Live Preview
        </Link>
        <Link href={props.hrefCode}>View Code</Link>
      </S.Description>
    </S.Work>
  );
};
