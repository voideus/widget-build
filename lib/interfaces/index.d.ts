import { ChangeEvent, MutableRefObject, ReactNode } from 'react';
import { ExpMapGeometry } from '../expmap/ExpMapGeometry';
import { Event, Intersection, Mesh, Object3D, Scene, Texture, Vector2, Vector3 } from 'three';
import { MeshProps, RootState, ThreeEvent, Vector3 as FiberVector3 } from '@react-three/fiber';
import { CameraControls } from '@react-three/drei';
interface AccordionProps {
    title: string;
    icon?: any;
    children: ReactNode;
    expanded?: boolean;
    className?: string;
}
interface ButtonProps {
    className?: string;
    onClick: () => void;
    children: ReactNode;
    type?: 'button' | 'reset' | 'submit';
    variant?: 'primary' | 'secondary';
}
interface IconButtonProps {
    icon: any;
    onClick: () => void;
}
interface RadioButtonProps {
    className?: string;
    name: string;
    label?: string;
    description?: string;
    value: string;
    onChange: (checked: boolean) => void;
    checked?: boolean;
}
interface RotatorProps {
    min: number;
    max: number;
    defaultValue?: number;
    value: number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    step?: number;
}
interface ScreenItem {
    id: string;
    geometry: ExpMapGeometry;
    position: Vector3;
    image: string;
    size: Vector3;
    scale: number;
    rotationAngle: number;
    texture: Texture;
    face: number;
    translateFactor: Vector2;
    mh: Mesh;
}
interface ScreenItemJson {
    id: string;
    position: number[];
    image: string;
    size: number[];
    scale: number;
    rotationAngle: number;
    face?: number;
    translateFactor?: number[];
}
interface StickerImageProps {
    user_id?: string;
    sticker_id?: string;
    url: string;
    price?: number;
    pasted?: boolean;
}
interface BackgroundImageProps {
    url: string;
    id: string;
}
interface StickerContextProps {
    model: string;
    rotation: number;
    setRotation: React.Dispatch<React.SetStateAction<number>>;
    scale: number;
    setScale: React.Dispatch<React.SetStateAction<number>>;
    pastedStickers: ScreenItem[];
    setPastedStickers: React.Dispatch<React.SetStateAction<ScreenItem[]>>;
    threeRef?: MutableRefObject<RootState | undefined>;
    backgrounds: BackgroundImageProps[];
    stickers: StickerImageProps[];
    selectedSticker: string;
    setSelectedSticker: React.Dispatch<React.SetStateAction<string>>;
    fetchingStickers: boolean;
    fetchMoreStickers?: () => Promise<boolean>;
    modelScaleFactor?: number;
    modelPosition?: FiberVector3;
    currentBackground: string;
    setCurrentBackground: React.Dispatch<React.SetStateAction<string>>;
    isDragging: boolean;
    isRotating: boolean;
    setIsDragging: React.Dispatch<React.SetStateAction<boolean>>;
    setIsRotating: React.Dispatch<React.SetStateAction<boolean>>;
}
interface StickerContextProviderProps {
    children: React.ReactNode;
    stickers: StickerImageProps[];
    backgrounds: BackgroundImageProps[];
    model: string;
    fetchingStickers: boolean;
    fetchMoreStickers?: () => Promise<boolean>;
    modelScaleFactor?: number;
    modelPosition?: FiberVector3;
}
interface RaycastCalculatorProps {
    modelMesh: MutableRefObject<Mesh | null>;
    intersectionRef: MutableRefObject<Intersection<Object3D<Event>> | undefined>;
    mousePosition: MutableRefObject<Vector2 | null>;
}
interface StickerProps {
    id: string;
    mesh: MeshProps;
    index: number;
    image: string;
    selected?: boolean;
    onClick: ((event: ThreeEvent<MouseEvent>) => void) | undefined;
    onDrag: (x: any) => void;
    texture: Texture;
}
interface BgTextureProps {
    width: number;
    height: number;
    texture: Texture;
}
interface PastedStickerProps {
    mouseHelper?: Mesh;
    image: StickerImageProps;
    modelMesh: Mesh;
    intersectionPoint?: Vector3;
    layerCounterRef: MutableRefObject<number | null>;
}
interface EditorRef {
    getStickerData: () => ScreenItemJson[];
    presetStickers: (data: string) => void;
    exportData: (type: 'gif' | '3d') => Promise<Blob | undefined>;
}
interface ThreeRefsProps {
    cameraControls: MutableRefObject<CameraControls | null>;
    sceneRef: MutableRefObject<Scene | null>;
    modelMesh: MutableRefObject<Mesh | null>;
    mousePosition: MutableRefObject<Vector2 | null>;
    raycastIntersectionRef: MutableRefObject<Intersection<Object3D<Event>> | undefined>;
    gizmoRef: MutableRefObject<Mesh | null>;
    mouseHelper: MutableRefObject<Mesh | null>;
}
interface ThreeRefsProviderProps {
    children: ReactNode;
}
interface StickerEditorProps extends Omit<StickerContextProviderProps, 'children'> {
    children?: ReactNode;
}
export { AccordionProps, ButtonProps, IconButtonProps, RadioButtonProps, RotatorProps, ScreenItem, ScreenItemJson, StickerContextProviderProps, BackgroundImageProps, StickerContextProps, StickerImageProps, RaycastCalculatorProps, StickerProps, BgTextureProps, PastedStickerProps, EditorRef, ThreeRefsProps, ThreeRefsProviderProps, StickerEditorProps };
