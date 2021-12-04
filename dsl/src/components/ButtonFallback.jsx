import React, { useState } from "react";
import styled from "styled-components";

// export default function Button() {
//   return <button>Hello</button>;
// }

// Using Styled-Components

const StyledButtonFallback = styled.button`
  background: blueviolet;
  color: white;
  font-size: 2em;
  width: 100%;
  padding: 18px 20px;
  border-radius: 4px;

  &:hover {
    opacity: 0.8;
  }
`;

const ButtonFallback = () => {
  const [counter, setCounter] = useState(0);
  return (
    <StyledButtonFallback onClick={() => setCounter(counter + 1)}>
      Create Acount {counter}
    </StyledButtonFallback>
  );
};

export default ButtonFallback;
