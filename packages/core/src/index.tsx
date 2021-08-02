import * as React from 'react';

declare global {
  interface Window {
    ahoy: any
    _cio: any
    fbq: any
    becomeUser: any
    ga: any
  }
}

// Delete me
export const Thing = () => {
  return <div>the snozzberries taste like snozzberries</div>;
};
