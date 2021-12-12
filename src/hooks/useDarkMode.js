import { useEffect, useState } from 'react'

const useDarkMode = () => {

  // See if user has previously set a preferred theme on this site.
  const [enabledState, setEnabledState] = useState(localStorage.get("theme"));
  // See if user has set a browser or OS preference for dark mode.
  const prefersDarkMode = usePrefersDarkMode();

  // If enabledState is defined use it, otherwise fallback to prefersDarkMode.
  // This allows user to override OS level setting on our website.
  const enabled = typeof enabledState !== "undefined" ? enabledState : prefersDarkMode;
  // Fire off effect that add/removes dark mode class
  useEffect(() => {
      const className = "dark-mode";
      const element = window.document.body;
      if (enabled) element.classList.add(className);
      else element.classList.remove(className);
    },
    [enabled]
  );
  // Return enabled state and setter
  return [enabled, setEnabledState];
}

function usePrefersDarkMode() {
  return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? true : false
}

export default useDarkMode;