import { useState } from 'react';

function useClicked(props = false) {
  const [isClicked, setIsClicked] = useState(props);

  function click() {
    setIsClicked(true);
  }
  function unClick() {
    setIsClicked(false);
  }

  return [isClicked, click, unClick];
}

export default useClicked;
