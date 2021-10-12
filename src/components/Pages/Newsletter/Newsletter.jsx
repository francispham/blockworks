import { StyledHeader, StyledMain, StyledContainer, StyledFormContainer, StyledImageContainer, StyledImage  } from './styles'

function Newsletter() {
  return (
    <div>
      <StyledHeader>
        <h1>Newsletter</h1>
      </StyledHeader>
      <StyledMain>
        <StyledContainer>
          <StyledFormContainer>
            <h2>Blockworks Daily Newsletter</h2>
            <h3>
              Get the daily newsletter that helps thousands of investors understand the markets.
            </h3>
            <div>
              <form>
                <input type="email" placeholder="Email Address" />
                <button>Subscribe</button>
              </form>
            </div>
            <div>
              <h4>
                OUR READERS INCLUDE PROFESSIONALS FROM:
              </h4>
              <div>Sponsor List</div>
            </div>
          </StyledFormContainer>
          <StyledImageContainer>
            <StyledImage src='https://blockworks.co/wp-content/uploads/2021/01/Blockworks_Newsletter_2-1024x702.jpg' alt='newsletter' />
          </StyledImageContainer>
        </StyledContainer>
      </StyledMain>
    </div>
  )
}

export default Newsletter
