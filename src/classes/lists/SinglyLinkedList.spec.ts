/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
/// <reference types="@rbxts/testez/globals" />

import { runAcyclicLinkedListTests } from "classes/lists/reusable-tests/AcyclicLinkedListTests";
import { runSinglyLinkedListTests } from "classes/lists/reusable-tests/SinglyLinkedListTests";
import { runUniversalLinkedListTests } from "classes/lists/reusable-tests/UniversalLinkedListTests";
import { SinglyLinkedList } from "classes/lists/SinglyLinkedList";

const createList = <T extends defined>() => new SinglyLinkedList<T>();

export = () => {
	runAcyclicLinkedListTests(createList, describe, it, expect);
	runUniversalLinkedListTests(createList, describe, it, expect);
	runSinglyLinkedListTests(createList, describe, it, expect);
};
