import React from 'react';
import expect from 'expect';
import { mount, shallow, render } from 'enzyme';
import Donors from './Donors';
import Supporter from './Donors';

const donationDisplayAmounts = [
  { amount: 10,
    description : "Could pay for all the test-tubes, glassware, pipette tips and gloves",
    donationPromptType : "OneOff",
    name : "£10.00"
  },
  {
    amount: 15,
    description : "could help to fund a full day's BHF Heart Nursing care.",
    donationPromptType : "OneOff",
    name : "£15.00"
  }
]


describe('Donors', () => {
  const wrapper = shallow(<Donors donors={donationDisplayAmounts} />);
  const donor = donationDisplayAmounts[0]
  it('should receive props', () => {
    expect(wrapper.instance().props.donors).toEqual(donationDisplayAmounts);
  })

  it('should gets total amount of donations', () => {
    expect(wrapper.childAt(0).text()).toEqual('Total found raised £ 25');
  });

  it('should render the supporters component', () => {
    expect(wrapper.contains(<Supporter />));
  })
});

