import Expectation from "@rbxts/testez/src/Expectation";
import { SinglyLinkedList } from "../SinglyLinkedList";

export function runSinglyLinkedListTests(
	createList: <T extends defined>() => SinglyLinkedList<T>,
	describe: (phrase: string, callback: () => void) => void,
	it: (phrase: string, callback: () => void) => void,
	expect: <T>(value: T) => Expectation<T>,
) {
	describe("moveNodesFromSinglyLinkedListToHead", () => {
		warn("Not implemented");
	});

	describe("moveNodesFromSinglyLinkedListToIndex", () => {
		warn("Not implemented");
	});

	describe("moveNodesFromSinglyLinkedListToTail", () => {
		warn("Not implemented");
	});
}
