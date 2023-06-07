import { BufferAttribute, Vector3 } from "three";
export declare const getTan1Tan2: (n: BufferAttribute) => {
    tan1: Vector3;
    tan2: Vector3;
}[];
export declare const tangentFrame: (normal: Vector3) => {
    tan1: Vector3;
    tan2: Vector3;
};
