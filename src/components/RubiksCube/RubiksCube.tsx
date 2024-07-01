import React, { useState, useEffect } from 'react';
import Cubie from '@/components/Cubie/Cubie.tsx';
import {CubieInfo} from "@/components/Scene/Scene.tsx";

interface RubiksCubeProps {
     cubeState: CubieInfo[][][]
}

const RubiksCube: React.FC<RubiksCubeProps> = (props) => {
    const {cubeState} = props;
    const cubies: JSX.Element[] = [];
    cubeState.forEach((row, x) => {
        row.forEach((column, y) => {
            column.forEach(({ position }) => {
                cubies.push(<Cubie key={`${position.join('')}`} position={position} />);
            });
        });
    });

    return (
        <>
            {cubies}
        </>
    );
};

export default RubiksCube;
