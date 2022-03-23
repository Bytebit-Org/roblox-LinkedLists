import Expectation from "@rbxts/testez/src/Expectation";
import { ILinkedList } from "interfaces/ILinkedList";

export function runUniversalLinkedListTests(
	createList: <T extends defined>() => ILinkedList<T>,
	describe: (phrase: string, callback: () => void) => void,
	it: (phrase: string, callback: () => void) => void,
	expect: <T>(value: T) => Expectation<T>,
) {
	describe("clear", () => {
		it("clear - should set head and tail nodes to nil", () => {
			const arrayInput = ["a", "b", "c"];

			const list = createList();
			list.pushArrayToHead(arrayInput);

			expect(list.peekValueAtHead()).to.equal(arrayInput[0]);
			expect(list.peekValueAtTail()).to.equal(arrayInput[2]);

			list.clear();

			expect(list.peekValueAtHead()).to.never.be.ok();
			expect(list.peekValueAtTail()).to.never.be.ok();
		});

		it("clear - should reset size", () => {
			const arrayInput = ["a", "b", "c"];

			const list = createList();
			list.pushArrayToHead(arrayInput);

			expect(list.size()).to.equal(arrayInput.size());

			list.clear();

			expect(list.size()).to.equal(0);
		});
	});

	describe("copyLinkedListValuesToHead", () => {
		it("copyLinkedListValuesToHead - should do nothing if the input list is empty", () => {
			const arrayInput1 = ["a", "b", "c"];
			const list1 = createList();
			list1.pushArrayToHead(arrayInput1);

			const list2 = createList();

			list1.copyLinkedListValuesToHead(list2);

			expect(list1.size()).to.equal(arrayInput1.size());
			expect(list1.peekValueAtHead()).to.equal(arrayInput1[0]);
			expect(list1.peekValueAtTail()).to.equal(arrayInput1[2]);
		});

		it("copyLinkedListValuesToHead - should change head value and change size without affecting the input list", () => {
			const arrayInput1 = ["a", "b", "c"];
			const list1 = createList();
			list1.pushArrayToHead(arrayInput1);

			const arrayInput2 = ["d", "e", "f"];
			const list2 = createList();
			list2.pushArrayToHead(arrayInput2);

			list1.copyLinkedListValuesToHead(list2);

			expect(list1.size()).to.equal(arrayInput1.size() + arrayInput2.size());
			expect(list1.peekValueAtHead()).to.equal(arrayInput2[0]);
			expect(list1.peekValueAtTail()).to.equal(arrayInput1[2]);

			expect(list2.size()).to.equal(arrayInput2.size());
			expect(list2.peekValueAtHead()).to.equal(arrayInput2[0]);
			expect(list2.peekValueAtTail()).to.equal(arrayInput2[2]);
		});
	});

	describe("copyLinkedListValuesToTail", () => {
		it("copyLinkedListValuesToTail - should do nothing if the input list is empty", () => {
			const arrayInput1 = ["a", "b", "c"];
			const list1 = createList();
			list1.pushArrayToHead(arrayInput1);

			const list2 = createList();

			list1.copyLinkedListValuesToTail(list2);

			expect(list1.size()).to.equal(arrayInput1.size());
			expect(list1.peekValueAtHead()).to.equal(arrayInput1[0]);
			expect(list1.peekValueAtTail()).to.equal(arrayInput1[2]);
		});

		it("copyLinkedListValuesToTail - should change tail value and change size without affecting the input list", () => {
			const arrayInput1 = ["a", "b", "c"];
			const list1 = createList();
			list1.pushArrayToHead(arrayInput1);

			const arrayInput2 = ["d", "e", "f"];
			const list2 = createList();
			list2.pushArrayToHead(arrayInput2);

			list1.copyLinkedListValuesToTail(list2);

			expect(list1.size()).to.equal(arrayInput1.size() + arrayInput2.size());
			expect(list1.peekValueAtHead()).to.equal(arrayInput1[0]);
			expect(list1.peekValueAtTail()).to.equal(arrayInput2[2]);

			expect(list2.size()).to.equal(arrayInput2.size());
			expect(list2.peekValueAtHead()).to.equal(arrayInput2[0]);
			expect(list2.peekValueAtTail()).to.equal(arrayInput2[2]);
		});
	});
}
