import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/style.scss'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const HomeLayout = ({ children }) => {
    return (
        <main>
            <Header />
            {children}
            <Footer />
        </main>
    );
};

export default HomeLayout;