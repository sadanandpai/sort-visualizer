import { useEffect, useRef, useState } from 'react';

function useMouseAction(ref: React.RefObject<HTMLDivElement>) {
  const [element, setElement] = useState<HTMLElement | null>(null);
  const isMouseDown = useRef(false);

  useEffect(() => {
    const referenceEl = ref.current;
    if (!referenceEl) {
      return;
    }

    referenceEl.addEventListener('mousedown', onMouseDown);
    referenceEl.addEventListener('mousemove', onmouseMove);
    referenceEl.addEventListener('mouseup', onMouseUp);
    referenceEl.addEventListener('mouseleave', onMouseUp);

    return () => {
      referenceEl.removeEventListener('mousedown', onMouseDown);
      referenceEl.removeEventListener('mousemove', onmouseMove);
      referenceEl.removeEventListener('mouseup', onMouseUp);
      referenceEl.removeEventListener('mouseleave', onMouseUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  const onMouseDown = (e: MouseEvent) => {
    if (e.target) {
      isMouseDown.current = true;
      setElement(e.target as HTMLElement);
    }
  };

  const onmouseMove = (e: MouseEvent) => {
    if (isMouseDown.current) {
      setElement(e.target as HTMLElement);
    }
  };

  const onMouseUp = () => {
    isMouseDown.current = false;
    setElement(null);
  };

  return { element, isMouseDown: isMouseDown.current };
}

export default useMouseAction;