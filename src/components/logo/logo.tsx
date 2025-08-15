import styled from "styled-components";
import IconLogo from "./../../assets/images/Icon.svg";
import { animateScroll as scroll } from "react-scroll";
import { useCallback } from "react";

export const Logo: React.FC = (props: any) => {
  const onFollowLink = useCallback(() => {
    scroll.scrollToTop();
  }, []);
  return (
    <Link onClick={onFollowLink}>
      <img src={IconLogo} alt="Logo" />
    </Link>
  );
};

const Link = styled.a``;
