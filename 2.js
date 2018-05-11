// For testing
const numberToList = n => {
  n += "";
  return n.split("").reduce((acc, v) => {
    return {
      val: parseInt(v),
      next: acc
    };
  }, null);
};

var addTwoNumbers = function(l1, l2) {
  const atnn = (l1, l2, rem) => {
    if (l1 == null && l2 == null) {
      if (rem == 0) return [];
      return [1];
    }
    if (l1 !== null && l2 == null) {
      const outerSum = l1.val + rem;
      const thisDigit = outerSum % 10;
      const reminder = outerSum >= 10 ? 1 : 0;
      return [thisDigit].concat(atnn(l1.next, null, reminder));
    }
    if (l1 == null && l2 !== null) {
      const outerSum = l2.val + rem;
      const thisDigit = outerSum % 10;
      const reminder = outerSum >= 10 ? 1 : 0;
      return [thisDigit].concat(atnn(null, l2.next, reminder));
    }
    const outerSum = l2.val + l1.val + rem;
    const thisDigit = outerSum % 10;
    const reminder = outerSum >= 10 ? 1 : 0;
    return [thisDigit].concat(atnn(l1.next, l2.next, reminder));
  };
  return atnn(l1, l2, 0);
};

console.log(addTwoNumbers(numberToList(342), numberToList(465)));
