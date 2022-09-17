import React from 'react';
import styles from './NotFoundBlock.module.css';

function NotFoundBlock() {
    return (
      <div>
          <h2 className={styles.not_found}>Страница не найдена</h2>
      </div>
    );
  }

  export default NotFoundBlock;