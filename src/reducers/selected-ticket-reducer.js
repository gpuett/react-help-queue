import c from './../../src/constants';

export default (state = {}, action) => {
  switch (action.type) {
  case c.SELECT_TICKET:
    return action.ticketId;
  default:
    return state;
  }
};
