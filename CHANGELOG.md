# CHANGELOG

## 2.0.4 - 2023-02-28

- 🐛 fix: loading timeout default true

## 2.0.2 - 2023-02-27

- 🐛 fix: types declare in package.json

## 2.0.1 - 2022-05-17

- 🐛 fix: 兼容老版本直接函数直接调用的方式，并标记 `@deprecated`
- 🐛 fix: 新增类型导出

## 2.0.0 - 2022-05-03

实现全部重写。

- ✨ feat: 新增 icon 类型：success、error、warning、loading

💥 Breaking：

- 导出的 toast：由 `function` => `object`
- 移除 `队列` 模式
- 样式文件无需引入，改为 css-in-js 模式

## 1.2.2 - 2020-04-20

- 🐛 fix: 修复`普通`模式下调用 cancel 时会有预期之外的未捕获异常
- 🐛 fix: 修复`队列`模式下调用 cancel 时会有预期之外的未捕获异常

## 1.2.1 - 2020-04-14

- 🐛 fix: ModalCtrl、helper 循环引用的问题

## 1.2.0 - 2020-01-17

- ✨ feat: support queue mode
- ✨ feat: 支持队列模式

## 1.1.1 - Released

- 🎉
