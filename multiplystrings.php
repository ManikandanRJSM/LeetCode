<?php
class Solution {

    /**
     * @param String $num1
     * @param String $num2
     * @return String
     */
    function multiply($num1, $num2) {
        return (string) ( bcmul($num1, $num2) );
    }
}