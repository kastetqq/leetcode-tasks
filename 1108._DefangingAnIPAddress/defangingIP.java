public class defangingIP{
    public static void main(String[] args) {
        Solution solution = new Solution();
        String x  = solution.defangIPaddr("1.1.1.1");
        System.out.println(x);
    }
}

class Solution {
    public String defangIPaddr(String address) {
        String newaddress = address.replace(".", "[.]");
        return newaddress;
    }
}