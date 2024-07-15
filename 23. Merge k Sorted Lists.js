/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(lists.length === 0) return null;
    while(lists.length > 1){
        let list1 = lists.shift();
        let list2 = lists.shift();
        let merged = mergedLists(list1, list2);
        lists.push(merged);
    }
    return lists[0];
};

var mergedLists = (list1, list2) => {
let dummy = new ListNode(0);
let head = dummy;
while(list1 && list2){
    if(list1.val <= list2.val){
        dummy.next = list1;
        list1 = list1.next;
    }else{
        dummy.next = list2;
        list2 = list2.next;
    }
    dummy = dummy.next;
}
if(list1 === null){
    dummy.next = list2;
}else{
    dummy.next = list1;
}
return head.next;
}