import { CameraControls } from "@react-three/drei";
import { Scene } from "three";
export declare const updateGizmoVisibility: (scene: Scene, isVisible: boolean) => void;
export declare const generate3DModel: (scene: Scene) => Promise<Blob>;
export declare const generateGIF: (cameraControls: CameraControls) => Promise<Blob>;
export declare const setBackground: (scene: Scene, bgWidth: number, bgHeight: number) => void;
