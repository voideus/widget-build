/// <reference types="react" />
import { ThreeRefsProps, ThreeRefsProviderProps } from '../interfaces';
export declare const ThreeRefsContext: import("react").Context<ThreeRefsProps>;
export declare const ThreeRefsProvider: ({ children }: ThreeRefsProviderProps) => JSX.Element;
export declare const useThreeRefs: () => ThreeRefsProps;
