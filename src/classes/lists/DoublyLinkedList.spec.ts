/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
/// <reference types="@rbxts/testez/globals" />

import { runAcyclicLinkedListTests } from "./reusable-tests/AcyclicLinkedListTests";
import { DoublyLinkedList } from "./DoublyLinkedList";
import { runUniversalLinkedListTests } from "./reusable-tests/UniversalLinkedListTests";
import { runDoublyLinkedListTests } from "./reusable-tests/DoublyLinkedListTests";

const createList = <T extends defined>() => new DoublyLinkedList<T>();

export = () => {
	runAcyclicLinkedListTests(createList, describe, it, expect);
	runUniversalLinkedListTests(createList, describe, it, expect);
	runDoublyLinkedListTests(createList, describe, it, expect);
};
