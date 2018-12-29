// import checkPropTypes from 'check-prop-types';
// import { createStore, applyMiddleware }from 'redux';
// import rootReducer from '../src/reducers'
// import { middlewares } from '../src/configureStore'
//
// export const storeFactory = (initialState) =>{
//     const createStoreWithMiddlewares = applyMiddleware(...middlewares)(createStore)
//     return createStoreWithMiddlewares(rootReducer, initialState)
// }
//
//
export const findByTestAttr = (wrapper, val)=>{
    return wrapper.find(`[data-test="${val}"]`)
}

//
// export const checkProps = (component, conformingProps) => {
//   const propError = checkPropTypes(
//     component.propTypes,
//     conformingProps,
//     'prop',
//     component.name);
//   expect(propError).toBeUndefined();
// }
