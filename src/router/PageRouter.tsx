import React, { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LoadingPage } from 'pages';

const GalleryPage = React.lazy(() => import('../pages/GalleryPage'));
const HomePage = React.lazy(() => import('../pages/HomePage'));

const PageRouter = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={ <LoadingPage /> }>
                <Routes>
                    <Route path='/' element={ <HomePage /> }/>
                    <Route path='/galeria' element={ <GalleryPage /> } />
                    <Route path='*' element={ <Navigate to='/' /> } />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default PageRouter;