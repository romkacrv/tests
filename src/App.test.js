import { mount } from "enzyme";
import React from 'react';
import AppEnhanced, { App, actTest } from './App';

import { act } from 'react-dom/test-utils';

import {
    store
} from './store';

describe('test', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<AppEnhanced store={store} />)
    });

    it('AppEnhanced', () => {
        act(() => {
            wrapper.find('.btn').props().onClick();
        });

        wrapper.update()

        expect(wrapper.find('.count').text()).toEqual("1")
    })
});