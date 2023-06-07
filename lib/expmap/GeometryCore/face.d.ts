import { Halfedge } from "./halfedge";
export declare class Face {
    halfedge?: Halfedge;
    index: number;
    /**
     * This class represents a face in a {@link module:Core.Mesh Mesh}.
     * @constructor module:Core.Face
     * @property {module:Core.Halfedge} halfedge One of the halfedges associated with this face.
     */
    constructor();
    /**
     * Checks whether this face is a boundary loop.
     * @method module:Core.Face#isBoundaryLoop
     * @returns {boolean}
     */
    isBoundaryLoop(): boolean | undefined;
    /**
     * Convenience function to iterate over the vertices in this face.
     * Iterates over the vertices of a boundary loop if this face is a boundary loop.
     * @method module:Core.Face#adjacentVertices
     * @param {boolean} ccw A flag indicating whether iteration should be in CCW or CW order.
     * @returns {module:Core.Vertex}
     * @example
     * let f = mesh.faces[0]; // or let b = mesh.boundaries[0]
     * for (let v of f.adjacentVertices()) {
     *     // Do something with v
     * }
     */
    adjacentVertices(ccw?: boolean): FaceVertexIterator;
    /**
     * Convenience function to iterate over the edges in this face.
     * Iterates over the edges of a boundary loop if this face is a boundary loop.
     * @method module:Core.Face#adjacentEdges
     * @param {boolean} ccw A flag indicating whether iteration should be in CCW or CW order.
     * @returns {module:Core.Edge}
     * @example
     * let f = mesh.faces[0]; // or let b = mesh.boundaries[0]
     * for (let e of f.adjacentEdges()) {
     *     // Do something with e
     * }
     */
    adjacentEdges(ccw?: boolean): FaceEdgeIterator;
    /**
     * Convenience function to iterate over the faces neighboring this face.
     * @method module:Core.Face#adjacentFaces
     * @param {boolean} ccw A flag indicating whether iteration should be in CCW or CW order.
     * @returns {module:Core.Face}
     * @example
     * let f = mesh.faces[0]; // or let b = mesh.boundaries[0]
     * for (let g of f.adjacentFaces()) {
     *     // Do something with g
     * }
     */
    adjacentFaces(ccw?: boolean): FaceFaceIterator;
    /**
     * Convenience function to iterate over the halfedges in this face.
     * Iterates over the halfedges of a boundary loop if this face is a boundary loop.
     * @method module:Core.Face#adjacentHalfedges
     * @param {boolean} ccw A flag indicating whether iteration should be in CCW or CW order.
     * @returns {module:Core.Halfedge}
     * @example
     * let f = mesh.faces[0]; // or let b = mesh.boundaries[0]
     * for (let h of f.adjacentHalfedges()) {
     *     // Do something with h
     * }
     */
    adjacentHalfedges(ccw?: boolean): FaceHalfedgeIterator;
    /**
     * Convenience function to iterate over the corners in this face. Not valid if this face
     * is a boundary loop.
     * @method module:Core.Face#adjacentCorners
     * @param {boolean} ccw A flag indicating whether iteration should be in CCW or CW order.
     * @returns {module:Core.Corner}
     * @example
     * let f = mesh.faces[0];
     * for (let c of f.adjacentCorners()) {
     *     // Do something with c
     * }
     */
    adjacentCorners(ccw?: boolean): FaceCornerIterator;
    /**
     * Defines a string representation for this face as its index.
     * @ignore
     * @method module:Core.Face#toString
     * @returns {string}
     */
    toString(): number;
}
/**
 * This class represents an adjacent vertex iterator for a {@link module:Core.Face Face}.
 * @ignore
 * @memberof module:Core
 */
declare class FaceVertexIterator {
    private _halfedge;
    private _ccw;
    constructor(halfedge: Halfedge, ccw: any);
    [Symbol.iterator](): {
        current: Halfedge;
        end: Halfedge;
        ccw: any;
        justStarted: boolean;
        next(): {
            done: boolean;
            value?: undefined;
        } | {
            done: boolean;
            value: import("./vertex").Vertex | undefined;
        };
    };
}
/**
 * This class represents an adjacent edge iterator for a {@link module:Core.Face Face}.
 * @ignore
 * @memberof module:Core
 */
declare class FaceEdgeIterator {
    private _halfedge;
    private _ccw;
    constructor(halfedge: Halfedge, ccw: any);
    [Symbol.iterator](): {
        current: Halfedge;
        end: Halfedge;
        ccw: any;
        justStarted: boolean;
        next(): {
            done: boolean;
            value?: undefined;
        } | {
            done: boolean;
            value: import("./edge").Edge | undefined;
        };
    };
}
/**
 * This class represents an adjacent face iterator for a {@link module:Core.Face Face}.
 * @ignore
 * @memberof module:Core
 */
declare class FaceFaceIterator {
    private _halfedge;
    private _ccw;
    constructor(halfedge: Halfedge, ccw: any);
    [Symbol.iterator](): {
        current: Halfedge;
        end: Halfedge;
        ccw: any;
        justStarted: boolean;
        next(): {
            done: boolean;
            value?: undefined;
        } | {
            done: boolean;
            value: Face | undefined;
        };
    };
}
/**
 * This class represents an adjacent halfedge iterator for a {@link module:Core.Face Face}.
 * @ignore
 * @memberof module:Core
 */
declare class FaceHalfedgeIterator {
    private _halfedge;
    private _ccw;
    constructor(halfedge: Halfedge, ccw: any);
    [Symbol.iterator](): {
        current: Halfedge;
        end: Halfedge;
        ccw: any;
        justStarted: boolean;
        next(): {
            done: boolean;
            value?: undefined;
        } | {
            done: boolean;
            value: Halfedge;
        };
    };
}
/**
 * This class represents an adjacent corner iterator for a {@link module:Core.Face Face}.
 * @ignore
 * @memberof module:Core
 */
declare class FaceCornerIterator {
    private _halfedge;
    private _ccw;
    constructor(halfedge: Halfedge, ccw: any);
    [Symbol.iterator](): {
        current: Halfedge;
        end: Halfedge;
        ccw: any;
        justStarted: boolean;
        next(): {
            done: boolean;
            value?: undefined;
        } | {
            done: boolean;
            value: import("./corner").Corner | undefined;
        };
    };
}
export {};
