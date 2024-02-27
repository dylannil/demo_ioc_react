import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, RouteObject, Routes, useRoutes } from 'react-router';
import { Link } from 'react-router-dom';

import Paths from './constants/path';
import { getRoutesInGroup } from './routes';

// const Home = React.lazy(() => import('./pages/Home'));
// const TestPage = React.lazy(() => import('./pages/TestPage'));
// const NotFound = React.lazy(() => import('./pages/NotFound'));

// // const ROUTES: RouteObject[] = [
// //   {
// //     path: '/',
// //     children: [
// //       {
// //         index: true,
// //         element: (
// //           <Suspense fallback={null}>
// //             <Home />
// //           </Suspense>
// //         )
// //       },
// //       {
// //         path: 'test-page',
// //         element: (
// //           <Suspense fallback={null}>
// //             <TestPage />
// //           </Suspense>
// //         )
// //       },
// //       {
// //         path: '*',
// //         element: (
// //           <Suspense fallback={null}>
// //             <NotFound />
// //           </Suspense>
// //         )
// //       }
// //     ]
// //   }
// // ];

function App() {
  const { t } = useTranslation();

  const routes = useRoutes(getRoutesInGroup('root'));

  return (
    <div>
      {t('home.description')}

      <Link to={Paths.TEST_PAGE}>Test Page</Link>

      {routes}
    </div>
  );
}

export default App;
