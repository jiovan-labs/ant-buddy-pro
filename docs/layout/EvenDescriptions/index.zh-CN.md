---
title: EvenDescriptions
toc: content
group: 布局
---

## 组件说明

基于 [Ant Design](https://ant.design) 的 [Descriptions](https://ant.design/components/descriptions-cn) 与 [ProDescriptions](https://pro-components.antdigital.dev/components/descriptions.html) 的描述列表组件，强制使用固定表格布局，使列严格按设定宽度排列，不会被相邻单元格中的内容挤压。

> 背景：antd v6 在 `bordered` 模式下会强制 `table-layout: auto`，导致内容较多的列挤压内容较少（或为空）的列；而非 `bordered` 模式下 antd 默认已是 `fixed`。本组件通过自有类名在 `bordered` 时覆盖回 `fixed`，默认开启。因此在非 `bordered` 场景下，切换 `fixed` 不会看到差异。

## 导入组件

```tsx | pure
import { EvenDescriptions } from '@jiovan-labs/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-CN.tsx"></code>

## 组件属性

| 属性        | 描述                                                       | 类型      | 默认值                     |
|-------------|------------------------------------------------------------|-----------|----------------------------|
| clazzPrefix | 组件的 CSS 类名前缀                                        | `string`  | `'abp-even-descriptions'` |
| fixed       | 是否强制列保持指定的宽度                                   | `boolean` | `true`                     |
| proField    | 是否使用 ProDescriptions，为 `false` 时使用 antd Descriptions | `boolean` | `true`                     |
| columns     | ProDescriptions 的列配置（`proField` 为 `true` 时使用）     | `ProDescriptionsColumn[]`    | -           |
| items       | 描述项数组（`proField` 为 `false` 时使用）                  | `DescriptionsProps['items']` | -           |

> 注意: 其他属性继承自 <a href="https://pro-components.antdigital.dev/components/descriptions.html" target="_blank">ProDescriptions</a>（`proField=true`）或 Ant Design 的 <a href="https://ant.design/components/descriptions-cn" target="_blank">Descriptions</a>（`proField=false`）组件。

## 关于列宽

`fixed` 只负责让表格采用 `table-layout: fixed`：

- 若**未指定列宽**，各列会平均分配宽度，内容不会挤压相邻列（本组件的核心用途，见 demo）；
- 若需**指定列宽**，可通过 `styles.label.width` / `styles.content.width` 设置：
  - `proField=true`：写在 `columns` 的每一项上；
  - `proField=false`：写在 `items` 的每一项上。

> 注意：`table-layout: fixed` 下列宽由**第一行单元格**决定，请确保同一列在第一行即指定宽度，且各行列宽设置一致，否则后续行的宽度设置不会生效。
