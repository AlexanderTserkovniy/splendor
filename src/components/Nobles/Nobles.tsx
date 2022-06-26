import { nobles } from '../../resources/cards.json';
// TODO Use it to detect correct names and move names to common place
// import { tokenNames } from '../../resources/config.json';
import nobleDummy from '../../images/noble-dummy.jpeg';
import styles from './Nobles.module.css';

const Nobles = ({ ...props } : { props?: any }) =>
  (
    <section {...props}>
      <header>
        <h2>Nobles:</h2>
      </header>

      <article>
        <ul className={styles.Nobles}>
          {nobles.map(({price}) => (
            <li className={styles.Noble} key={Math.random()}>
              <header className={styles['Noble-price']}>
                <ul className={styles['price-wrapper']}>
                  {
                    Object.entries(price).map(([tokenName, tokenValue]) => (
                      <li className={styles.price} style={{ background: tokenName }}>
                        {tokenValue}
                      </li>
                    ))
                  }
                </ul>
              </header>
              <footer className={styles['Noble-image']}>
                <img src={nobleDummy} alt="Noble face and price" className={styles.image}/>
              </footer>
            </li>
          ))}
        </ul>
        {JSON.stringify(nobles)}
      </article>
    </section>
  )

export default Nobles;