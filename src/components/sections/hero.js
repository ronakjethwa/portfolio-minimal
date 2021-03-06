import React, { useEffect, useContext } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { motion, useAnimation } from "framer-motion"

import Context from "../../context/"
import ContentWrapper from "../../styles/ContentWrapper"
import Underlining from "../../styles/Underlining"
import Social from "../social"
import SplashScreen from "../splashScreen"
import Theme from "../../styles/Theme"

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 6rem;
    .greetings {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .title {
      font-size: 2rem;
      margin-bottom: 1.5rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        margin-bottom: 0;
      }
    }
    .subtitle {
      font-size: 1.5rem;
      overflow: hidden;
      white-space: nowrap;
      animation: typing 3s steps(100, end);
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      margin-bottom: 4rem;
      .subtitle {
        animation: typing 6s steps(100, end);
      }
    }

    /* The typing effect */
    @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }

    .description {
      font-size: 1.125rem;
      margin-bottom: 2rem;
    }
  }
`

const AnimatedUnderlining = motion.custom(Underlining)

const Hero = ({ content }) => {
  const { frontmatter, body } = content[0].node
  const { isIntroDone } = useContext(Context).state

  // Controls to orchestrate animations of greetings, emoji, social profiles, underlining
  const gControls = useAnimation()
  const eControls = useAnimation()
  const sControls = useAnimation()
  const uControls = useAnimation()

  // Start Animations after the splashScreen sequence is done
  useEffect(() => {
    const pageLoadSequence = async () => {
      if (isIntroDone) {
        eControls.start({
          rotate: [0, -10, 12, -10, 9, 0, 0, 0, 0, 0, 0],
          transition: { duration: 2.5, loop: 3, repeatDelay: 1 },
        })
        await gControls.start({
          opacity: 1,
          y: 0,
          transition: { delay: 0.4 },
        })
        await sControls.start({
          opacity: 1,
          x: 0,
        })
        // Animate underlining to hover state
        await uControls.start({
          boxShadow: `inset 0 -2rem 0 ${Theme.colors.secondary}`,
          transition: { delay: 0.4, ease: "circOut" },
        })
      }
    }
    pageLoadSequence()
  }, [isIntroDone, eControls, gControls, sControls, uControls])

  return (
    <StyledSection id="hero">
      {!isIntroDone && <SplashScreen />}
      <StyledContentWrapper>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={gControls}>
          <h1 className="title">
            <div className="greetings">{frontmatter.greetings}</div>
            {frontmatter.title}
          </h1>
          <h2 className="subtitle">
            {frontmatter.subtitlePrefix}{" "}
            {/* Hover state color can be set in useEffect hook */}
            <AnimatedUnderlining animate={uControls} color="tertiary" big>
              {frontmatter.subtitle}
            </AnimatedUnderlining>
          </h2>
          <div className="description">
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={sControls}>
          <Social fontSize=".95rem" padding=".3rem 1.25rem" width="auto" />
        </motion.div>
      </StyledContentWrapper>
    </StyledSection>
  )
}

Hero.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        body: PropTypes.string.isRequired,
        frontmatter: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
}

export default Hero
