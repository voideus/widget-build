import { BufferGeometry, Vector2 } from "three";
export declare class ExpMapGeometry {
    static expMapScale: number;
    private g;
    constructor(g: BufferGeometry);
    calculateUV(vertex: number, translateFactor: Vector2, scale: number, original?: boolean): this;
    getGeometry: () => BufferGeometry;
    setRotation: (angle: number) => this;
}
