import { useCallback, useState } from 'react';

export const useToggle = (initialValue: boolean): [boolean, Toggle] => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => { setValue(v => !v); }, []);

  return [value, toggle];
};

type Toggle = () => void;