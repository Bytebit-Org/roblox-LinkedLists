import Expectation from "@rbxts/testez/src/Expectation";
import { DoublyLinkedList } from "../DoublyLinkedList";

export function runDoublyLinkedListTests(
	createList: <T extends defined>() => DoublyLinkedList<T>,
	describe: (phrase: string, callback: () => void) => void,
	it: (phrase: string, callback: () => void) => void,
	expect: <T>(value: T) => Expectation<T>,
) {
	describe("getBackwardIterator", () => {
		throw "Not implemented";
	});

	describe("getBackwardValuesIterator", () => {
		throw "Not implemented";
	});

	describe("moveNodesFromDoublyLinkedListToHead", () => {
		throw "Not implemented";
	});

	describe("moveNodesFromDoublyLinkedListToIndex", () => {
		throw "Not implemented";
	});

	describe("moveNodesFromDoublyLinkedListToTail", () => {
		throw "Not implemented";
	});
}
