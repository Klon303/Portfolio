import { S } from "./../HeaderMenu_Styles";
import { Menu } from "../menu/Menu";
import { MyComponentProps } from "../../Header";

export const DesktopMenu: React.FC<MyComponentProps> = (
  props: MyComponentProps
) => {
  return (
    <S.DesktopMenu>
      <Menu items={props.items} />
    </S.DesktopMenu>
  );
};
