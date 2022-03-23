import Expectation from "@rbxts/testez/src/Expectation";
import { DoublyLinkedList } from "../DoublyLinkedList";

export function runDoublyLinkedListTests(
	createList: <T extends defined>() => DoublyLinkedList<T>,
	describe: (phrase: string, callback: () => void) => void,
	it: (phrase: string, callback: () => void) => void,
	expect: <T>(value: T) => Expectation<T>,
) {
	describe("getBackwardIterator", () => {
		warn("Not implemented");
	});

	describe("getBackwardValuesIterator", () => {
		warn("Not implemented");
	});

	describe("moveNodesFromDoublyLinkedListToHead", () => {
		warn("Not implemented");
	});

	describe("moveNodesFromDoublyLinkedListToIndex", () => {
		warn("Not implemented");
	});

	describe("moveNodesFromDoublyLinkedListToTail", () => {
		warn("Not implemented");
	});
}
