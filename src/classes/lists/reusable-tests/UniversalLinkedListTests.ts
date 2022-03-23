import Expectation from "@rbxts/testez/src/Expectation";
import { ILinkedList } from "interfaces/ILinkedList";

export function runUniversalLinkedListTests(
	createList: () => ILinkedList<object>,
	describe: (phrase: string, callback: () => void) => void,
	it: (phrase: string, callback: () => void) => void,
	expect: <T>(value: T) => Expectation<T>,
) {
	describe("clear", () => {
		it("should set head and tail nodes to nil", () => {
			const arrayInput = [{}, {}, {}];

			const list = createList();
			list.pushArrayToHead(arrayInput);

			expect(list.peekValueAtHead()).to.equal(arrayInput[0]);
			expect(list.peekValueAtTail()).to.equal(arrayInput[2]);

			list.clear();

			expect(list.peekValueAtHead()).to.never.be.ok();
			expect(list.peekValueAtTail()).to.never.be.ok();
		});

		it("should reset size", () => {
			const arrayInput = [{}, {}, {}];

			const list = createList();
			list.pushArrayToHead(arrayInput);

			expect(list.size()).to.equal(arrayInput.size());

			list.clear();

			expect(list.size()).to.equal(0);
		});
	});
}
