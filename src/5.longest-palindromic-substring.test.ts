/* https://leetcode.com/problems/longest-palindromic-substring/ */

const isPal = (s: string, start: number, end: number) => {
  let res = "";

  while (!!s[start] && !!s[end] && s[start] === s[end]) {
    res = s.slice(start, end + 1);

    start--;
    end++;
  }

  return res;
};

function longestPalindrome(s: string): string {
  let res = "";

  for (let i = 0; i < s.length; i++) {
    const r1 = isPal(s, i, i);
    const r2 = isPal(s, i, i + 1);

    if (r1.length > res.length) {
      res = r1;
    }
    if (r2.length > res.length) {
      res = r2;
    }
  }

  return res;
}

const TEST_CASES = {
  babad: "bab",
  cbbd: "bb",
  civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth:
    "ranynar",
};

test("5. Longest Palindromic Substring", () => {
  Object.entries(TEST_CASES).forEach(([input, output]) =>
    expect(longestPalindrome(input)).toBe(output)
  );
});
