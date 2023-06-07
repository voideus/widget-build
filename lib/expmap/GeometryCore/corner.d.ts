import { Halfedge } from "./halfedge";
export declare class Corner {
    halfedge?: Halfedge;
    index: number;
    /**
     * This class represents a corner in a {@link module:Core.Mesh Mesh}. It is a convenience
     * wrapper around {@link module:Core.Halfedge Halfedge} - each corner stores the halfedge opposite to it.
     * @constructor module:Core.Corner
     * @property {module:Core.Halfedge} halfedge The halfedge opposite to this corner.
     */
    constructor();
    /**
     * The vertex this corner lies on.
     * @member module:Core.Corner#vertex
     * @type {module:Core.Vertex}
     */
    get vertex(): import("./vertex").Vertex | undefined;
    /**
     * The face this corner is contained in.
     * @member module:Core.Corner#face
     * @type {module:Core.Face}
     */
    get face(): import("./face").Face | undefined;
    /**
     * The next corner (in CCW order) in this corner's face.
     * @member module:Core.Corner#next
     * @type {module:Core.Corner}
     */
    get next(): Corner | undefined;
    /**
     * The previous corner (in CCW order) in this corner's face.
     * @member module:Core.Corner#prev
     * @type {module:Core.Corner}
     */
    get prev(): Corner | undefined;
    /**
     * Defines a string representation for this corner as its index.
     * @ignore
     * @method module:Core.Corner#toString
     * @returns {string}
     */
    toString(): number;
}
