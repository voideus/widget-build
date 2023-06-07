import { Geometry } from "../GeometryCore/geometry";
import { DenseMatrix } from "../LinearAlgebra/dense-matrix";
import { SparseMatrix } from "../LinearAlgebra/sparse-matrix";
export declare class HeatMethod {
    geometry: Geometry;
    vertexIndex: any;
    A: SparseMatrix;
    F: SparseMatrix;
    /**
     * This class implements the {@link http://cs.cmu.edu/~kmcrane/Projects/HeatMethod/ heat method} to compute geodesic distance
     * on a surface mesh.
     * @constructor module:Projects.HeatMethod
     * @param {module:Core.Geometry} geometry The input geometry of the mesh this class acts on.
     * @property {module:Core.Geometry} geometry The input geometry of the mesh this class acts on.
     * @property {Object} vertexIndex A dictionary mapping each vertex of the input mesh to a unique index.
     * @property {module:LinearAlgebra.SparseMatrix} A The laplace matrix of the input mesh.
     * @property {module:LinearAlgebra.SparseMatrix} F The mean curvature flow operator built on the input mesh.
     */
    constructor(geometry: Geometry);
    /**
     * Computes the vector field X = -∇u / |∇u|.
     * @private
     * @method module:Projects.HeatMethod#computeVectorField
     * @param {module:LinearAlgebra.DenseMatrix} u A dense vector (i.e., u.nCols() == 1) representing the
     * heat that is allowed to diffuse on the input mesh for a brief period of time.
     * @returns {Object} A dictionary mapping each face of the input mesh to a {@link module:LinearAlgebra.Vector Vector}.
     */
    computeVectorField(u: DenseMatrix): any;
    /**
     * Computes the integrated divergence ∇.X.
     * @private
     * @method module:Projects.HeatMethod#computeDivergence
     * @param {Object} X The vector field -∇u / |∇u| represented by a dictionary
     * mapping each face of the input mesh to a {@link module:LinearAlgebra.Vector Vector}.
     * @returns {module:LinearAlgebra.DenseMatrix}
     */
    computeDivergence(X: any): DenseMatrix;
    /**
     * Shifts φ such that its minimum value is zero.
     * @private
     * @method module:Projects.HeatMethod#subtractMinimumDistance
     * @param {module:LinearAlgebra.DenseMatrix} phi The (minimum 0) solution to the poisson equation Δφ = ∇.X.
     */
    subtractMinimumDistance(phi: DenseMatrix): void;
    /**
     * Computes the geodesic distances φ using the heat method.
     * @method module:Projects.HeatMethod#compute
     * @param {module:LinearAlgebra.DenseMatrix} delta A dense vector (i.e., delta.nCols() == 1) containing
     * heat sources, i.e., u0 = δ(x).
     * @returns {module:LinearAlgebra.DenseMatrix}
     */
    compute(delta: DenseMatrix): DenseMatrix;
}
