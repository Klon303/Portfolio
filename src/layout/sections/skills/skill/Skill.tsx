import { S } from "./../Skills_Styles";
import { Icon } from "../../../../components/icon/Icon";
import { FlexWrapper } from "../../../../components/FlexWrapper";

type SkillPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
  title?: string;
  description?: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <S.Skill>
      <FlexWrapper direction="column" align="center">
        <S.IconWrapper>
          <Icon
            iconId={props.iconId}
            width={props.width}
            height={props.height}
            viewBox={props.viewBox}
          />
        </S.IconWrapper>
        <S.SkillText />
      </FlexWrapper>
    </S.Skill>
  );
};
