import { EmscriptenMemoryManager } from "./emscripten-memory-manager";
export declare class EigenModule {
    static module(): any;
    static mm: EmscriptenMemoryManager;
    static init(): Promise<void>;
}
