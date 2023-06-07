export declare class Vector {
    x: number;
    y: number;
    z: number;
    /**
     * This class represents an element of Euclidean 3-space, along with all the usual
     * vector space operations (addition, multiplication by scalars, etc.).
     * @constructor Vector
     * @property {number} x The x component of this vector. Default value is 0.
     * @property {number} y The y component of this vector. Default value is 0.
     * @property {number} z The z component of this vector. Default value is 0.
     */
    constructor(x?: number, y?: number, z?: number);
    toString(): string;
    /**
     * Computes the Euclidean length of this vector.
     * @method Vector#norm
     * @returns {number}
     */
    norm(): number;
    /**
     * Computes the Euclidean length squared of this vector.
     * @method Vector#norm2
     * @returns {number}
     */
    norm2(): number;
    /**
     * Divides this vector by its Euclidean length.
     * @method Vector#normalize
     */
    normalize(): void;
    /**
     * Returns a normalized copy of this vector.
     * @method Vector#unit
     * @returns {Vector}
     */
    unit(): Vector;
    /**
     * Checks whether this vector's components are finite.
     * @method Vector#isValid
     * @returns {boolean}
     */
    isValid(): boolean;
    /**
     * u += v
     * @method Vector#incrementBy
     * @param {Vector} v The vector added to this vector.
     */
    incrementBy(v: Vector): void;
    /**
     * u -= v
     * @method Vector#decrementBy
     * @param {Vector} v The vector subtracted from this vector.
     */
    decrementBy(v: Vector): void;
    /**
     * u *= s
     * @method Vector#scaleBy
     * @param {number} s The number this vector is scaled by.
     */
    scaleBy(s: number): void;
    /**
     * u /= s
     * @method Vector#divideBy
     * @param {number} s The number this vector is divided by.
     */
    divideBy(s: number): void;
    /**
     * Returns u + v
     * @method Vector#plus
     * @param {Vector} v The vector added to this vector.
     * @return {Vector}
     */
    plus(v: Vector): Vector;
    /**
     * Returns u - v
     * @method Vector#minus
     * @param {Vector} v The vector subtracted from this vector.
     * @return {Vector}
     */
    minus(v: Vector): Vector;
    /**
     * Returns u * s
     * @method Vector#times
     * @param {number} s The number this vector is multiplied by.
     * @return {Vector}
     */
    times(s: number): Vector;
    /**
     * Returns u / s
     * @method Vector#over
     * @param {number} s The number this vector is divided by.
     * @return {Vector}
     */
    over(s: number): Vector;
    /**
     * Returns -u
     * @method Vector#negated
     * @return {Vector}
     */
    negated(): Vector;
    /**
     * Computes the dot product of this vector and v
     * @method Vector#dot
     * @param {Vector} v The vector this vector is dotted with.
     * @return {number}
     */
    dot(v: Vector): number;
    /**
     * Computes the cross product of this vector and v
     * @method Vector#cross
     * @param {Vector} v The vector this vector is crossed with.
     * @return {Vector}
     */
    cross(v: Vector): Vector;
}
