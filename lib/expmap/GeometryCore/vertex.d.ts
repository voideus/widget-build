import { Halfedge } from "./halfedge";
export declare class Vertex {
    halfedge?: Halfedge;
    index: number;
    /**
     * This class represents a vertex in a {@link module:Core.Mesh Mesh}.
     * @constructor module:Core.Vertex
     * @property {module:Core.Halfedge} halfedge One of the outgoing halfedges associated with this vertex.
     */
    constructor();
    /**
     * Counts the number of edges adjacent to this vertex.
     * @method module:Core.Vertex#degree
     * @returns {number}
     */
    degree(): number;
    /**
     * Checks whether this vertex is isolated, i.e., it has no neighboring vertices.
     * @method module:Core.Vertex#isIsolated
     * @returns {boolean}
     */
    isIsolated(): boolean;
    /**
     * Checks whether this vertex lies on a boundary.
     * @method module:Core.Vertex#onBoundary
     * @returns {boolean}
     */
    onBoundary(): boolean;
    /**
     * Convenience function to iterate over the vertices neighboring this vertex.
     * @method module:Core.Vertex#adjacentVertices
     * @param {boolean} ccw A flag indicating whether iteration should be in CCW or CW order.
     * @returns {module:Core.Vertex}
     * @example
     * let v = mesh.vertices[0];
     * for (let u of v.adjacentVertices()) {
     *     // Do something with u
     * }
     */
    adjacentVertices(ccw?: boolean): VertexVertexIterator;
    /**
     * Convenience function to iterate over the edges adjacent to this vertex.
     * @method module:Core.Vertex#adjacentEdges
     * @param {boolean} ccw A flag indicating whether iteration should be in CCW or CW order.
     * @returns {module:Core.Edge}
     * @example
     * let v = mesh.vertices[0];
     * for (let e of v.adjacentEdges()) {
     *     // Do something with e
     * }
     */
    adjacentEdges(ccw?: boolean): VertexEdgeIterator;
    /**
     * Convenience function to iterate over the faces adjacent to this vertex.
     * @method module:Core.Vertex#adjacentFaces
     * @param {boolean} ccw A flag indicating whether iteration should be in CCW or CW order.
     * @returns {module:Core.Face}
     * @example
     * let v = mesh.vertices[0];
     * for (let f of v.adjacentFaces()) {
     *     // Do something with f
     * }
     */
    adjacentFaces(ccw?: boolean): VertexFaceIterator;
    /**
     * Convenience function to iterate over the halfedges adjacent to this vertex.
     * @method module:Core.Vertex#adjacentHalfedges
     * @param {boolean} ccw A flag indicating whether iteration should be in CCW or CW order.
     * @returns {module:Core.Halfedge}
     * @example
     * let v = mesh.vertices[0];
     * for (let h of v.adjacentHalfedges()) {
     *     // Do something with h
     * }
     */
    adjacentHalfedges(ccw?: boolean): VertexHalfedgeIterator;
    /**
     * Convenience function to iterate over the corners adjacent to this vertex.
     * @method module:Core.Vertex#adjacentCorners
     * @param {boolean} ccw A flag indicating whether iteration should be in CCW or CW order.
     * @returns {module:Core.Corner}
     * @example
     * let v = mesh.vertices[0];
     * for (let c of v.adjacentCorners()) {
     *     // Do something with c
     * }
     */
    adjacentCorners(ccw?: boolean): VertexCornerIterator;
    /**
     * Defines a string representation for this vertex as its index.
     * @ignore
     * @method module:Core.Vertex#toString
     * @returns {string}
     */
    toString(): number;
}
/**
 * This class represents an adjacent vertex iterator for a {@link module:Core.Vertex Vertex}.
 * @ignore
 * @memberof module:Core
 */
declare class VertexVertexIterator {
    private _halfedge?;
    private _ccw;
    constructor(halfedge?: Halfedge, ccw?: any);
    [Symbol.iterator](): {
        current: Halfedge | undefined;
        end: Halfedge | undefined;
        ccw: any;
        justStarted: boolean;
        next(): {
            done: boolean;
            value?: undefined;
        } | {
            done: boolean;
            value: Vertex | undefined;
        };
    };
}
/**
 * This class represents an adjacent edge iterator for a {@link module:Core.Vertex Vertex}.
 * @ignore
 * @memberof module:Core
 */
export declare class VertexEdgeIterator {
    private _halfedge?;
    private _ccw;
    constructor(halfedge: Halfedge, ccw: any);
    [Symbol.iterator](): {
        current: Halfedge | undefined;
        end: Halfedge | undefined;
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
 * This class represents an adjacent face iterator for a {@link module:Core.Vertex Vertex}.
 * @ignore
 * @memberof module:Core
 */
export declare class VertexFaceIterator {
    private _halfedge?;
    private _ccw;
    constructor(halfedge?: Halfedge, ccw?: any);
    [Symbol.iterator](): {
        current: Halfedge | undefined;
        end: Halfedge | undefined;
        ccw: any;
        justStarted: boolean;
        next(): {
            done: boolean;
            value?: undefined;
        } | {
            done: boolean;
            value: import("./face").Face | undefined;
        };
    };
}
/**
 * This class represents an adjacent halfedge iterator for a {@link module:Core.Vertex Vertex}.
 * @ignore
 * @memberof module:Core
 */
export declare class VertexHalfedgeIterator {
    private _halfedge?;
    private _ccw;
    constructor(halfedge?: Halfedge, ccw?: any);
    [Symbol.iterator](): {
        current: Halfedge | undefined;
        end: Halfedge | undefined;
        ccw: any;
        justStarted: boolean;
        next(): {
            done: boolean;
            value?: undefined;
        } | {
            done: boolean;
            value: Halfedge | undefined;
        };
    };
}
/**
 * This class represents an adjacent corner iterator for a {@link module:Core.Vertex Vertex}.
 * @ignore
 * @memberof module:Core
 */
export declare class VertexCornerIterator {
    private _halfedge?;
    private _ccw;
    constructor(halfedge?: Halfedge, ccw?: any);
    [Symbol.iterator](): {
        current: Halfedge | undefined;
        end: Halfedge | undefined;
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
