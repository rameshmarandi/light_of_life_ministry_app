import React from 'react';

import DrawerStack from './DrawerStack';

export default function MainNavigation(props) {
  const {isAdmin} = props
  return (
    <>
      <DrawerStack isAdmin={true} />
    </>
  );
}
