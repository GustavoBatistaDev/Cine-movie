import React
 from 'react';
 
import './Styles.css';
import Main from '../../components/main/main';

import Menu from '../../components/menu/menu';
import Footer from '../../components/footer/footer';

export function Home() {

    return (
        <div>
            <Menu />
            <Main/>
            <Footer />
        </div>
    )
}

export default Home;


