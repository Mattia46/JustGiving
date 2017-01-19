import React from 'react';
import expect from 'expect';
import { mount, shallow, render } from 'enzyme';
import Main from './Main';
import Donors from './../Donors/Donors';
import Footer from './../Footer/Footer';

describe('Main component', () => {
  describe('Before getting the call back', () => {
    const wrapper = shallow(<Main />);
    it('should has a state', () => {
      expect(wrapper.state().ready).toEqual(false);
      expect(wrapper.state().obj).toBeA('object');
    })

    it('should has a parent div and className', () => {
      expect(wrapper.props().children).toEqual('Loading...')
      expect(wrapper.type()).toEqual('div');
      expect(wrapper.hasClass('loading')).toEqual(true);
    })
  })

  describe('After the call back', () => {
    const wrapper = shallow(<Main />);
    const obj = {
      name: 'National Trust',
      description: 'National Trust description',
      donationDisplayAmount: [{amount: 10, name: 'first'}, {amount: 15, name: 'second'}]
    }

    it('should render the main div once change the state.ready', () => {
      wrapper.setState({ready: true});
      expect(wrapper.hasClass('mainDiv')).toEqual(true);
      expect(wrapper.props().children.length).toEqual(3);
    })

    it('should render National Trust', () => {
      wrapper.setState({obj: obj});
      expect(wrapper.childAt(0).childAt(0).text()).toEqual('National Trust');
      expect(wrapper.childAt(0).childAt(1).text()).toEqual('National Trust description')
      expect(wrapper.childAt(0).childAt(1).childAt(1).hasClass('description')).toEqual(true)
    })

    it('should has Donors and Footer instances', () => {
      expect(wrapper.instance(Donors)).toExist();
      expect(wrapper.instance(Footer)).toExist();
    })
  })
})
