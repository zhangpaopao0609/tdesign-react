import { debounce } from 'lodash-es';
import type { DebounceSettingsLeading } from 'lodash';
import { useCallback, useEffect } from 'react';
import { usePersistFn } from './usePersistFn';

const useDebounce = <T extends (...args: any) => any>(func: T, delay: number, options?: DebounceSettingsLeading) => {
  const callback = usePersistFn(func);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounced = useCallback(debounce(callback, delay, options), [callback, delay, options]);
  useEffect(() => debounced.cancel, [debounced]);

  return debounced;
};

export default useDebounce;
