import { S } from "./Footer_Styles";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Logo } from "../../components/logo/Logo";
import { DesktopMenu } from "./../header/headerMenu/DesktopMenu/DesktopMenu";
import { SocialIcon } from "../../components/socialIcon/SocialIkon";
import { Container } from "../../components/Container";
import { Accent } from "../../components/accent";
import { Items } from "./consts";

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Container>
        <FlexWrapper justify="space-between" align="center" direction="row">
          <Logo />
          <div className="wrapper">
            <S.NumberPhone href="tel:+375336546407">
              +375336546407
            </S.NumberPhone>
            <S.Name>Igor Maer</S.Name>
            <SocialIcon />
          </div>
        </FlexWrapper>
        <FlexWrapper justify="center" align="end" wrap="wrap">
          <DesktopMenu items={Items} />
          <S.Copyright>
            @ 2025 Designed and built by <Accent>igor Maer</Accent> with{" "}
            <Accent>Love</Accent> & <Accent>coca-cola</Accent>.
          </S.Copyright>
        </FlexWrapper>
      </Container>
    </S.Footer>
  );
};
