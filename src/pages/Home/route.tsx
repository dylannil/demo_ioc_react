import React, { Suspense } from 'react';

import { regRoute } from '../../routes';

const Page = React.lazy(() => import('.'));

regRoute('root', {
  index: true,
  element: (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  ),
});
