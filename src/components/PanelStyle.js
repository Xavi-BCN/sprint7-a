import PanelStyle from "styled-components";

export const StylPanel = PanelStyle.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: 4px solid blue;
  border-radius: 10px;
  padding: 30px 5px;
  width: 450px;
`;
