import styles from './styles.module.scss';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

type Categorias = {
  id: number;
  groupid: number;
  name: string;
  url: string;
  icon_image: string;
};

export default function Header() {
  const [data, setData] = useState<Categorias[]>([]);

  console.log(data);

  useEffect(() => {
    api.get<Categorias[]>('').then(resp => {
      setData(resp.data);
    });
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.rowTop}>
        <a href='' className={styles.headerLogo}>
          <img
            src='https://d8vlg9z1oftyc.cloudfront.net/multicoisashomolog/multicoisashomolog-file-manager/ICONS/logo-multicoisas-2x.png'
            alt='Multicoisas'
            className={styles.imageLogo}
          />
        </a>
        <form action='' className={styles.formHeader} method='get'>
          <div className={styles.searchDiv}>
            <button type='submit' className={styles.searchButton}>
              <Icon icon='bx:bx-search-alt' />
            </button>
            <input
              type='text'
              placeholder='O que você precisa?'
              autoComplete='off'
              className={styles.searchInput}
            />
          </div>
        </form>
        <div className={styles.horizontalList}>
          <div className={styles.topMenuItem}>
            {data
              .filter(data => data.groupid === 4)
              .map(data => {
                return (
                  <a href={data.url}>
                    <Icon icon='bx:bx-user' className={styles.iconsHeader} />
                    <span className={styles.labelMenu}>{data.name}</span>
                  </a>
                );
              })}
          </div>
          <div className={styles.topMenuItem}>
            {data
              .filter(data => data.groupid === 5)
              .map(data => {
                return (
                  <a href={data.url}>
                    <Icon
                      icon='bx:bx-help-circle'
                      className={styles.iconsHeader}
                    />
                    <span className={styles.labelMenu}>{data.name}</span>
                  </a>
                );
              })}
          </div>
          <div className={styles.topMenuItem}>
            <a href=''>
              <Icon icon='bx:bx-cart' className={styles.iconsHeader} />
              <span className={styles.labelMenu}>Meu Carrinho</span>
              <i>
                <span className={styles.badgeCart}>0</span>
              </i>
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.rowBottom}>
        <nav className={styles.headerBottomMenu}>
          <li className={styles.dropdownToggle}>
            <a href='' className={styles.menuTitle}>
              <Icon icon='bx:bx-menu' className={styles.toggleIcon} />
              Todos os departamentos
            </a>
            <div className={styles.dropdown} role='menu'>
              <div className={styles.dropdownDeptos}>
                <div className={styles.divDropdown}>
                  <h4>DEPARTAMENTOS</h4>
                  {data
                    .filter(data => data.groupid === 1)
                    .map(resp => {
                      return (
                        <a href={resp.url}>
                          <img src={resp.icon_image} alt='' />
                          <span>{resp.name}</span>
                        </a>
                      );
                    })}
                </div>

                <Icon icon='bx:bxs-up-arrow' className={styles.arrowDropdown} />
              </div>
            </div>
          </li>
          <div className={styles.offset}></div>
          {data
            .filter(data => data.groupid === 3 && data.name !== 'Departamentos')
            .map(data => {
              return (
                <li>
                  <a href={data.url}>{data.name}</a>
                </li>
              );
            })}
          {/* <li>
            <a href=''>Ofertas</a>
          </li>
          <li>
            <a href=''>Lançamentos</a>
          </li>
          <li>
            <a href=''>Mais Queridos</a>
          </li>
          <li>
            <a href=''>Multilovers</a>
          </li> */}
        </nav>
        <div className={styles.headerStoreInfo}>
          <div className={styles.boxStore}>
            <Icon icon='bx:bx-store-alt' className={styles.iconStore} />
            <span className={styles.storeInfoText}>
              Rua Maracaju - Loja 019
            </span>
          </div>
          <a href=''>
            <Icon icon='bx:bx-sync' className={styles.iconChangeStore} />
            <span className={styles.titleChangeStore}>Trocar loja</span>
          </a>
        </div>
      </div>
    </header>
  );
}
