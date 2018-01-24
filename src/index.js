import React    from 'react';
import ReactDom from 'react-dom';

import App from './components/app';

ReactDom.render(
  React.createElement(App),
  document.getElementById('root')
);
