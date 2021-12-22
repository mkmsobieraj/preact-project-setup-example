import { act, renderHook } from '@testing-library/react-hooks';
import { useToggle } from '../../view/hooks/toggle';

describe('toggle', () => {
  test('should has correct initial value', () => {
    const {
      result: {
        current: [value],
      },
    } = renderHook(() => useToggle(true));

    expect(value).toBe(true);
  });

  test('should toggle value', () => {
    const { result } = renderHook(() => useToggle(true));

    act(() => {
      result.current[1]();
    });

    expect(result.current[0]).toBe(false);
  });
});
