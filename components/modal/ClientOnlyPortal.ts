import React, { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const ClientOnlyPortal: React.FC<{ selector: string }> = ({
  children,
  selector,
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);

  return mounted ? createPortal(children, ref.current!) : null;
};

export default ClientOnlyPortal;
