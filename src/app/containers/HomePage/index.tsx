import React from "react";
import { Navbar } from "src/app/components/navbar";
import styled from "styled-components";
import tw from "twin.macro";
import { TopSection } from "./topSection";

const PageContainer = styled.div`
  ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}
`;

export function HomePage() {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
    </PageContainer>
  );
}
