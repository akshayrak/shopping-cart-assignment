import React, { useState } from 'react';
import { Provider } from 'react-redux';
import Layout from './components/layout/Layout';
import store from './redux/store'
export function App() {
    return (
        <React.StrictMode>
            <Provider store={store}>
                    <Layout />
            </Provider>
        </React.StrictMode>
    );
}