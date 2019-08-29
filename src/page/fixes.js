/**********************************************************************

  TEMPORARY FIX FOR FINDING STRINGS THAT ARE ENTERED IN INPUTS

***********************************************************************/

export function FIND_API_INPUT_BUG_FIX_BEFORE (cb) {
  window.inputValues = [];
  document.querySelectorAll('input').forEach((input) => {
    inputValues.push(input.value);
    input.value = '';
  });
}

export function FIND_API_INPUT_BUG_FIX_AFTER () {
  document.querySelectorAll('input').forEach((input, i) => {
    input.value = window.inputValues[i];
  });
}
