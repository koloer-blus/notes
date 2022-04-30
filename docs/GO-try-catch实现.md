# GO try catch

## Go中离谱的错误的处理

在`go`这门语言的学习过程中，我个人非常喜欢使用函数式的写法去拆分函数，这就导致我在对应的多个步骤的功能错误处理过程中陷入了困难的境地。
要么产生严重的回调地狱，像下面这样：
```go
 if err = one(); err == nil {  
  if err = two(); err == nil {  
   if err = three(); err == nil {  
    if err = four(); err == nil {  
     if err = five(); err == nil {  
      commit()  
      return nil  
     } else {  
      rollback()  
      return err  
     }  
    } else {  
     rollback()  
     return err  
    }  
   } else {  
    rollback()  
    return err  
   }  
  } else {  
   rollback()  
   return err  
  }  
 } else {
```

要么存在大量重复的代码，像下面这样：

```go
 if err = one(); err != nil {  
  rollback()  
  return err  
 }  
 if err = two(); err != nil {  
  rollback()  
  return err  
 }  
 if err = three(); err != nil {  
  rollback()  
  return err  
 }  
  
 if err = four(); err != nil {  
  rollback()  
  return err  
 }  
 if err = five(); err != nil {  
  rollback()  
  return err  
 }
```
正好今日看到关于`go`中这类错误的处理，特地膜拜记录下。

## 如何实现？
通过`Do`函数来控制结构体的执行，只要出现错误我们就捕获进入`catch`函数，否则执行完成`try`

```
type Block struct {  
 Try func()  
 Catch func(interface{})  
 Finally func()  
}  
  
func (t Block) Do() {  
 if t.Finally != nil {  
  defer t.Finally()  
 }  
 if t.Catch != nil {  
  defer func() {  
   if r := recover(); r != nil {  
    t.Catch(r)  
   }  
  }()  
 }  
 t.Try()  
}
```


## 参考
- [# golang如何优雅的编写事务代码](https://mp.weixin.qq.com/s/JMeurhmAsYFPjpeMMbPdiQ)