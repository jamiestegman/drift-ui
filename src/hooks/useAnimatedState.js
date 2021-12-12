import { useState, useEffect } from "react";

export const useAnimatedState = (initialState, delay) => {
  const [state, setState] = useState(initialState);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {

    let timeoutId;

    if (state && !shouldRender) setShouldRender(true);
    else if (!state && shouldRender) timeoutId = setTimeout(() => setShouldRender(false), delay);
    return () => clearTimeout(timeoutId); // Clear the timeout

  }, [state, delay, shouldRender]);

  return [state, setState, shouldRender];
}