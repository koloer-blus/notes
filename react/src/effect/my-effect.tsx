type DependencyList = ReadonlyArray<any>;

let _deps: DependencyList = [];
let isRender = true;

export function myUseEffect(callBack: Function, dependencies?: DependencyList) {
  if (typeof dependencies === 'undefined' || Array.isArray(dependencies)) {
    //dependencies不传值
    if (!dependencies) {
      callBack();
      return;
    }

    if (!dependencies.length && isRender) {
      isRender = false;
      callBack();
      return;
    }
    
    const changed = !dependencies.every((dep, index) => Object.is(dep, _deps[index]));
    if (changed || isRender) {
      callBack();
      return;
    }
  } else {
    throw new Error(`类型"${dependencies}"的参数不能赋给类型“DependencyList | undefined”的参数。`);
  }
}