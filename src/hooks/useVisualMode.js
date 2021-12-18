import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = function(newMode, replace = false) {
    if (replace) {
      setMode(newMode)
      setHistory((prevState) => {
        prevState.pop()
        return [
          ...prevState,
          newMode,
        ]
      })
    } else {
      setMode(newMode)
      setHistory((prevState) => ([
        ...prevState,
        newMode
      ]))
    }
  };

  const back = function() {
    if (history.length <= 1) {
      return;
    }

    const newMode = history[history.length - 2]
    setMode(newMode)
    setHistory((prevState) => {
      prevState.pop()
      return prevState;
    })
  };

  return { mode, transition, back };
}