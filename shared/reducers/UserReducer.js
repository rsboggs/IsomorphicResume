import Immutable from 'immutable';

const defaultState = new Immutable.List();

export default function userReducer(state = defaultState, action) {
  switch(action.type) {
    //case:
      //return
    default:
      return state;
  }
}
