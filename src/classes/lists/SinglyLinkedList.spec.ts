/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
/// <reference types="@rbxts/testez/globals" />

import { runAcyclicLinkedListTests } from "./reusable-tests/AcyclicLinkedListTests";
import { runUniversalLinkedListTests } from "./reusable-tests/UniversalLinkedListTests";
import { SinglyLinkedList } from "./SinglyLinkedList";

export = () => {
	runAcyclicLinkedListTests(() => new SinglyLinkedList(), describe, it, expect);
	runUniversalLinkedListTests(() => new SinglyLinkedList(), describe, it, expect);
};
