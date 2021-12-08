import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import styles from './styles.module.scss';

type Categorias = {
  id: number;
  groupid: number;
  name: string;
  url: string;
  icon_image: string;
};

export default function Main() {
  const [data, setData] = useState<Categorias[]>([]);

  console.log(data);

  useEffect(() => {
    api.get<Categorias[]>('').then(resp => {
      setData(resp.data);
    });
  }, []);

  return (
    <section className={styles.mainContainer}>
      <div className={styles.mainBanner}>
        <div className={styles.bannerContainer}>
          <div className={styles.firstBanner}>
            <div className={styles.firstBannerTrack}>
              <a href=''>
                {' '}
                {data
                  .filter(data => data.groupid === 2)
                  .map(data => {
                    return <img src={data.icon_image} alt='' />;
                  })}
              </a>
            </div>
          </div>
          <div className={styles.infoCommerce}>
            <span>
              <Icon icon='bx:bx-home' className={styles.iconBannerCommerce} />
              Receba em casa
            </span>
            <span>
              <Icon icon='bx:bx-store' className={styles.iconBannerCommerce} />
              Retire na loja física
            </span>
            <span>
              <Icon
                icon='bx:bx-support'
                className={styles.iconBannerCommerce}
              />
              Suporte de venda
            </span>
            <span>
              <Icon
                icon='bx:bx-credit-card'
                className={styles.iconBannerCommerce}
              />
              Pagamento facilitado
            </span>
            <span>
              <Icon
                icon='bx:bx-package'
                className={styles.iconBannerCommerce}
              />
              Entrega em até 1 dia útil
            </span>
          </div>
        </div>
      </div>
      <div className={styles.mainSpacing}>
        <div className={styles.mainContent}>
          <div className={styles.horizontalDeptos}>
            <h4>Navegue por departamento</h4>
            <ul className={styles.scrollList}>
              <div className={styles.mainListDeptos}>
                <div className={styles.mainSlickTrack}>
                  {data
                    .filter(data => data.groupid === 1)
                    .map(resp => {
                      return (
                        <li key={resp.id} className={styles.slickSlide}>
                          <a href={resp.url} tabIndex={0}>
                            <div
                              className={styles.boxDepto}
                              style={{
                                backgroundImage: `url(${resp.icon_image})`,
                              }}
                            ></div>
                            <span>{resp.name}</span>
                          </a>
                        </li>
                      );
                    })}
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
