import { INavigate } from "@/application/interfaces/INavigate";
import { useCallback } from "react";
import { NavigateOptions, To, useNavigate } from "react-router-dom";

export const useHistory = (): INavigate => {
  const navigateHook = useNavigate();

  const goBack = useCallback(() => {
    navigateHook(-1);
  }, [navigateHook]);

  const goNext = useCallback(() => {
    navigateHook(1);
  }, [navigateHook]);

  const navigate = useCallback(
    (to: To, options?: NavigateOptions) => {
      navigateHook(to, options);
    },
    [navigateHook]
  );

  return { goBack, goNext, navigate };
};
