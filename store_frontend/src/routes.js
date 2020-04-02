import React from 'react';
import Loadable from 'react-loadable'
import DefaultLayout from './containers/DefaultLayout';

function Loading() {
  return <div>Loading...</div>;
}

const Breadcrumbs = Loadable({
  loader: () => import('./views/Base/Breadcrumbs'),
  loading: Loading,
});

const Dashboard = Loadable({
  loader: () => import('./views/Dashboard'),
  loading: Loading,
});


const Products = Loadable({
  loader: () => import('./views/Products/Products'),
  loading: Loading,
});

const CreateProduct = Loadable({
  loader: () => import('./views/Products/CreateProduct/'),
  loading: Loading,
});


const CreateProductWithReduxForm = Loadable({
  loader: () => import('./views/Products/CreateProductWithReduxForm/'),
  loading: Loading,
});

const UpdateProduct = Loadable({
  loader: () => import('./views/Products/UpdateProduct/'),
  loading: Loading,
});

const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/products', exact: true, name: 'Products', component: Products },
  { path: '/products/createproduct', name: 'CreateProduct', component: CreateProduct },
  { path: '/products/createProductWithReduxForm', name: 'CreateProductWithReduxForm', component: CreateProductWithReduxForm },
  { path: '/products/updateproduct/:id',exact: true, name: 'UpdateProduct', component: UpdateProduct }
];

export default routes;
