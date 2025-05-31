public class RansomNote {
    public static void main(String[] args) {
    }
}

class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
        int[] count = new int[26];
        if (ransomNote.length() > magazine.length()) return false;

        for (char c : magazine.toCharArray()) {
            count[c - 'a']++;
        }

        for (char c : ransomNote.toCharArray()) {
            if(--count[c-'a'] < 0) return false;
        }
        return true;
    }
}