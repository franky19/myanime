import { Global, css } from '@emotion/react';
import React from 'react';

const GlobalStyles: React.FC = () => {
  return (
    <Global
      styles={css`
        body {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
        }
      `}
    />
  );
};

export default GlobalStyles;
