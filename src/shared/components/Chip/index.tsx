import StyledText from "@shared-components/StyledText";
import React from "react";
import styled from "styled-components/native";

type ChipProps = {
  innerText: string;
  handlePress: () => void;
  isFocus?: boolean;
  defaultColor?: string;
  focusColor?: string;
};

const Chip = ({ innerText, handlePress }: ChipProps) => {
  return (
    <Container onPress={handlePress}>
      <StyledText>{innerText}</StyledText>
    </Container>
  );
};

const Container = styled.TouchableWithoutFeedback({});

export default Chip;
