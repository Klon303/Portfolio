import { S } from "./../HeaderMenu_Styles";
import { SocialIcon } from "../../../../components/socialIcon/SocialIkon";
import { Menu } from "../menu/Menu";
import { useState } from "react";
import { MyComponentProps } from "../../Header";

export const MobileMenu: React.FC<MyComponentProps> = (
  props: MyComponentProps
) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const onBurgerDtnClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  return (
    <S.MobileMenu>
      <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerDtnClick}>
        <span></span>
      </S.BurgerButton>
      <S.MobileMenuPopup
        isOpen={menuIsOpen}
        onClick={() => {
          setMenuIsOpen(false);
        }}
      >
        <Menu items={props.items} />
        <SocialIcon />
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};
