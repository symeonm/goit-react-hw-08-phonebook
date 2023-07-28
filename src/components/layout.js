import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import { AppBar } from './appBar/AppBar';

export const Layout = () => {
    return (
      <div style={{ margin: '0 auto', padding: '0 16px', }}>
        <AppBar/>
       <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        {/* <Toaster position="top-right" reverseOrder={false} /> */}
      </div>
    );
  };