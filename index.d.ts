type widgetProps = {
    modelUrl: string;
    stickers: [];
    backgrounds: [];
    container: any;
};
export declare const renderWidget: ({ container, modelUrl, stickers, backgrounds, }: widgetProps) => void;
declare global {
    interface Window {
        renderWidget: (options: widgetProps) => void;
        hello: () => void;
    }
}
export * from './lib/organisms/Editor';
export * from './lib/molecules/Experience';
export * from './lib/molecules/LayerCustomization';
export * from './lib/molecules/NFTCollection';
export * from './lib/interfaces';
