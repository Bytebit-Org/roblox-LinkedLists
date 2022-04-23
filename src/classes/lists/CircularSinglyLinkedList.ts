import { IReadonlyLinkedList } from "../../interfaces/IReadonlyLinkedList";
import { SinglyLinkedList } from "./SinglyLinkedList";
import { ILinkedListNode } from "../../interfaces/ILinkedListNode";

export class CircularSinglyLinkedList<T extends defined> extends SinglyLinkedList<T> {
	public copyLinkedListValuesToHead(valuesList: IReadonlyLinkedList<T>) {
		super.copyLinkedListValuesToHead(valuesList);

		if (this.headNode !== undefined && this.tailNode !== undefined) {
			this.tailNode.nextNode = this.headNode;
		}
	}

	public copyLinkedListValuesToTail(valuesList: IReadonlyLinkedList<T>) {
		super.copyLinkedListValuesToTail(valuesList);

		if (this.headNode !== undefined && this.tailNode !== undefined) {
			this.tailNode.nextNode = this.headNode;
		}
	}

	public copyValuesToSubList(startIndex: number, endIndex: number): CircularSinglyLinkedList<T> {
		const subList = super.doCopyValuesToSubList(
			startIndex,
			endIndex,
			new CircularSinglyLinkedList(),
		) as CircularSinglyLinkedList<T>;

		subList.tailNode!.nextNode = subList.headNode;

		return subList;
	}

	public filter(
		callback: (value: T, index: number, list: CircularSinglyLinkedList<T>) => boolean | undefined,
	): CircularSinglyLinkedList<T> {
		// TODO
		return this;
	}

	public find(
		predicate: (value: T, index: number, list: CircularSinglyLinkedList<T>) => boolean | undefined,
	): T | undefined {
		// TODO
		return undefined;
	}

	public findIndex(
		predicate: (value: T, index: number, list: CircularSinglyLinkedList<T>) => boolean | undefined,
	): number {
		// TODO
		return 0;
	}

	public forEach(callback: (value: T, index: number, list: CircularSinglyLinkedList<T>) => void): void {
		// TODO
	}

	/**
	 * {@inheritdoc IReadonlyLinkedList.getForwardIterator}
	 * @remarks Because this iterator includes an index, it will not loop despite being
	 * a circular list
	 */
	public getForwardIterator() {
		const iterateNodes = this.getForwardIndexAndNodeTupleIterator();

		const visitedNodes = new Set<ILinkedListNode<T>>();

		return (() => {
			const [index, nextNode] = iterateNodes();

			if (nextNode === undefined) {
				return undefined;
			} else {
				if (visitedNodes.has(nextNode)) {
					// clearly made a full loop at this point
					return undefined;
				} else {
					visitedNodes.add(nextNode);
				}

				return [index, nextNode.value] as LuaTuple<[number, T]>;
			}
		}) as IterableFunction<LuaTuple<[number, T]>>;
	}

	public includes(searchElement: T, fromIndex?: number): boolean {
		// TODO
		return false;
	}

	public indexOf(searchElement: T, fromIndex?: number): number {
		// TODO
		return 0;
	}

	public map<U extends defined>(
		callback: (value: T, index: number, list: CircularSinglyLinkedList<T>) => U,
	): CircularSinglyLinkedList<U> {
		// TODO
		return new SinglyLinkedList<U>();
	}

	public moveNodesFromSinglyLinkedListToHead(otherSinglyLinkedList: CircularSinglyLinkedList<T>) {
		if (otherSinglyLinkedList.isEmpty()) {
			return;
		}

		super.moveNodesFromSinglyLinkedListToHead(otherSinglyLinkedList);

		this.tailNode!.nextNode = this.headNode;
	}

	public moveNodesFromSinglyLinkedListToTail(otherSinglyLinkedList: CircularSinglyLinkedList<T>) {
		if (otherSinglyLinkedList.isEmpty()) {
			return;
		}

		super.moveNodesFromSinglyLinkedListToTail(otherSinglyLinkedList);

		this.tailNode!.nextNode = this.headNode;
	}

