<?php
class ListNode {
    public $val = 0;
    public $next = null;
    function __construct($val = 0, $next = null) {
        $this->val = $val;
        $this->next = $next;
    }
}
 
class Solution {

    /**
     * @param ListNode $l1
     * @param ListNode $l2
     * @return ListNode
     */
    function addTwoNumbers($l1, $l2) {
        $temp1 = $l1;
        $temp2 = $l2;
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

        $arr1 = implode('', array_reverse($arr1));
        $arr2 = implode('', array_reverse($arr2));
        // print_r($arr1, $arr2);   
        $resultArr = array_map('intval', str_split(bcadd($arr1,$arr2)));
        $dummy = new ListNode();
        $head = $dummy;
        for($i = count($resultArr)-1; $i >= 0; $i--){
            $head->next = new ListNode($resultArr[$i]);
            $head = $head->next;

        }
        
        return $dummy->next;
    }
}