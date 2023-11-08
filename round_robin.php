<?php
// Online PHP compiler to run PHP program online
// Print "Hello World!" message
$s1 = [1,2,3,11];
$s2 = [4,5,6,7,8,9,10];
$match = [];

while(count($s2) > 0){
    
    foreach($s1 as $key => $value){
        
        if(!isset($match[$value])){
            $match[$value] = $s2[$key];    
        }else{
            if(isset($s2[$key])){
                $match[$value] = $match[$value].','.$s2[$key];
            }else{
                $match[$value] = $match[$value];
            }
                
        }
        unset($s2[$key]);
    }
    $s2 = array_values($s2);
}

print_r($match);
?>
