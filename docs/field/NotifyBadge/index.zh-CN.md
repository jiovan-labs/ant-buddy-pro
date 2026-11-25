---
title: NotifyBadge
toc: content
group: 控件
---

## 组件说明

NotifyBadge，提供了一个带下拉框的徽标。

典型的应用场景是，显示一个小图标，下拉展示通知和任务列表。

## 导入组件

```tsx | pure
import { NotifyBadge } from '@jiovan-labs/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-CN.tsx"></code>

## 组件属性

| 属性            | 描述                     | 类型                                                         | 默认值               |
|-----------------|--------------------------|--------------------------------------------------------------|----------------------|
| clazzPrefix     | 组件的 CSS 类名前缀      | `string`                                                     | `'abp-notify-badge'` |
| hyperlinkProps  | 超链接的属性             | `HyperlinkProps`                                             | -                    |
| badgeContent    | 徽标的内容节点           | `React.ReactNode`                                            | `<BellOutlined/>`    |
| badgeProps      | 徽标的属性               | `Omit<BadgeProps, 'children'>`                               | -                    |
| dropdownEnabled | 是否允许下拉弹出层       | `boolean`                                                    | `true`               |
| dropdownProps   | 下拉弹出层的属性         | `Omit<DropdownProps, 'popupRender' \| 'menu' \| 'children'>` | -                    |
| tabsProps       | 标签页的属性             | `MixinTabsProps`                                             | -                    |
| locale          | 组件的语言, e.g. 'zh_CN' | `string`                                                     | -                    |
| localeProps     | 多语言属性               | `IntlLocaleProps`                                            | -                    |

## 弹出层

下拉弹出层没有固定宽度，会跟随当前标签页的内容宽度变化，因此在内容长度不同的标签页之间切换时，宽度可能改变。若需固定宽度，可通过 `dropdownProps.styles.root` 设置——它是 [Dropdown](https://ant.design/components/dropdown-cn#semantic-dom) 的 `root` 语义插槽，作用于弹出层根节点：

```tsx | pure
<NotifyBadge
    dropdownProps={{
        styles: {
            root: { width: 360 },
        },
    }}
    // ...
/>
```

组件默认在弹出层根节点上设置了 `minWidth: 320`，你可以通过 `styles.root` 覆盖调整，以适配自己的内容。
