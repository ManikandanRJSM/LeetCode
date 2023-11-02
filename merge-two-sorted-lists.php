<?php

/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val = 0, $next = null) {
 *         $this->val = $val;
 *         $this->next = $next;
 *     }
 * }
 */
class Solution {

    /**
     * @param ListNode $list1
     * @param ListNode $list2
     * @return ListNode
     */
    function mergeTwoLists($list1, $list2) {
        $temp1 = $list1;
        $temp2 = $list2;
        $arr1 = [];
        $arr2 = [];
        
        while($temp1 != null){
            $arr1[] = $temp1->val;
            $temp1 = $temp1->next;
        }
        while($temp2 != null){
            $arr2[] = $temp2->val;
            $temp2 = $temp2->next;
        }
        
        $mergearr = array_merge($arr1, $arr2);
        sort($mergearr);
        $mergearr = array_reverse($mergearr);
        // print_r($mergearr);
        $dummy = new ListNode();
        $head = $dummy;
        for($i = count($mergearr) - 1; $i >= 0; $i--){
            $head->next = new ListNode($mergearr[$i]);
            $head = $head->next;
        }
        return $dummy->next;
    }
}