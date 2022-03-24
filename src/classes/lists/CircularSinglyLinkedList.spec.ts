/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
/// <reference types="@rbxts/testez/globals" />

import { CircularSinglyLinkedList } from "classes/lists/CircularSinglyLinkedList";
import { runCircularLinkedListTests } from "classes/lists/reusable-tests/CircularLinkedListTests";
import { runSinglyLinkedListTests } from "classes/lists/reusable-tests/SinglyLinkedListTests";
import { runUniversalLinkedListTests } from "classes/lists/reusable-tests/UniversalLinkedListTests";

const createList = <T extends defined>() => new CircularSinglyLinkedList<T>();

export = () => {
	runCircularLinkedListTests(createList, describe, it, expect);
	runUniversalLinkedListTests(createList, describe, it, expect);
	runSinglyLinkedListTests(createList, describe, it, expect);
};
