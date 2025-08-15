import { S } from "./../Works_Styles";
import { Link } from "./../../../../components/Link";

export type StatusPropsType = "all" | "react" | "spa" | "landing page";

type TabMenuPropsType = {
  TabsItems: Array<{
    status: StatusPropsType;
    title: string;
  }>;
  currentFilterStatus: string;
  changeFilterStatus: (value: StatusPropsType) => void;
};

export const TabMenu = (props: TabMenuPropsType) => {
  return (
    <S.TabMenu>
      <ul>
        {props.TabsItems.map((item, index: number) => {
          return (
            <S.ListItem key={index}>
              <Link
                active={props.currentFilterStatus === item.status}
                as={"button"}
                onClick={() => {
                  props.changeFilterStatus(item.status);
                }}
              >
                {item.title}
              </Link>
            </S.ListItem>
          );
        })}
      </ul>
    </S.TabMenu>
  );
};
