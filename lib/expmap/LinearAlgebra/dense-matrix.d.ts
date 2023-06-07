export declare class DenseMatrix {
    data: any;
    /**
     * This class represents a real m by n real matrix where every entry, including
     * zero-valued entries, is stored explicitly. Do not create a DenseMatrix
     * from its constructor, instead use static factory methods such as zeros,
     * identity, ones, constant and random.
     * @constructor DenseMatrix
     * @example
     * let A = DenseMatrix.zeros(20, 5);
     * let B = DenseMatrix.identity(10, 10);
     * let C = DenseMatrix.ones(100, 1);
     * let D = DenseMatrix.constant(4.6, 5, 5);
     * let E = DenseMatrix.random(5, 20);
     */
    constructor(data: any);
    /**
     * Deletes the emscripten heap allocated data of this dense matrix.
     * @ignore
     * @method DenseMatrix#delete
     */
    delete(): void;
    /**
     * Initializes a m by n matrix of zeros.
     * @method DenseMatrix.zeros
     * @param {number} m The number of rows in this dense matrix.
     * @param {number} n The number of columns in this dense matrix.
     * @returns {DenseMatrix}
     */
    static zeros(m: number, n?: number): DenseMatrix;
    /**
     * Initializes a m by n identity matrix.
     * @method DenseMatrix.identity
     * @param {number} m The number of rows in this dense matrix.
     * @param {number} n The number of columns in this dense matrix.
     * @returns {DenseMatrix}
     */
    static identity(m: number, n?: number): DenseMatrix;
    /**
     * Initializes a m by n matrix of ones.
     * @method DenseMatrix.ones
     * @param {number} m The number of rows in this dense matrix.
     * @param {number} n The number of columns in this dense matrix.
     * @returns {DenseMatrix}
     */
    static ones(m: number, n?: number): DenseMatrix;
    /**
     * Initializes a m by n constant matrix.
     * @method DenseMatrix.constant
     * @param {number} x The constant value stored in every entry of this dense matrix.
     * @param {number} m The number of rows in this dense matrix.
     * @param {number} n The number of columns in this dense matrix.
     * @returns {DenseMatrix}
     */
    static constant(x: number, m: number, n?: number): DenseMatrix;
    /**
     * Initializes a m by n random matrix.
     * @method DenseMatrix.random
     * @param {number} m The number of rows in this dense matrix.
     * @param {number} n The number of columns in this dense matrix.
     * @returns {DenseMatrix}
     */
    static random(m: number, n?: number): DenseMatrix;
    /**
     * Returns the transpose of this dense matrix.
     * @method DenseMatrix#transpose
     * @returns {DenseMatrix}
     */
    transpose(): DenseMatrix;
    /**
     * Returns the number of rows in this dense matrix.
     * @method DenseMatrix#nRows
     * @returns {number}
     */
    nRows(): any;
    /**
     * Returns the number of columns in this dense matrix.
     * @method DenseMatrix#nCols
     * @returns {number}
     */
    nCols(): any;
    /**
     * Computes the lInfinity, l1 or l2 norm of this dense matrix.
     * @method DenseMatrix#norm
     * @param {number} n Computes the lInfinity norm if n = 0, l1 norm if n = 1
     * and l2 norm if n = 2.
     * @returns {number}
     */
    norm(n?: number): any;
    /**
     * Returns the rank of this dense matrix.
     * @method DenseMatrix#rank
     * @returns {number}
     */
    rank(): any;
    /**
     * Sums all the entries in this dense matrix.
     * @method DenseMatrix#sum
     * @returns {number}
     */
    sum(): any;
    /**
     * Extracts a sub-matrix in the range [r0, r1) x [c0, c1), i.e., a matrix
     * of size (r1 - r0) x (c1 - c0) starting at indices (r0, c0).
     * @method DenseMatrix#subMatrix
     * @param {number} r0 The start row index.
     * @param {number} r1 The end row index (not included).
     * @param {number} c0 The start column index.
     * @param {number} c1 The end column index (not included).
     * @returns {DenseMatrix}
     */
    subMatrix(r0: number, r1: number, c0?: number, c1?: number): DenseMatrix;
    /**
     * A += B
     * @method DenseMatrix#incrementBy
     * @param {DenseMatrix} B The dense matrix added to this dense matrix.
     */
    incrementBy(B: DenseMatrix): void;
    /**
     * A -= B
     * @method DenseMatrix#decrementBy
     * @param {DenseMatrix} B The dense matrix subtracted from this dense matrix.
     */
    decrementBy(B: DenseMatrix): void;
    /**
     * A *= s
     * @method DenseMatrix#scaleBy
     * @param {number} s The number this dense matrix is scaled by.
     */
    scaleBy(s: DenseMatrix): void;
    /**
     * Returns A + B
     * @method DenseMatrix#plus
     * @param {DenseMatrix} B The dense matrix added to this dense matrix.
     * @returns {DenseMatrix}
     */
    plus(B: DenseMatrix): DenseMatrix;
    /**
     * Returns A - B
     * @method DenseMatrix#minus
     * @param {DenseMatrix} B The dense matrix subtracted from this dense matrix.
     * @returns {DenseMatrix}
     */
    minus(B: DenseMatrix): DenseMatrix;
    /**
     * Returns A * s
     * @method DenseMatrix#timesReal
     * @param {number} s The number this dense matrix is multiplied by.
     * @returns {DenseMatrix}
     */
    timesReal(s: DenseMatrix): DenseMatrix;
    /**
     * Returns A * B
     * @method DenseMatrix#timesDense
     * @param {DenseMatrix} B The dense matrix this dense matrix is multiplied by.
     * @returns {DenseMatrix}
     */
    timesDense(B: DenseMatrix): DenseMatrix;
    /**
     * Returns -A
     * @method DenseMatrix#negated
     * @return {DenseMatrix}
     */
    negated(): DenseMatrix;
    /**
     * Returns A(i, j)
     * @method DenseMatrix#get
     * @param {number} i The ith row of this dense matrix.
     * @param {number} j The jth column of this dense matrix.
     * @return {number}
     */
    get(i: number, j?: number): any;
    /**
     * A(i, j) = x
     * @method DenseMatrix#set
     * @param {number} x The real value the (i, j)th entry of this dense matrix is set to.
     * @param {number} i The ith row of this dense matrix.
     * @param {number} j The jth column of this dense matrix.
     */
    set(x: number, i: number, j?: number): void;
    /**
     * Concatenates two dense matrices horizontally.
     * @method DenseMatrix#hcat
     * @param {DenseMatrix} B The dense matrix that is concatenated horizontally
     * with this dense matrix.
     * @return {DenseMatrix}
     */
    hcat(B: DenseMatrix): DenseMatrix;
    /**
     * Concatenates two dense matrices vertically.
     * @method DenseMatrix#vcat
     * @param {DenseMatrix} B The dense matrix that is concatenated vertically
     * with this dense matrix.
     * @return {DenseMatrix}
     */
    vcat(B: DenseMatrix): DenseMatrix;
}
