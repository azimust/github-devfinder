import { ReactNode } from 'react';
import styles from './Container.module.scss';
import { Header } from 'components/Header';

interface ContainerProps {
  children: ReactNode
}

export const Container = ({ }: ContainerProps) => (
  <div className={styles.container}>
    <Header />
  </div>
);
