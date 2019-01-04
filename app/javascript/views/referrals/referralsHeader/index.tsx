import * as React from 'react'

import {
  StyledWrapper,
  StyledContentWrapper,
  StyledTextWrapper,
  StyledText,
  StyledBox
} from './style'

export default class ReferralsCard extends React.Component {

  render () {
    return (
      <StyledWrapper>
        <StyledContentWrapper>
          <StyledTextWrapper>
            <StyledText header>CAMPAIGNS</StyledText>
            <StyledText stat>9</StyledText>
          </StyledTextWrapper>
          <StyledTextWrapper>
            <StyledText header>REFERRAL CODES</StyledText>
            <StyledText stat blue>499</StyledText>
          </StyledTextWrapper>
          <StyledTextWrapper>
            <StyledText header>DOWNLOADS</StyledText>
            <StyledText stat>9999</StyledText>
          </StyledTextWrapper>
          <StyledTextWrapper>
            <StyledText header>INSTALLS</StyledText>
            <StyledText stat>999</StyledText>
          </StyledTextWrapper>
          <StyledTextWrapper>
            <StyledText header>30-DAY USE</StyledText>
            <StyledText stat purple>999</StyledText>
          </StyledTextWrapper>
          <StyledTextWrapper>
            <StyledText header>ESTIMATED EARNINGS</StyledText>
            <StyledTextWrapper earnings>
              <StyledText stat purple>999</StyledText>
              <StyledText bat purple>BAT</StyledText>
            </StyledTextWrapper>
          </StyledTextWrapper>
        </StyledContentWrapper>
        <StyledContentWrapper box>
        <StyledBox>
        <StyledText box>January 2019</StyledText>
        </StyledBox>
        </StyledContentWrapper>
      </StyledWrapper>
    )
  }
}
