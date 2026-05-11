import { useContext, useCallback } from "react";
import { RouteContext } from "../context/RouteProvider";

export default function useRouter() {
  const context = useContext(RouteContext);

  if (!context) {
    throw new Error("useRouter must be used inside RouteProvider");
  }

  const { dispatch } = context;

  const navigate = useCallback(
    (url) => {
      dispatch({ type: "NAVIGATE", payload: url });
    },
    [dispatch],
  );

  const goback = useCallback(() => {
    dispatch({ type: "GOBACK" });
  }, [dispatch]);

  return { navigate, goback };
}
