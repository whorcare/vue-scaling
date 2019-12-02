export const test: number = 1;

export const findUpNode = (content: any, name: string) => {
  let parent: any = content.$parent;
  let tag: string = parent.name;

  while (parent && tag !== name) {
    parent = parent.$parent;
    if (parent) {
      tag = parent.name;
    }
  }

  return parent;
};
