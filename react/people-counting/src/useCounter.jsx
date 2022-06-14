import React, { useState } from "react";

// 초기 파라미터를 카운트 값으로 받아서 count라는 이름의 state를 이용해 값을 제공
// 카운트 증가 및 감소를 편리하게 할 수 있는 훅
// 어느 컴포넌트에서든지 카운터 기능을 쉽게 사용할 수 있다
function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const increaseCount = () => setCount((count) => count + 1);
  const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));

  return [count, increaseCount, decreaseCount];
}

export default useCounter;
