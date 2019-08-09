import React, { Fragment } from 'react';
import './App.css';

// COMPONENTS
import AppHeader from './components/layouts/AppHeader';
import Landing from './components/layouts/Landing';
import SobreUp from './components/sobre/SobreUp';
import SobreDown from './components/sobre/SobreDown';
import SolucoesUp from './components/solucoes/SolucoesUp';
import SolucoesDown from './components/solucoes/SolucoesDown';
import AppFooter from './components/layouts/footer/AppFooter';

const App = () => {
  return (
    <div className="App">
      <header>
        <AppHeader />
      </header>
      <main>
        <section className="banner">
          <Landing />
        </section>
        <section className="sobre">
          <Fragment>
            <SobreUp />
          </Fragment>
          <Fragment>
            <SobreDown />
          </Fragment>
        </section>
        <section className="solucoes">
          <Fragment>
            <SolucoesUp />
          </Fragment>
          <Fragment>
            <SolucoesDown />
          </Fragment>
        </section>
      </main>
      <footer>
        <AppFooter />
      </footer>
    </div>
  );
}

export default App;
