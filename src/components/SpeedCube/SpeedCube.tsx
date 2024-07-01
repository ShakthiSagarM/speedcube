import React from 'react';
import styles from './SpeedCube.module.scss';
import Scene from "@/components/Scene/Scene.tsx";

interface SpeedCubeProps {}

const SpeedCube: React.FC<SpeedCubeProps> = (props) => {
  return (
    <div className={styles['main']}>
        <Scene/>
    </div>
  );
};

export default SpeedCube;
