import React from 'react';
import { Line } from 'three';
import { Object3DNode } from '@react-three/fiber';
declare class ThreeLine extends Line {
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            threeLine: Object3DNode<ThreeLine, typeof ThreeLine>;
        }
    }
}
export declare const DecalControls: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<any>>;
export {};
