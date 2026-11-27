---
title: CardTabs
toc: content
group: Layout
---

## Description

Similar to [Tabs](https://ant.design/components/tabs) of [Ant Design](https://ant.design), but `CardTabs` with `card` style and borders.

## Import

```tsx | pure
import { CardTabs } from '@jiovan-labs/ant-buddy-pro';
```

## Example

<code src="./demo.en-US.tsx"></code>

## Properties

| Property       | Description                             | Type                                                                                                    | Default           |
|----------------|-----------------------------------------|---------------------------------------------------------------------------------------------------------|-------------------|
| clazzPrefix    | The CSS class prefix of the component   | `string`                                                                                                | `'abp-card-tabs'` |
| containerClazz | The CSS class name of the container div | `string`                                                                                                | -                 |
| containerStyle | The CSS style of the container div      | `React.CSSProperties`                                                                                   | -                 |
| tabBorder      | Whether to display the tab border       | `boolean`                                                                                               | `true`            |
| tabPlacement   | The position of the tabs                | `'top' \| 'top-end' \| 'bottom' \| 'bottom-end' \| 'start' \| 'end'`                                    | `'top'`           |
| contentBorder  | Whether to display the content border   | `boolean`                                                                                               | `true`            |
| inkBar         | Whether to display the ink bar          | `boolean`                                                                                               | `true`            |
| inkInset    | The inset of both ends of the ink bar   | `number`                                                                                                | `12`              |
| size           | The size of the tabs                    | `'small' \| 'middle' \| 'large' \| 'extra-small'`                                                       | `'middle'`        |
| presetStyle    | The preset style of the component       | `'padding-0' \| 'padding-xxs' \| 'padding-xs' \| 'padding-sm' \| 'padding-md' \| 'padding-lg' \| false` |

> Note: `inkInset` defaults to `0` when `tabBorder` or `contentBorder` is enabled (the ink bar acts as the seam), and to `12` when both are disabled. When `tabBorder` is enabled the component also reserves one `lineWidth` (1px) for the tab border, so the ink bar never covers the border ends. The inset is capped at 20% of the tab length, so vertical placements (`start`, `end`) keep a short indicator instead of collapsing into a point.

> Note: Other properties are inherited from Ant Design's <a href="https://ant.design/components/tabs" target="_blank">Tabs</a> component.
