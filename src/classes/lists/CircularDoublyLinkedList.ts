import { IReadonlyLinkedList } from "../../interfaces/IReadonlyLinkedList";
import { DoublyLinkedList } from "./DoublyLinkedList";
import { ILinkedListNode } from "../../interfaces/ILinkedListNode";

export class CircularDoublyLinkedList<T extends defined> extends DoublyLinkedList<T> {
	public copyLinkedListValuesToHead(valuesList: IReadonlyLinkedList<T>) {
		super.copyLinkedListValuesToHead(valuesList);

		if (this.headNode !== undefined && this.tailNode !== undefined) {
			this.tailNode.nextNode = this.headNode;
			this.headNode.previousNode = this.tailNode;
		}
	}

	public copyLinkedListValuesToTail(valuesList: IReadonlyLinkedList<T>) {
		super.copyLinkedListValuesToTail(valuesList);

		if (this.headNode !== undefined && this.tailNode !== undefined) {
			this.tailNode.nextNode = this.headNode;
			this.headNode.previousNode = this.tailNode;
		}
	}

	public copyValuesToSubList(startIndex: number, endIndex: number): CircularDoublyLinkedList<T> {
		const subList = super.doCopyValuesToSubList(
			startIndex,
			endIndex,
			new CircularDoublyLinkedList(),
		) as CircularDoublyLinkedList<T>;

		subList.tailNode!.nextNode = subList.headNode;
		subList.headNode!.previousNode = subList.tailNode;

		if (this.headNode !== undefined && this.tailNode !== undefined) {
			this.tailNode.nextNode = this.headNode;
			this.headNode.previousNode = this.tailNode;
		}

		return subList;
	}

	public filter(
		callback: (value: T, index: number, list: CircularDoublyLinkedList<T>) => boolean | undefined,
	): CircularDoublyLinkedList<T> {
		// TODO
		return this;
	}

	public find(
		predicate: (value: T, index: number, list: CircularDoublyLinkedList<T>) => boolean | undefined,
	): T | undefined {
		// TODO
		return undefined;
	}

	public findIndex(
		predicate: (value: T, index: number, list: CircularDoublyLinkedList<T>) => boolean | undefined,
	): number {
		// TODO
		return 0;
	}

	public forEach(callback: (value: T, index: number, list: CircularDoublyLinkedList<T>) => void): void {
		// TODO
	}

	/**
	 * {@inheritdoc IReadonlyDoublyLinkedList.getBackwardIterator}
	 * @remarks Because this iterator includes an index, it will not loop despite being
	 * a circular list
	 */
	public getBackwardIterator() {
		const iterateNodes = this.getBackwardIndexAndNodeTupleIterator();

		const visitedNodes = new Set<ILinkedListNode<T>>();

		return (() => {
			const [index, nextNode] = iterateNodes();

			if (nextNode?.value === undefined) {
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

			if (nextNode?.value === undefined) {
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
		callback: (value: T, index: number, list: CircularDoublyLinkedList<T>) => U,
	): CircularDoublyLinkedList<U> {
		// TODO
		return new DoublyLinkedList<U>();
	}

	public moveNodesFromDoublyLinkedListToHead(otherDoublyLinkedList: CircularDoublyLinkedList<T>) {
		if (otherDoublyLinkedList.isEmpty()) {
			return;
		}

		super.moveNodesFromDoublyLinkedListToHead(otherDoublyLinkedList);

		this.tailNode!.nextNode = this.headNode;
		this.headNode!.previousNode = this.tailNode;
	}

	public moveNodesFromDoublyLinkedListToTail(otherDoublyLinkedList: CircularDoublyLinkedList<T>) {
		if (otherDoublyLinkedList.isEmpty()) {
			return;
		}

		super.moveNodesFromDoublyLinkedListToTail(otherDoublyLinkedList);

		this.tailNode!.nextNode = this.headNode;
		this.headNode!.previousNode = this.tailNode;
	}

	public popHeadValue() {
		if (this.headNode === undefined) {
			return undefined;
		}

		const headValue = super.popHeadValue();

		if (this.headNode !== undefined && this.tailNode !== undefined) {
			this.tailNode.nextNode = this.headNode;
			this.headNode.previousNode = this.tailNode;
		}

		return headValue;
	}

	public popTailValue() {
		if (this.tailNode === undefined) {
			return undefined;
		}

		const tailValue = super.popTailValue();

		if (this.headNode !== undefined && this.tailNode !== undefined) {
			this.tailNode.nextNode = this.headNode;
			this.headNode.previousNode = this.tailNode;
		}

		return tailValue;
	}

	public popValuesToSubList(startIndex: number, endIndex: number): CircularDoublyLinkedList<T> {
		const subList = super.doPopValuesToSubList(
			startIndex,
			endIndex,
			new CircularDoublyLinkedList(),
		) as CircularDoublyLinkedList<T>;

		subList.tailNode!.nextNode = subList.headNode;
		subList.headNode!.previousNode = subList.tailNode;

		if (this.headNode !== undefined && this.tailNode !== undefined) {
			this.tailNode.nextNode = this.headNode;
			this.headNode.previousNode = this.tailNode;
		}

		return subList;
	}

	public pushArrayToHead(valuesArray: readonly T[]) {
		if (valuesArray.isEmpty()) {
			return;
		}

		super.pushArrayToHead(valuesArray);

		this.tailNode!.nextNode = this.headNode;
		this.headNode!.previousNode = this.tailNode;
	}

	public pushArrayToTail(valuesArray: readonly T[]) {
		if (valuesArray.isEmpty()) {
			return;
		}

		super.pushArrayToTail(valuesArray);

		this.tailNode!.nextNode = this.headNode;
		this.headNode!.previousNode = this.tailNode;
	}

	public pushToHead(value: T) {
		super.pushToHead(value);

		this.tailNode!.nextNode = this.headNode;
		this.headNode!.previousNode = this.tailNode;
	}

	public pushToTail(value: T) {
		super.pushToTail(value);

		this.tailNode!.nextNode = this.headNode;
		this.headNode!.previousNode = this.tailNode;
	}

	public reduce<U>(
		callback: (accumulator: U, currentValue: T, currentIndex: number, list: CircularDoublyLinkedList<T>) => U,
		initialValue: U,
	): U {
		let currentValue = initialValue;

		for (const [index, value] of this.getForwardIterator()) {
			currentValue = callback(currentValue, value, index, this);
		}

		return currentValue;
	}

	public some(
		callback: (value: T, index: number, list: CircularDoublyLinkedList<T>) => boolean | undefined,
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
