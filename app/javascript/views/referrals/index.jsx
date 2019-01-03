import React from 'react'
import ReactDOM from 'react-dom'

import {
  StyledWrapper,
  StyledContainer,
  StyledGrid,
} from './style'

import ReferralsNav from './referralsNav/index.jsx'
import ReferralsHeader from './referralsHeader/index.tsx'
import ReferralsCard from './referralsCard/index.jsx'


export default class Referrals extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentWillMount(){
  }

  componentDidMount(){
  }



  render() {
    return (
      <StyledWrapper>
        <ReferralsNav/>
        <StyledContainer>
          <ReferralsHeader/>
          <StyledGrid>
            <ReferralsCard/>
            <ReferralsCard/>
            <ReferralsCard/>
            <ReferralsCard/>
          </StyledGrid>
        </StyledContainer>
      </StyledWrapper>
    )
    }
}
