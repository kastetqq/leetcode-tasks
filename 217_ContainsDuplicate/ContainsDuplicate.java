import java.util.Arrays;

public class ContainsDuplicate {
    public static void main(String[] args) {
        
    }   
}
class Solution {
    public boolean containsDuplicate(int[] nums) {
        Arrays.sort(nums);
        boolean duplicate = false;
        for(int i = 0; i < nums.length-1; i++ ){
            if(nums[i] == nums[i+1]){
                duplicate = true;
            }
        }
        return duplicate;
    }
}