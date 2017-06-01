$(function() {
  // Find the form on the page and get ready to do stuff when the submit button is clickec
  var expression = $('#new-form').submit(function(event) {
    // Stop the form from refreshing the page
    event.preventDefault();
    // Extract the string from the form box
    var expression = $('.calculation');

    // Do the calculations
    var calc = (expression.val().split(' '));
    var stack = [];
    for (var i = 0, l = calc.length; i<l; i++){
      var e = calc[i];
      if (e == '+'){
        let val1 = parseInt(stack.pop(), 10);
        let val2 = parseInt(stack.pop(), 10);
        let newValue = val2 + val1;
        stack.push(newValue);
        }
      else 
        if ( e == '-' ) {
          let val1 = parseInt(stack.pop(), 10);
          let val2 = parseInt(stack.pop(), 10);
          let newValue = val2 - val1;
          stack.push(newValue);
        }
      else
        if ( e == '*' ) {
          let val1 = parseInt(stack.pop(), 10);
          let val2 = parseInt(stack.pop(), 10);
          let newValue = val2 * val1;
          stack.push(newValue);
        }
      else
        if ( e == '/' ) {
          let val1 = parseInt(stack.pop(), 10);
          let val2 = parseInt(stack.pop(), 10);
          let newValue = val2 / val1;
          stack.push(newValue);
        }
      else {
        stack.push(e);
      }
    } 
    // return parseInt(stack.pop(), 10);
    console.log(parseInt(stack.pop(), 10))
  });
});