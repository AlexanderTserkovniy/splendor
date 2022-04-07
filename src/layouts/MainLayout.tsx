import styles from "./MainLayout.module.css";
import {Link} from "react-router-dom";
import cover from "../images/cover.jpeg";
import React from "react";

const Layout = ({ children }: React.PropsWithChildren<any>): React.ReactElement => (
  <div className={styles.App}>
    <header>
      <Link to="/">
        <h1 className={styles.heading}>
          <img src={cover} alt="Cover" className={styles.cover}/>
          <span className="text">
              Splendor the Board Game
            </span>
        </h1>
      </Link>

      <p>
        <Link to="/start">Start new game</Link>
      </p>
    </header>
    <article>

      { children }

    </article>
  </div>
);

export default Layout;