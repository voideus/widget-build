import { Halfedge } from "./halfedge";
export declare class Edge {
    halfedge?: Halfedge;
    index: number;
    /**
     * This class represents an edge in a {@link module:Core.Mesh Mesh}.
     * @constructor module:Core.Edge
     * @property {module:Core.Halfedge} halfedge One of the halfedges associated with this edge.
     */
    constructor();
    /**
     * Checks whether this edge lies on a boundary.
     * @method module:Core.Edge#onBoundary
     * @returns {boolean}
     */
    onBoundary(): boolean | undefined;
    /**
     * Defines a string representation for this edge as its index.
     * @ignore
     * @method module:Core.Edge#toString
     * @returns {string}
     */
    toString(): number;
}
