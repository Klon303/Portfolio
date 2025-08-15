import { MyComponentProps } from "../../Header";
import { S } from "./../HeaderMenu_Styles";

export const Menu: React.FC<MyComponentProps> = (props: MyComponentProps) => {
  return (
    <ul>
      {props.items.map((s, index) => {
        return (
          <S.MenuItem key={index}>
            <S.NavLink
              to={s.href}
              smooth={true}
              activeClass="active"
              spy={true}
            >
              {s.title}
              <S.Mask>
                <span>{s.title}</span>
              </S.Mask>
              <S.Mask>
                <span>{s.title}</span>
              </S.Mask>
            </S.NavLink>
          </S.MenuItem>
        );
      })}
    </ul>
  );
};
