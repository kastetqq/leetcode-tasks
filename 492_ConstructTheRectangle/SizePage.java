import java.util.Arrays;

public class SizePage{
    public static void main(String[] args) {
        Solution solution = new Solution();
        solution.constructRectangle(122122);
    }   
}

class Solution {
    public int[] constructRectangle(int area) {
        int[] arr = {area, 1}; 
        int temp;
        for(int i = 1; i <= area; i++){
            if(area % i == 0){
                temp = area / i;
                if(temp * i == area && i >= temp){
                    
                    int diff = i - temp;

                    if(arr[0] - arr[1] > diff){
                        arr[1] = temp;
                        arr[0] = i;
                    }
                }
            }
        }
        System.out.println(Arrays.toString(arr));
        return arr;
    }
}