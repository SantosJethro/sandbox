import React, { Suspense, useEffect } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootProvider from './components/Layout/RootProvider';
import Base from './components/Layout/Base';
import { Loader } from './components/GenericComponents/generic/Loader';
import NotFound from './components/CustomPage/NotFound';
import { SandboxPage } from './components/AdminPages/SandboxPage/SandboxPage';


// export const pages = [
//   { permission: 'view_sandbox', path: '/sandbox', component: <SandboxPage /> },
// ];

const Index = () => {
  const user = {permissions: ['view_sandbox']};

  useEffect(() => {
    console.log('tessst');
  }, []);

  return (
    <div>
      <h1>test</h1>
    </div>
  )

  // return (
  //   <BrowserRouter>
  //     <RootProvider>
  //       <Suspense fallback={<Loader />}>
  //         <Routes>
  //           <Route element={<Base />}>
  //             {
  //               pages.map((page, idx) => {
  //                 if (user?.permissions?.includes(page.permission)) {
  //                   return (
  //                     <Route key={idx} path={page.path} element={page.component} />
  //                   );
  //                 }
  //               })
  //             }
  //           </Route>

  //           <Route
  //             path="*"
  //             element={<NotFound/>}
  //           />

  //         </Routes>
  //       </Suspense>
  //     </RootProvider>
  //   </BrowserRouter>
  // );
};

const MainApp = (props) => (
  <Index {...props} />
);
export default MainApp;

if (document.getElementById('page-main')) {
  // const props = Object.assign({}, document.getElementById('page-main').dataset);
  render((<MainApp />), document.getElementById('page-main'));
}
