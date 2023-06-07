import { BufferAttribute, BufferGeometry } from "three";
export interface ExpMapParams {
    stopDist: number;
    vertex: number;
}
export declare const expMap: (g: BufferGeometry, params: ExpMapParams) => BufferAttribute;
