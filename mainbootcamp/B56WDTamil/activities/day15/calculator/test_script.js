document.addEventListener(
  "keydown",
  (event) => {
    const keyName = event.key;

    if (keyName === "Control") {
      // don't alert when control key is pressed
      return;
    }

    if (event.ctrlKey) {
      // even though  event.key is not "control" (e.g., 'a' is pressed)
      // event.ctrlKey may be true if Ctrl key is pressed at the same time.

      alert(`Combination of ctrlKey + ${keyName}`);
    } else {
      alert(`Key pressed ${keyName}`);
    }
  },
  false
);

document.addEventListener(
  "keyup",
  (event) => {
    const keyName = event.key;

    if (keyName === "Control") {
      alert("Control key was released");
    }
  },
  false
);
