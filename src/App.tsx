import { useEffect, useState } from 'react';
import styles from './App.module.scss';
import Header from './components/Header';
import Main from './components/Categorias';
import { api } from './services/api';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className={styles.contentWrapper}>
      <Header />
      <Main />
    </main>
  );
}

export default App;
