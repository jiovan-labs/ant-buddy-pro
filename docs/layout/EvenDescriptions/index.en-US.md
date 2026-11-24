---
title: EvenDescriptions
toc: content
group: Layout
---

## Description

A descriptions component based on [Ant Design](https://ant.design)'s [Descriptions](https://ant.design/components/descriptions) and [ProDescriptions](https://pro-components.antdigital.dev/components/descriptions.html). It forces a fixed table layout so that columns are laid out strictly at their specified widths and are not squeezed by content in adjacent cells.

> Background: in bordered mode, antd v6 forces `table-layout: auto`, which makes columns with more content squeeze empty or shorter ones; in non-bordered mode antd already defaults to `fixed`. This component overrides the style back to `fixed` via its own class and is enabled by default. As a result, toggling `fixed` makes no visible difference in non-bordered scenarios.

## Import

```tsx | pure
import { EvenDescriptions } from '@jiovan-labs/ant-buddy-pro';
```

## Example

<code src="./demo.en-US.tsx"></code>

## Properties

| Property    | Description                                                        | Type                         | Default                    |
|-------------|--------------------------------------------------------------------|------------------------------|----------------------------|
| clazzPrefix | The CSS class prefix of the component                              | `string`                     | `'abp-even-descriptions'` |
| fixed       | Whether to force the columns to keep their specified widths        | `boolean`                    | `true`                     |
| proField    | Whether to use ProDescriptions; when `false`, antd Descriptions is used | `boolean`             | `true`                     |
| columns     | The columns of ProDescriptions (used when `proField` is `true`)    | `ProDescriptionsColumn[]`    | -                          |
| items       | The items of the descriptions (used when `proField` is `false`)    | `DescriptionsProps['items']` | -                          |

> Note: Other properties are inherited from <a href="https://pro-components.antdigital.dev/components/descriptions.html" target="_blank">ProDescriptions</a> (when `proField=true`) or Ant Design's <a href="https://ant.design/components/descriptions" target="_blank">Descriptions</a> (when `proField=false`).

## About column widths

`fixed` only makes the table adopt `table-layout: fixed`:

- If **no widths are specified**, columns share the width evenly and content will not squeeze adjacent columns (the core use case of this component, see the demo);
- To **specify widths**, set `styles.label.width` / `styles.content.width`:
  - When `proField=true`: on each entry in `columns`;
  - When `proField=false`: on each entry in `items`.

> Note: under `table-layout: fixed`, column widths are determined by the **first row of cells**. Make sure the width for each column is specified on the first row (and kept consistent across rows); otherwise width settings on later rows will not take effect.
