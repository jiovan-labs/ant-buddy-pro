---
title: CardTabs
toc: content
group: 布局
---

## 组件说明

与 [Ant Design](https://ant.design) 的 [Tabs](https://ant.design/components/tabs) 组件类似，但 `CardTabs` 采用了卡片样式和边框。

## 导入组件

```tsx | pure
import { CardTabs } from '@jiovan-labs/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-CN.tsx"></code>

## 组件属性

| 属性           | 描述                 | 类型                                                                                                    | 默认值            |
|----------------|----------------------|---------------------------------------------------------------------------------------------------------|-------------------|
| clazzPrefix    | 组件的 CSS 类名前缀  | `string`                                                                                                | `'abp-card-tabs'` |
| containerClazz | 容器 div 的 CSS 类名 | `string`                                                                                                | -                 |
| containerStyle | 容器 div 的 CSS 样式 | `React.CSSProperties`                                                                                   | -                 |
| tabBorder      | 是否显示标签的边框   | `boolean`                                                                                               | `true`            |
| tabPlacement   | 标签的位置           | `'top' \| 'top-end' \| 'bottom' \| 'bottom-end' \| 'start' \| 'end'`                                    | `'top'`           |
| contentBorder  | 是否显示内容区的边框 | `boolean`                                                                                               | `true`            |
| inkBar         | 是否显示活跃指示条   | `boolean`                                                                                               | `true`            |
| inkInset    | 活跃指示条两端内缩量 | `number`                                                                                                | `12`              |
| size           | 标签的大小           | `'small' \| 'middle' \| 'large' \| 'extra-small'`                                                       | `'middle'`        |
| presetStyle    | 预设样式             | `'padding-0' \| 'padding-xxs' \| 'padding-xs' \| 'padding-sm' \| 'padding-md' \| 'padding-lg' \| false` |

> 注意: `tabBorder` 或 `contentBorder` 开启时 `inkInset` 默认为 `0`（指示条充当接缝），两者都关闭时默认为 `12`；`tabBorder` 开启时还会额外为标签边框让出 `lineWidth`（1px），避免指示条端头盖住边框线；内缩量最多取标签长度的 20%，因此竖向布局（`start`、`end`）会保留一段短指示条而不会缩成一个点。

> 注意: 其他属性继承自 Ant Design 的 <a href="https://ant.design/components/tabs" target="_blank">Tabs</a> 组件。
