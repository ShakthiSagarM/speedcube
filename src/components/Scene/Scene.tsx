import React, {useEffect, useState} from 'react';
import styles from './Scene.module.scss';
import { Canvas } from '@react-three/fiber';
import RubiksCube from "@/components/RubiksCube/RubiksCube.tsx";
import {OrbitControls} from "@react-three/drei";

export type CubieInfo = {
    position: [number, number, number];
};

interface SceneProps {}

const Scene: React.FC<SceneProps> = (props) => {

    const [cubeState, setCubeState] = useState<CubieInfo[][][]>(() => {
        const initialCubeState: CubieInfo[][][] = [];
        for (let x = -1; x <= 1; x++) {
            const row: CubieInfo[][] = [];
            for (let y = -1; y <= 1; y++) {
                const column: CubieInfo[] = [];
                for (let z = -1; z <= 1; z++) {
                    column.push({
                        position: [x, y, z],
                    });
                }
                row.push(column);
            }
            initialCubeState.push(row);
        }
        return initialCubeState;
    });

  return (
    <div className={styles['scene']}>
        <Canvas style={{width: '100%', height: '100%'}}>
            <OrbitControls/>
            <ambientLight/>
            <RubiksCube cubeState={cubeState}/>
        </Canvas>
    </div>
  );
};

export default Scene;


