import * as React from 'react'

import {
  Wrapper,
  Container,
  TextWrapper,
  ContentWrapper,
  TextArea,
  Button,
  Break,
  Input,
  Text
} from './ReferralsAddStyle.ts'

import Select from 'brave-ui/components/formControls/select'

import locale from '../../../locale/en.js'

export default class ReferralsAdd extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      mode: 'dropdown',
      codesValue: 1,
      campaignValue: null
    }
  }

  handleCreate = async (e) => {
    createReferralCode(this.state.codesValue, this.props.campaignToAddCodesTo, this.props.refresh, this.props.closeModal)
  }

  handleNumberOfCodes = (e) => {
    if (e.target.value.length > 3){
      this.setState({ codesValue: e.target.value.slice(0, 3) })
    }
    else {
      this.setState({ codesValue: e.target.value })
    }
  }

  render () {
    return (
        <Container>
            <Text heading>Add Referral Codes {this.props.campaignToAddCodesTo}</Text>
            <Break/>
            <Text subtext>Number of referral codes needed</Text>
            <ContentWrapper codes>
              <Input type="number" value={this.state.codesValue} onChange={this.handleNumberOfCodes} codes/>
            </ContentWrapper>
            <Text subtext>Description</Text>
            <Input value={this.state.campaignValue} onChange={this.handleCampaignValue} name/>
            <Break/>
            <ContentWrapper buttons>
              <Button secondary onClick={() => {this.props.closeModal()}}>Cancel</Button>
              <Button solid onClick={ (e) => this.handleCreate(e) }>Create</Button>
            </ContentWrapper>
        </Container>
    )
  }
}

function CampaignSelect (props) {

  let InputMethod = props.mode === 'dropdown' ? <CampaignDropdown campaigns={props.campaigns}/> : <Input name/>
  let InputText = props.mode === 'dropdown' ? <div>Create new campaign</div> : <div>Cancel</div>

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '50%' }}>
        {InputMethod}
      </div>
      <div onClick={ () => props.handleMode() } style={{ width: '50%', margin: 'auto', color: '#4C54D2', textDecoration: 'underline', userSelect: 'none', cursor:'pointer', textAlign: 'center' }}>
        {InputText}
      </div>
    </div>
  )
}

async function createReferralCode (numberOfCodes, campaignID, refresh, closeModal) {
  let url = '/publishers/' + 'c1a84225-471a-4f82-8691-ab62eac7ab46' + '/referrals/create_codes'
  let body = new FormData()
  body.append('number', numberOfCodes)
  body.append('promo_campaign_id', campaignID)
  let options = {
    method: 'POST',
    credentials: 'same-origin',
    headers: { 'Accept': 'application/json', 'X-Requested-With': 'XMLHttpRequest', 'X-CSRF-Token': document.head.querySelector('[name=csrf-token]').content }
    body: body
  }
  let response = await fetch(url, options)
  refresh()
  closeModal()
  return response
}