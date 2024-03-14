import { useLayoutEffect } from "react";
import useIsFirstRender from "./useIsFirstRender";

export default function useUpdatedEffect(
  effect: React.EffectCallback,
  dependencies?: React.DependencyList
) {
  const isFirst = useIsFirstRender();

  useLayoutEffect(() => {
    if (!isFirst) {
      return effect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}
