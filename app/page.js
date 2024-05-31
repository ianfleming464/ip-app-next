import Image from 'next/image';
import styles from './page.module.css';
import { TrademarkInfo, IndustrialDesignInfo } from './FetchData';

export default async function Home() {
  const trademarkInfo = await TrademarkInfo();
  console.log(trademarkInfo);

  const industrialDesignInfo = await IndustrialDesignInfo();
  console.log(industrialDesignInfo);

  return (
    <main className={styles.main}>
      <div className={styles.description}>Hi.</div>
    </main>
  );
}
