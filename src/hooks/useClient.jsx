import { useEffect, useState } from "react";

export const useClient = () => {
  const [isClient, setIsClient] = useState(false);
  const key = isClient ? "client" : "server";
  useEffect(() => setIsClient(true), []);

  return { isClient, key };
};
