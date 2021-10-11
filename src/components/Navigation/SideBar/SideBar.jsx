import { useState } from 'react';
import { ToggleButton, StyledSideBar, StyledCloseNav } from './styles'

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <ToggleButton onClick={() => setIsOpen(!isOpen)} />
      <StyledSideBar isOpen={isOpen}>
        <StyledCloseNav onClick={() => setIsOpen(!isOpen)}>
          <span>X</span>
          <div>Section</div>
        </StyledCloseNav>
      </StyledSideBar>
    </>
  )
}
