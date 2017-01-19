import React from 'react';
import expect from 'expect';
import { mount, shallow, render } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {
  const wrapper = shallow(<Footer website='website' profile='profilePage' />)
  it('should has links', () => {
    expect(wrapper.childAt(0).text()).toEqual('British Hear Foundation')
    expect(wrapper.childAt(1).text()).toEqual('Just Giving')
  });

  it('should pass props', () => {
    expect(wrapper.instance().props.website).toEqual('website');
    expect(wrapper.instance().props.profile).toEqual('profilePage');
  })
});


