declare module 'three/examples/jsm/loaders/SVGLoader.js' {
  import { Group, Loader, LoadingManager, Shape, ShapePath } from 'three';

  export interface SVGResultPath extends ShapePath {
    userData?: { style?: Record<string, unknown> };
    color: { r: number; g: number; b: number };
  }

  export interface SVGResult {
    paths: SVGResultPath[];
    xml: XMLDocument;
  }

  export class SVGLoader extends Loader {
    constructor(manager?: LoadingManager);
    load(
      url: string,
      onLoad: (data: SVGResult) => void,
      onProgress?: (event: ProgressEvent) => void,
      onError?: (event: unknown) => void
    ): void;
    static createShapes(shapePath: SVGResultPath): Shape[];
    static getStrokeStyle(
      width: number,
      color?: string,
      lineJoin?: string,
      lineCap?: string,
      miterLimit?: number
    ): Record<string, unknown>;
  }

  export function SVGResultPathsToGroup(paths: SVGResultPath[]): Group;
}
