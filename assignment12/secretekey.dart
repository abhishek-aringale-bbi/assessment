void main() {
  String a = "2TZ1CININJSNAOETOP7TBN4FZEULH3DJKZH7PDLP3C54JJKDOTUIPEGO8097";
  int n = a.length - 4;
  int m = a.length;
  String str1 = a.substring(0, n);
  String str2 = a.substring(n, m);
  String ans = "";
  int i = 0;
  int j = 0;
  while (i < str2.length) {
    String temp = str2[i];
    int idx = int.parse(temp);
    ans += a.substring(j + idx, j + idx + 8);
    j = j + idx + 8;
    i++;
  }
  print(ans.length);
  print(ans);
}
