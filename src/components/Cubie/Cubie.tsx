// components/Cubie.tsx
import React from 'react';
import { MeshProps } from '@react-three/fiber';
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three-stdlib';

interface CubieProps extends MeshProps{

}

const Cubie: React.FC<CubieProps> = (props) => {
    const materials = [
        new THREE.MeshStandardMaterial({ color: 'red' }),     // Right
        new THREE.MeshStandardMaterial({ color: 'green' }),   // Left
        new THREE.MeshStandardMaterial({ color: 'blue' }),    // Top
        new THREE.MeshStandardMaterial({ color: 'yellow' }),  // Bottom
        new THREE.MeshStandardMaterial({ color: 'white' }),   // Front
        new THREE.MeshStandardMaterial({ color: 'gold' }),  // Back
    ];

    const roundedBoxRef = React.useRef<THREE.Mesh>(null!);

    const roundedBoxGeometry = new RoundedBoxGeometry(1, 1, 1, 4, 0.1);

    return (
        <mesh {...props} ref={roundedBoxRef} material={materials}>
            <primitive object={roundedBoxGeometry} />
        </mesh>
    );
};

export default Cubie;
