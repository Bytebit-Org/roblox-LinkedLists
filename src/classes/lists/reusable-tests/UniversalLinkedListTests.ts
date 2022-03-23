import Expectation from "@rbxts/testez/src/Expectation";
import { ILinkedList } from "interfaces/ILinkedList";

export function runUniversalLinkedListTests(
	createList: () => ILinkedList<object>,
	describe: (phrase: string, callback: () => void) => void,
	it: (phrase: string, callback: () => void) => void,
	expect: <T>(value: T) => Expectation<T>,
) {}
