type DependencyList = ReadonlyArray<any>;
const hooks: any = [];
let _deps: DependencyList = [];
let isRender = true;

export function myUseEffect(callBack: Function, dependencies?: DependencyList) {
  if (typeof dependencies === 'undefined' || Array.isArray(dependencies)) {
    const changed = [
      //不传依赖每次更新
      !dependencies,
      // 传依赖为[] 初次更新
      !dependencies?.length && isRender,
      // 比较依赖
      dependencies?.length && !dependencies.every((dep, index) => Object.is(dep, _deps[index])) || isRender,
    ].every(v => {
      console.log('v is',v);
      return v;
    });
    console.log(changed, dependencies, _deps)

    if (changed) {
      isRender = false;
      _deps = Array.isArray(dependencies) ? dependencies : [];
      callBack();
      return;
    }
  } else {
    throw new Error(`类型"${dependencies}"的参数不能赋给类型“DependencyList | undefined”的参数。`);
  }
}