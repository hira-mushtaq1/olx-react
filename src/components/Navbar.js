import React from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import Searchbar from "./Searchbar";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
function Navbar({ func, data }) {
  return (
    <div>
      <Wrapper>
        <svg height="35" viewBox="0 0 36.289 20.768" alt="Olx logo">
          <path d="M18.9 20.77V0h4.93v20.77zM0 10.39a8.56 8.56 0 1 1 8.56 8.56A8.56 8.56 0 0 1 0 10.4zm5.97-.01a2.6 2.6 0 1 0 2.6-2.6 2.6 2.6 0 0 0-2.6 2.6zm27 5.2l-1.88-1.87-1.87 1.88H25.9V12.3l1.9-1.9-1.9-1.89V5.18h3.27l1.92 1.92 1.93-1.92h3.27v3.33l-1.9 1.9 1.9 1.9v3.27z"></path>
        </svg>

        <div>
          <Dropdown />
        </div>

        <div>
          <Searchbar />
        </div>
      </Wrapper>
    </div>
  );
}

export default Navbar;
