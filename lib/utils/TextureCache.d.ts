import { Texture } from "three";
export declare class TextureCache {
    private textureMap;
    private canvasSize;
    processColorMapCanvas: (c: HTMLCanvasElement, i: HTMLImageElement) => void;
    loadTexture(path: string): Promise<Texture>;
}
export declare const textureCache: TextureCache;
