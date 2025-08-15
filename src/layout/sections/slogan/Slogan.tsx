import { S } from "./Slogan_Styles";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Slogan: React.FC = () => {
  return (
    <S.Slogan>
      <Container>
        <FlexWrapper direction="column" align="center">
          <S.SloganTitle>Ready for orders and offers</S.SloganTitle>
          <S.ButtonWrapper>
            <Button>igor.son303@yandex.by</Button>
          </S.ButtonWrapper>
        </FlexWrapper>
      </Container>
    </S.Slogan>
  );
};
