import React, { Suspense } from 'react';

import { regRoute } from '../../routes';

const Page = React.lazy(() => import('.'));

regRoute('root', {
  path: 'test-page',
  element: (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  ),
});
