import { Mesh } from "./mesh";
import { Vector } from "../LinearAlgebra/vector";
import { Halfedge } from "./halfedge";
import { Edge } from "./edge";
import { Face } from "./face";
import { Corner } from "./corner";
import { Vertex } from "./vertex";
import { SparseMatrix } from "../LinearAlgebra/sparse-matrix";
export declare class Geometry {
    mesh: Mesh;
    positions: any;
    normRadius: number;
    /**
     * This class represents the geometry of a {@link module:Core.Mesh Mesh}. This includes information such
     * as the position of vertices as well as methods to compute edge lengths, corner
     * angles, face area, normals, discrete curvatures etc.
     * @constructor module:Core.Geometry
     * @param {module:Core.Mesh} mesh The mesh this class describes the geometry of.
     * @param {module:LinearAlgebra.Vector[]} positions An array containing the position of each vertex in a mesh.
     * @param {boolean} normalizePositions flag to indicate whether positions should be normalized. Default value is true.
     * @property {module:Core.Mesh} mesh The mesh this class describes the geometry of.
     * @property {Object} positions A dictionary mapping each vertex to a normalized position.
     */
    constructor(mesh: Mesh, positions: Vector[], normalizePositions?: boolean);
    /**
     * Computes the vector along a halfedge.
     * @method module:Core.Geometry#vector
     * @param {module:Core.Halfedge} h The halfedge along which the vector needs to be computed.
     * @returns {module:LinearAlgebra.Vector}
     */
    vector(h: Halfedge): any;
    /**
     * Computes the length of an edge.
     * @method module:Core.Geometry#length
     * @param {module:Core.Edge} e The edge whose length needs to be computed.
     * @returns {number}
     */
    length(e: Edge): any;
    /**
     * Computes the midpoint of an edge.
     * @method module:Core.Geometry#midpoint
     * @param {module:Core.Edge} e The edge whose midpoint needs to be computed.
     * @returns {number}
     */
    midpoint(e: Edge): any;
    /**
     * Computes the mean edge length of all the edges in a mesh.
     * @method module:Core.Geometry#meanEdgeLength
     * @returns {number}
     */
    meanEdgeLength(): number;
    /**
     * Computes the area of a face.
     * @method module:Core.Geometry#area
     * @param {module:Core.Face} f The face whose area needs to be computed.
     * @returns {number}
     */
    area(f: Face): number;
    /**
     * Computes the total surface area of a mesh.
     * @method module:Core.Geometry#totalArea
     * @returns {number}
     */
    totalArea(): number;
    /**
     * Computes the normal of a face.
     * @method module:Core.Geometry#faceNormal
     * @param {module:Core.Face} f The face whose normal needs to be computed.
     * @returns {module:LinearAlgebra.Vector}
     */
    faceNormal(f: Face): any;
    /**
     * Computes the centroid of a face.
     * @method module:Core.Geometry#centroid
     * @param {module:Core.Face} f The face whose centroid needs to be computed.
     * @returns {module:LinearAlgebra.Vector}
     */
    centroid(f: Face): any;
    /**
     * Computes the circumcenter of a face.
     * @method module:Core.Geometry#circumcenter
     * @param {module:Core.Face} f The face whose circumcenter needs to be computed.
     * @returns {module:LinearAlgebra.Vector}
     */
    circumcenter(f: Face): any;
    /**
     * Computes an orthonormal bases for a face.
     * @method module:Core.Geometry#orthonormalBases
     * @param {module:Core.Face} f The face on which the orthonormal bases needs to be computed.
     * @returns {module:LinearAlgebra.Vector[]} An array containing two orthonormal vectors tangent to the face.
     */
    orthonormalBases(f: Face): any[];
    /**
     * Computes the angle (in radians) at a corner.
     * @method module:Core.Geometry#angle
     * @param {module:Core.Corner} c The corner at which the angle needs to be computed.
     * @returns {number} The angle clamped between 0 and π.
     */
    angle(c: Corner): number;
    /**
     * Computes the cotangent of the angle opposite to a halfedge.
     * @method module:Core.Geometry#cotan
     * @param {module:Core.Halfedge} h The halfedge opposite to the angle whose cotangent needs to be computed.
     * @returns {number}
     */
    cotan(h: Halfedge): number;
    /**
     * Computes the signed angle (in radians) between two adjacent faces.
     * @method module:Core.Geometry#dihedralAngle
     * @param {module:Core.Halfedge} h The halfedge (shared by the two adjacent faces) on which
     * the dihedral angle is computed.
     * @returns {number} The dihedral angle.
     */
    dihedralAngle(h: Halfedge): number;
    /**
     * Computes the barycentric dual area of a vertex.
     * @method module:Core.Geometry#barycentricDualArea
     * @param {module:Core.Vertex} v The vertex whose barycentric dual area needs to be computed.
     * @returns {number}
     */
    barycentricDualArea(v: Vertex): number;
    /**
     * Computes the circumcentric dual area of a vertex.
     * @see {@link http://cs.cmu.edu/~kmcrane/Projects/Other/TriangleAreasCheatSheet.pdf}
     * @method module:Core.Geometry#circumcentricDualArea
     * @param {module:Core.Vertex} v The vertex whose circumcentric dual area needs to be computed.
     * @returns {number}
     */
    circumcentricDualArea(v: Vertex): number;
    /**
     * Computes the normal at a vertex using the "equally weighted" method.
     * @method module:Core.Geometry#vertexNormalEquallyWeighted
     * @param {module:Core.Vertex} v The vertex on which the normal needs to be computed.
     * @returns {module:LinearAlgebra.Vector}
     */
    vertexNormalEquallyWeighted(v: Vertex): Vector;
    /**
     * Computes the normal at a vertex using the "face area weights" method.
     * @method module:Core.Geometry#vertexNormalAreaWeighted
     * @param {module:Core.Vertex} v The vertex on which the normal needs to be computed.
     * @returns {module:LinearAlgebra.Vector}
     */
    vertexNormalAreaWeighted(v: Vertex): Vector;
    /**
     * Computes the normal at a vertex using the "tip angle weights" method.
     * @method module:Core.Geometry#vertexNormalAngleWeighted
     * @param {module:Core.Vertex} v The vertex on which the normal needs to be computed.
     * @returns {module:LinearAlgebra.Vector}
     */
    vertexNormalAngleWeighted(v: Vertex): Vector;
    /**
     * Computes the normal at a vertex using the "gauss curvature" method.
     * @method module:Core.Geometry#vertexNormalGaussCurvature
     * @param {module:Core.Vertex} v The vertex on which the normal needs to be computed.
     * @returns {module:LinearAlgebra.Vector}
     */
    vertexNormalGaussCurvature(v: Vertex): Vector;
    /**
     * Computes the normal at a vertex using the "mean curvature" method (same as the "area gradient" method).
     * @method module:Core.Geometry#vertexNormalMeanCurvature
     * @param {module:Core.Vertex} v The vertex on which the normal needs to be computed.
     * @returns {module:LinearAlgebra.Vector}
     */
    vertexNormalMeanCurvature(v: Vertex): Vector;
    /**
     * Computes the normal at a vertex using the "inscribed sphere" method.
     * @method module:Core.Geometry#vertexNormalSphereInscribed
     * @param {module:Core.Vertex} v The vertex on which the normal needs to be computed.
     * @returns {module:LinearAlgebra.Vector}
     */
    vertexNormalSphereInscribed(v: Vertex): Vector;
    /**
     * Computes the angle defect at a vertex (= 2π minus the sum of incident angles
     * at an interior vertex or π minus the sum of incident angles at a boundary vertex).
     * @method module:Core.Geometry#angleDefect
     * @param {module:Core.Vertex} v The vertex whose angle defect needs to be computed.
     * @returns {number}
     */
    angleDefect(v: Vertex): number;
    /**
     * Computes the (integrated) scalar gauss curvature at a vertex.
     * @method module:Core.Geometry#scalarGaussCurvature
     * @param {module:Core.Vertex} v The vertex whose gauss curvature needs to be computed.
     * @returns {number}
     */
    scalarGaussCurvature(v: Vertex): number;
    /**
     * Computes the (integrated) scalar mean curvature at a vertex.
     * @method module:Core.Geometry#scalarMeanCurvature
     * @param {module:Core.Vertex} v The vertex whose mean curvature needs to be computed.
     * @returns {number}
     */
    scalarMeanCurvature(v: Vertex): number;
    /**
     * Computes the total angle defect (= 2π times the euler characteristic of the mesh).
     * @method module:Core.Geometry#totalAngleDefect
     * @returns {number}
     */
    totalAngleDefect(): number;
    /**
     * Computes the (pointwise) minimum and maximum principal curvature values at a vertex.
     * @method module:Core.Geometry#principalCurvatures
     * @param {module:Core.Vertex} v The vertex on which the principal curvatures need to be computed.
     * @returns {number[]} An array containing the minimum and maximum principal curvature values at a vertex.
     */
    principalCurvatures(v: Vertex): number[];
    /**
     * Builds a sparse laplace matrix. The laplace operator is negative semidefinite;
     * instead we build a positive definite matrix by multiplying the entries of the
     * laplace matrix by -1 and shifting the diagonal elements by a small constant (e.g. 1e-8).
     * @method module:Core.Geometry#laplaceMatrix
     * @param {Object} vertexIndex A dictionary mapping each vertex of a mesh to a unique index.
     * @returns {module:LinearAlgebra.SparseMatrix}
     */
    laplaceMatrix(vertexIndex: any): SparseMatrix;
    /**
     * Builds a sparse diagonal mass matrix containing the barycentric dual area of each vertex
     * of a mesh.
     * @method module:Core.Geometry#massMatrix
     * @param {Object} vertexIndex A dictionary mapping each vertex of a mesh to a unique index.
     * @returns {module:LinearAlgebra.SparseMatrix}
     */
    massMatrix(vertexIndex: any): SparseMatrix;
}
