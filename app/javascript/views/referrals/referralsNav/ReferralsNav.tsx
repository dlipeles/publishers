import * as React from 'react'

import {
  Wrapper,
  Container,
  Text,
  Button
} from './ReferralsNavStyle'

import locale from "../../../locale/en";

interface IReferralsNavProps {
  openModal: (type: any) => void;
}

export default class ReferralsNav extends React.Component<IReferralsNavProps> {

  render () {
    return (
      <Wrapper>
        <Container>
            <Text header>{locale.referrals}</Text>
            <Button onClick={() => {this.props.openModal('Create')}}>{locale.createCode}</Button>
        </Container>
      </Wrapper>
    )
  }
}