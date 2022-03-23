/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
/// <reference types="@rbxts/testez/globals" />

import { CircularSinglyLinkedList } from "./CircularSinglyLinkedList";
import { runCircularLinkedListTests } from "./reusable-tests/CircularLinkedListTests";
import { runUniversalLinkedListTests } from "./reusable-tests/UniversalLinkedListTests";

const createList = <T extends defined>() => new CircularSinglyLinkedList<T>();

export = () => {
	runCircularLinkedListTests(createList, describe, it, expect);
	runUniversalLinkedListTests(createList, describe, it, expect);
};
