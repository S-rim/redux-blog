import { useState, useCallback } from "react";

function useChangeInput(initalValue) {
  const [data, setData] = useState(initalValue);

  const handler = useCallback(
    (e) => {
      console.log(e.target.value);
      const { value, name } = e.target;
      setData((prev) => ({ ...prev, [name]: value }));
    },
    [data]
  );
  return [data, handler];
}

export default useChangeInput;
