/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
/// <reference types="@rbxts/testez/globals" />

import { CircularDoublyLinkedList } from "./CircularDoublyLinkedList";
import { runCircularLinkedListTests } from "./reusable-tests/CircularLinkedListTests";
import { runDoublyLinkedListTests } from "./reusable-tests/DoublyLinkedListTests";
import { runUniversalLinkedListTests } from "./reusable-tests/UniversalLinkedListTests";

const createList = <T extends defined>() => new CircularDoublyLinkedList<T>();

export = () => {
	runCircularLinkedListTests(createList, describe, it, expect);
	runUniversalLinkedListTests(createList, describe, it, expect);
	runDoublyLinkedListTests(createList, describe, it, expect);
};
