import { Vector } from "../LinearAlgebra/vector";
import { Corner } from "./corner";
import { Edge } from "./edge";
import { Face } from "./face";
import { Halfedge } from "./halfedge";
import { Vertex } from "./vertex";
export declare class Mesh {
    vertices: Vertex[];
    edges: Edge[];
    faces: Face[];
    corners: Corner[];
    halfedges: Halfedge[];
    boundaries: Face[];
    generators: Array<Halfedge[]>;
    /**
     * This class represents a Mesh.
     * @constructor module:Core.Mesh
     * @property {module:Core.Vertex[]} vertices The vertices contained in this mesh.
     * @property {module:Core.Edge[]} edges The edges contained in this mesh.
     * @property {module:Core.Face[]} faces The faces contained in this mesh.
     * @property {module:Core.Corner[]} corners The corners contained in this mesh.
     * @property {module:Core.Halfedge[]} halfedges The halfedges contained in this mesh.
     * @property {module:Core.Face[]} boundaries The boundary loops contained in this mesh.
     * @property {Array.<module:Core.Halfedge[]>} generators An array of halfedge arrays, i.e.,
     * [[h11, h21, ..., hn1], [h12, h22, ..., hm2], ...] representing this mesh's
     * {@link https://en.wikipedia.org/wiki/Homology_(mathematics)#Surfaces homology generators}.
     */
    constructor();
    /**
     * Computes the euler characteristic of this mesh.
     * @method module:Core.Mesh#eulerCharacteristic
     * @returns {number}
     */
    eulerCharacteristic(): number;
    /**
     * Constructs this mesh.
     * @method module:Core.Mesh#build
     * @param {Object} polygonSoup A polygon soup mesh containing vertex positions and indices.
     * @param {module:LinearAlgebra.Vector[]} polygonSoup.v The vertex positions of the polygon soup mesh.
     * @param {number[]} polygonSoup.f The indices of the polygon soup mesh.
     * @returns {boolean} True if this mesh is constructed successfully and false if not
     * (when this mesh contains any one or a combination of the following - non-manifold vertices,
     *  non-manifold edges, isolated vertices, isolated faces).
     */
    build(polygonSoup: any): boolean;
    /**
     * Preallocates mesh elements.
     * @private
     * @method module:Core.Mesh#preallocateElements
     * @param {module:LinearAlgebra.Vector[]} positions The vertex positions of a polygon soup mesh.
     * @param {number[]} indices The indices of a polygon soup mesh.
     */
    preallocateElements(positions: Vector[], indices: number[]): void;
    /**
     * Checks whether this mesh has isolated vertices.
     * @private
     * @method module:Core.Mesh#hasIsolatedVertices
     * @returns {boolean}
     */
    hasIsolatedVertices(): boolean;
    /**
     * Checks whether this mesh has isolated faces.
     * @private
     * @method module:Core.Mesh#hasIsolatedFaces
     * @returns {boolean}
     */
    hasIsolatedFaces(): boolean;
    /**
     * Checks whether this mesh has non-manifold vertices.
     * @private
     * @method module:Core.Mesh#hasNonManifoldVertices
     * @returns {boolean}
     */
    hasNonManifoldVertices(): boolean;
    /**
     * Assigns indices to this mesh's elements.
     * @private
     * @method module:Core.Mesh#indexElements
     */
    indexElements(): void;
}
/**
 * Assigns an index to each element in elementList. Indices can be accessed by using
 * elements as keys in the returned dictionary.
 * @global
 * @function module:Core.indexElements
 * @param {Object[]} elementList An array of any one of the following mesh elements -
 * vertices, edges, faces, corners, halfedges, boundaries.
 * @returns {Object} A dictionary mapping each element in elementList to a unique index
 * between 0 and |elementList|-1.
 * @example
 * let vertexIndex = indexElements(mesh.vertices);
 * let v = mesh.vertices[0];
 * let i = vertexIndex[v];
 * console.log(i); // prints 0
 */
export declare function indexElements(elementList: any[]): any;
