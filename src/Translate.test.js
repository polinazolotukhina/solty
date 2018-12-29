import React from 'react';
import   { shallow } from 'enzyme';
import { findByTestAttr  } from '../test/testUtils'
import Translate from './Translate';



const setup = (props={}, state=null) => {
  const wrapper = shallow(<Translate {...props} />)
  if (state) wrapper.setState(state);
  return wrapper;
}
describe('input', () => {
    test('renders Input without error', ()=>{
        const wrapper = setup();
        const component = findByTestAttr(wrapper, 'component-input');
        expect(component.length).toBe(1)
    });

    test('Input should be empty at first', ()=>{
        const wrapper = setup(null,{value:''});
        const component = findByTestAttr(wrapper, 'component-input').get(0) ;
        expect(component.props.value).toBe('')
    });
})
describe('output', () => {
    test('does not show output at first', ()=>{
        const wrapper = setup();
        const component = findByTestAttr(wrapper, 'component-output');
        expect(component.length).toBe(0)
    });
    test('show output once user press "translate" button', ()=>{
        const wrapper = setup(null, {showOutput: false});
        const button = findByTestAttr(wrapper, 'component-button');
        button.simulate('click');
        wrapper.update();
        const component = findByTestAttr(wrapper, 'component-output');
        expect(component.length).toBe(1)
    });

})

    test('renders Button without error', ()=>{
        const wrapper = setup();
        const component = findByTestAttr(wrapper, 'component-button');
        expect(component.length).toBe(1)
    });





// test('Input should update once user types', ()=>{
//     const wrapper = setup(null,{value:''});
//     const component = findByTestAttr(wrapper, 'component-input').get(0).props.value.simulate('change', { target: { value: 'new value' } })
//     expect(component.get(0).props.value).toBe('new value')
// });
