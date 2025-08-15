import { S } from "./Works_Styles";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import { StatusPropsType, TabMenu } from "./tabMenu/TabMenu";
import { Work } from "./work/Work";
import { Container } from "../../../components/Container";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "react-alice-carousel/lib/alice-carousel.css";
import "./../../../styles/Slider.css";
import { workData } from "./consts";
import { SliderWorks } from "./SliderWorks";

const tabsItems: Array<{
  status: StatusPropsType;
  title: string;
}> = [
  {
    title: "ALL",
    status: "all",
  },

  {
    title: "LANDING PAGE",
    status: "landing page",
  },

  {
    title: "REACT",
    status: "react",
  },

  {
    title: "SPA",
    status: "spa",
  },
];

export const Works: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 823;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // Tab menu
  const [currentFilterStatus, setCurrentFilterStatus] = useState("all");
  let filteredWorks = workData;

  if (currentFilterStatus === "landing page") {
    filteredWorks = workData.filter((work) => work.type === "landing page");
  }
  if (currentFilterStatus === "react") {
    filteredWorks = workData.filter((work) => work.type === "react");
  }
  if (currentFilterStatus === "spa") {
    filteredWorks = workData.filter((work) => work.type === "spa");
  }

  function changeFilterStatus(value: StatusPropsType) {
    setCurrentFilterStatus(value);
  }

  return (
    <S.Works id="projects">
      <Container>
        <SectionTitle
          sectionTitle="Projects"
          description="Things I’ve built so far"
        />
        <TabMenu
          TabsItems={tabsItems}
          currentFilterStatus={currentFilterStatus}
          changeFilterStatus={changeFilterStatus}
        />
        {width > breakpoint ? (
          <FlexWrapper justify="space-between" align="flex-start" wrap="wrap">
            <AnimatePresence>
              {filteredWorks.map((w) => {
                return (
                  <motion.div
                    style={{
                      width: "373px",
                      flexGrow: 1,
                      maxWidth: "540px",
                    }}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key={w.id}
                  >
                    <Work
                      title={w.title}
                      text={w.text}
                      src={w.src}
                      type={w.type}
                      key={w.id}
                      hrefCode={w.hrefCode}
                      hrefLive={w.hrefLive}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </FlexWrapper>
        ) : (
          <SliderWorks />
        )}
      </Container>
    </S.Works>
  );
};
