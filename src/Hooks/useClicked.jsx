import { useState } from 'react';

function useClicked(props = false) {
  const [isClicked, setIsClicked] = useState(props);

  function click() {
    setIsClicked(true);
  }
  function unClick() {
    setIsClicked(false);
  }

  //   useEffect(() => {
  //     ref.current.addEventListener('mouseenter', click);
  //     ref.current.addEventListener('mouseleave', unClick);
  //   }, []);

  return [isClicked, click, unClick];
}

export default useClicked;
