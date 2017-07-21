import './index.scss';

import Calendar from './calendar.jsx';
import React    from 'react';
import ReactDom from 'react-dom';

ReactDom.render(
  React.createElement(Calendar, { date: new Date(2000, 1, 1) }),
  document.getElementById('root')
);
