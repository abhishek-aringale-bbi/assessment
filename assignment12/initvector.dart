void main() {
  String str = "EJLGNAGS9GLI87RLW8RDO460CUZD8103";
  String s1 = str.substring(0, str.length - 4);
  String s2 = str.substring(str.length - 4);
  List<String> ans = [];
  int pos = 0;
  for (int i = 0; i < 4; i++) {
    for (int j = 0; j < int.parse(s2[i]); j++) {
      pos++;
      continue;
    }
    ans.add(s1.substring(pos, pos + 4));
    pos += 4;
  }
  print(ans[3] + ans[2] + ans[1] + ans[1] + '\n');
}
