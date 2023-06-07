import { BgTextureProps } from '../interfaces';
export declare class BgCache {
    private textureMap;
    private loader;
    constructor();
    private _loadTexture;
    loadTexture(path: string): Promise<BgTextureProps>;
}
export declare const backgroundTextureCache: BgCache;
