import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Config from "../../config"
import ContentWrapper from "../styles/ContentWrapper"
import Logo from "./logo"

const { footerLinks } = Config

const StyledFooter = styled.footer`
  width: 100%;
  height: ${({ theme }) => theme.footerHeight};
  background: ${({ theme }) => theme.colors.primary};
  margin-top: 10rem;
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`

const StyledLink = styled(Link)`
  font-size: 0.875rem;
  font-weight: 700;
  color: #fafafa;
  letter-spacing: 1px;
`

const Footer = () => (
  <StyledFooter>
    <StyledContentWrapper>
      <Link to="/" aria-label="home">
        <Logo color="white" size="1.25rem" />
      </Link>
      <div className="footer-links">
        {footerLinks.map(({ name, url }, key) => (
          <StyledLink key={key} to={url}>
            {name}
          </StyledLink>
        ))}
      </div>
    </StyledContentWrapper>
  </StyledFooter>
)

export default Footer
