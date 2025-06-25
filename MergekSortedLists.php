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
     * @param ListNode[] $lists
     * @return ListNode
     */
    function mergeKLists($lists) {
        $arr = [];
        for($i = 0; $i< count($lists); $i++){
            while($lists[$i] != null){
                $arr[] = $lists[$i]->val;
                $lists[$i] = $lists[$i]->next;
            }
        }
        sort($arr);
        $head = new ListNode();
        $node = $head;
        foreach($arr as $key => $val){
            // echo $val;
            $node->next = new ListNode($val);
            $node = $node->next;
        }
        return $head->next;
    }
}
