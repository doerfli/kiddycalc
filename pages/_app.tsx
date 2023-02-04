import '../styles/globals.css'
import type { AppProps } from 'next/app'

import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/pro-solid-svg-icons';
import { fad } from '@fortawesome/pro-duotone-svg-icons';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

library.add(fas);
library.add(fad);

function KiddyCalc({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default KiddyCalc
