import { useEffect, useRef } from "react";

export const encryptedIdGenerator = () => {
  const crypto = window.crypto || window.Crypto;
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  return crypto.getRandomValues(array)[0];
};

export const compose = (...fns) => (args) =>
  fns.reduceRight((arg, fn) => fn(arg), args);

export const usePrevious = (v) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = v;
  }, [v]);
  return ref.current;
};
