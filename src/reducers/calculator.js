import * as actionTypes from '../untils/actionTypes';

const initialState = {
  inputValue: 0,
  resultValue: 0,
  showingResult: 0,
};

const calculator = (state=initialState, action) => {
  switch(action.type){
    case actionTypes.INPUT_NUMBER:
      return {
        ...state,
        inputValue: state.inputValue * 10 + action.number,
        showingResult: false,
      }
    case actionTypes.PLUS:
      return {
        ...state,
        inputValue: 0,
        resultValue: state.resultValue + state.inputValue,
        showingResult: true
      }
    default:
      return state;
  }
};

export default calculator;