import * as actionTypes from '../untils/actionTypes';

export const onNumClick = (number) => ({
  type: actionTypes.INPUT_NUMBER,
  number,
});

export const onPlusClick = () => ({
  type: actionTypes.PLUS,
});