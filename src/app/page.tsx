import styles from "./page.module.css";
import ModalTrigger from '@/components/ModalTrigger';
import CategoryList from '@/components/CategoryList';

export default function Home() {
  return (
    <div className={styles.page}>
        <ModalTrigger />
    </div>
  );
}
