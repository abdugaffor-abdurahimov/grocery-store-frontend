import { useState } from "react";

const useLoading = () => {
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return [loading, setLoading];
};

export default useLoading;
