import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { DesktopMenu } from "./headerMenu/DesktopMenu/DesktopMenu";
import { SocialIcon } from "../../components/socialIcon/SocialIkon";
import { MobileMenu } from "./headerMenu/mobileMenu/MobileMenu";
import { S } from "./Header_Styles";
import React from "react";
import { Items } from "./consts";

export interface MyObject {
  title: string;
  href: string;
}

export interface MyComponentProps {
  items: MyObject[];
}

export const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return (
    <S.Header>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Logo />
          <div className="wrapper">
            {width < breakpoint ? (
              <MobileMenu items={Items} />
            ) : (
              <DesktopMenu items={Items} />
            )}
            <SocialIcon />
          </div>
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};
