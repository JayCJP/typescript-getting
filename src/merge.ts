interface AA {
  a: number
}

interface AA {
  b: number
}

const ab: AA = {
  a: 1,
  b: 2
}

function BB() {}

namespace BB {
  export const b = 6
}
BB.b;

class CC {
  public c = 1
}
namespace CC {
  export const cd = 1
}
CC.cd
const ci = new CC
ci.c

enum DD {
  ab,
  cd,
  ef
}

namespace DD {
  export const efg = 1
}

DD.efg

DD.ab
