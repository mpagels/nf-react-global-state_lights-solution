import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  handleToggleAllOff,
  handleToggleAllOn,
}) {
  return (
    <StyledQuickActions>
      <Button type="button" onClick={handleToggleAllOff}>
        Turn all lights off
      </Button>
      <Button type="button" onClick={handleToggleAllOn}>
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
