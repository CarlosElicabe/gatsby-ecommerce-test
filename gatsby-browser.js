import React from 'react';

import { NotificationProvider } from './src/context/AddItemNotificationProvider';

export const wrapRootElement = ({ element }) => (
  <NotificationProvider>{element}</NotificationProvider>
);
/* don't use TEST1 test1 */
