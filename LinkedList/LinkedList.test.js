import { LinkedList } from "./LinkedList.js";
import { removeDuplicates, union } from "./util.js";

let linkedList;

describe("LinkedList", () => {
  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it("is created", () => expect(linkedList).toBeInstanceOf(LinkedList));
  it("should be initially empty", () => expect(linkedList.isEmpty).toBe(true));

  it("insertAtHead", () => {
    linkedList.insertAtHead(0);
    linkedList.insertAtHead(1);
    linkedList.insertAtHead(2);

    expect(linkedList.printList()).toEqual("2 -> 1 -> 0");
  });

  it("insertAtTail", () => {
    linkedList.insertAtTail(0);
    linkedList.insertAtTail(1);
    linkedList.insertAtTail(2);

    expect(linkedList.printList()).toEqual("0 -> 1 -> 2");
  });

  it("search", () => {
    linkedList.insertAtTail(0);
    linkedList.insertAtTail(1);
    linkedList.insertAtTail(2);

    const results = [
      linkedList.search(1),
      linkedList.search(2),
      linkedList.search(11),
      linkedList.search(0),
    ];

    expect(results).toEqual([true, true, false, true]);
  });

  it("deleteAtHead", () => {
    linkedList.insertAtTail(0);
    linkedList.insertAtTail(1);
    linkedList.insertAtTail(2);
    expect(linkedList.printList()).toEqual("0 -> 1 -> 2");

    linkedList.deleteAtHead();
    linkedList.deleteAtHead();
    expect(linkedList.printList()).toEqual("2");
  });

  it("deleteValue", () => {
    linkedList.insertAtTail(0);
    linkedList.insertAtTail(1);
    linkedList.insertAtTail(2);
    expect(linkedList.printList()).toEqual("0 -> 1 -> 2");

    let deleted1 = linkedList.deleteValue(1);
    let deleted2 = linkedList.deleteValue(8);
    expect(linkedList.printList()).toEqual("0 -> 2");
    expect([deleted1, deleted2]).toEqual([true, false]);

    linkedList.deleteValue(6);
    linkedList.deleteValue(-6);
    expect(linkedList.printList()).toEqual("0 -> 2");

    linkedList.deleteValue(2);
    expect(linkedList.printList()).toEqual("0");
  });

  it("deleteAtTail", () => {
    linkedList.insertAtHead(0);
    linkedList.insertAtHead(1);
    linkedList.insertAtHead(2);
    expect(linkedList.printList()).toEqual("2 -> 1 -> 0");

    linkedList.deleteAtTail();
    expect(linkedList.printList()).toEqual("2 -> 1");

    linkedList.deleteAtTail();
    expect(linkedList.printList()).toEqual("2");
  });

  it("length", () => {
    linkedList.insertAtHead(0);
    linkedList.insertAtHead(1);
    linkedList.insertAtHead(2);
    expect(linkedList.length).toEqual(3);

    linkedList.insertAtHead(3);
    expect(linkedList.length).toEqual(4);

    linkedList.insertAtHead(4);
    expect(linkedList.length).toEqual(5);
  });

  it("removeDuplicates", () => {
    linkedList.insertAtHead(0);
    linkedList.insertAtHead(1);
    linkedList.insertAtHead(1);
    linkedList.insertAtHead(2);
    linkedList.insertAtHead(2);
    linkedList.insertAtHead(3);
    expect(linkedList.printList()).toEqual("3 -> 2 -> 2 -> 1 -> 1 -> 0");

    const linkedList2 = removeDuplicates(linkedList);
    expect(linkedList2.printList()).toEqual("3 -> 2 -> 1 -> 0");

    const linkedList3 = new LinkedList();
    linkedList3.insertAtHead(0);
    linkedList3.insertAtHead(1);
    linkedList3.insertAtHead(1);
    linkedList3.insertAtHead(1);
    linkedList3.insertAtHead(1);
    linkedList3.insertAtHead(1);
    expect(linkedList3.printList()).toEqual("1 -> 1 -> 1 -> 1 -> 1 -> 0");
    expect(removeDuplicates(linkedList3).printList()).toEqual("1 -> 0");
  });

  it("union", () => {
    const list1 = new LinkedList();
    list1.insertAtHead(0);
    list1.insertAtHead(1);
    list1.insertAtHead(2);
    list1.insertAtHead(3);
    expect(list1.printList()).toEqual("3 -> 2 -> 1 -> 0");

    const list2 = new LinkedList();
    list2.insertAtHead(0);
    list2.insertAtHead(1);
    list2.insertAtHead(2);
    list2.insertAtHead(3);
    expect(list2.printList()).toEqual("3 -> 2 -> 1 -> 0");

    const unified = union(list1, list2).printList();
    expect(unified).toEqual("3 -> 2 -> 1 -> 0 -> 3 -> 2 -> 1 -> 0");
  });

  it("findNth", () => {
    const list1 = new LinkedList();
    list1.insertAtHead(0);
    list1.insertAtHead(1);
    list1.insertAtHead(2);
    list1.insertAtHead(3);
    expect(list1.printList()).toEqual("3 -> 2 -> 1 -> 0");

    let nth = list1.findNth(list1, 1)
    expect(nth).toEqual(0);

    nth = list1.findNth(list1, 2)
    expect(nth).toEqual(1);

    nth = list1.findNth(list1, 3)
    expect(nth).toEqual(2);

    nth = list1.findNth(list1, 4)
    expect(nth).toEqual(3);
  });
});
