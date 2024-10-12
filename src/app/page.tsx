import styles from "./page.module.css";
import ModalTrigger from '@/components/ModalTrigger';

export default function Home() {
  return (
    <div className={styles.page}>
        <ModalTrigger />
    </div>
  );
}
