<?php

class Solution {

    /**
     * @param Integer[] $num
     * @param Integer $k
     * @return Integer[]
     */
    function addToArrayForm($num, $k) {
        // $k1 = ;
        return array_map('intval', str_split(bcadd(implode('', $num), $k)));
    }
}