	public peekValueAtIndex(index: number) {
		if (index < 1) {
			throw `Index was less than 0`;
		}

		if (index > this.numberOfNodes) {
			throw `Provided index, ${index}, is out of range of list with ${this.numberOfNodes} elements`;
		}

		for (const [currentIndex, currentNode] of this.getForwardIndexAndNodeTupleIterator()) {
			if (currentIndex === index) {
				return currentNode.value;
			}

			if (currentNode === this.tailNode) {
				break;
			}
		}

		// should never get here
		throw `Somehow failed to find index, ${index}, even though it is in bounds`;
	}

	public popHeadValue() {
		if (this.headNode === undefined) {
			return undefined;
		}

		const oldHeadNode = this.headNode;
		const headValue = oldHeadNode.value;

		if (oldHeadNode === this.tailNode) {
			// the list only had one element
			this.headNode = undefined;
			this.tailNode = undefined;
		} else {
			this.headNode = oldHeadNode.nextNode;
			this.tailNode!.nextNode = this.headNode;
		}

		this.numberOfNodes--;

		return headValue;
	}

	public popTailValue() {
		if (this.tailNode === undefined) {
			return undefined;
		}

		const oldTailNode = this.tailNode;
		const tailValue = oldTailNode.value;
		this.tailNode = undefined;

		if (oldTailNode === this.headNode) {
			// the list only had one element
			this.headNode = undefined;
			this.tailNode = undefined;
		} else {
			// set tail node to the last node still in here by
			// iterating and finding which node points to the old tail node
			for (const [_, node] of this.getForwardIndexAndNodeTupleIterator()) {
				if (node.nextNode === oldTailNode) {
					this.tailNode = node;
					break;
				}
			}
			this.tailNode!.nextNode = this.headNode;
		}

		this.numberOfNodes--;

		return tailValue;
	}

	public popValuesToSubList(startIndex: number, endIndex: number): CircularSinglyLinkedList<T> {
		const subList = super.doPopValuesToSubList(
			startIndex,
			endIndex,
			new CircularSinglyLinkedList(),
		) as CircularSinglyLinkedList<T>;

		subList.tailNode!.nextNode = subList.headNode;

		if (this.headNode !== undefined && this.tailNode !== undefined) {
			this.tailNode.nextNode = this.headNode;
		}

		return subList;
	}

	public pushArrayToHead(valuesArray: readonly T[]) {
		if (valuesArray.isEmpty()) {
			return;
		}

		super.pushArrayToHead(valuesArray);

		this.tailNode!.nextNode = this.headNode;
	}

	public pushArrayToTail(valuesArray: readonly T[]) {
		if (valuesArray.isEmpty()) {
			return;
		}

		super.pushArrayToTail(valuesArray);

		this.tailNode!.nextNode = this.headNode;
	}

	public pushToHead(value: T) {
		super.pushToHead(value);

		this.tailNode!.nextNode = this.headNode;
	}

	public pushToTail(value: T) {
		super.pushToTail(value);

		this.tailNode!.nextNode = this.headNode;
	}

	public reduce<U>(
		callback: (accumulator: U, currentValue: T, currentIndex: number, list: CircularSinglyLinkedList<T>) => U,
		initialValue: U,
	): U {
		let currentValue = initialValue;

		for (const [index, value] of this.getForwardIterator()) {
			currentValue = callback(currentValue, value, index, this);
		}

		return currentValue;
	}

	public some(
		callback: (value: T, index: number, list: CircularSinglyLinkedList<T>) => boolean | undefined,
	): boolean {
		// TODO
		return false;
	}

	public sort(compareFunction?: (a: T, b: T) => boolean): this {
		// TODO
		return this;
	}

	public toArray() {
		const array = new Array<T>(this.numberOfNodes);

		for (const [index, node] of this.getForwardIndexAndNodeTupleIterator()) {
			if (index > this.numberOfNodes) {
				// made a full loop
				break;
			}

			array[index - 1] = node.value;
		}

		return array;
	}
}
