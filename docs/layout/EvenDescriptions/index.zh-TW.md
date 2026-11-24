---
title: EvenDescriptions
toc: content
group: 布局
---

## 組件說明

基於 [Ant Design](https://ant.design) 的 [Descriptions](https://ant.design/components/descriptions-cn) 與 [ProDescriptions](https://pro-components.antdigital.dev/components/descriptions.html) 的描述列表組件，強制使用固定表格佈局，使列嚴格按照設定寬度排列，不會被相鄰單元格中的內容擠壓。

> 背景：antd v6 在 `bordered` 模式下會強制 `table-layout: auto`，導致內容較多的列擠壓內容較少（或為空）的列；而非 `bordered` 模式下 antd 預設已是 `fixed`。本組件透過自有類名在 `bordered` 時覆蓋回 `fixed`，預設開啟。因此在非 `bordered` 場景下，切換 `fixed` 不會看到差異。

## 導入組件

```tsx | pure
import { EvenDescriptions } from '@jiovan-labs/ant-buddy-pro';
```

## 使用範例

<code src="./demo.zh-TW.tsx"></code>

## 組件屬性

| 屬性        | 描述                                                       | 類型      | 預設值                     |
|-------------|------------------------------------------------------------|-----------|----------------------------|
| clazzPrefix | 組件的 CSS 類名前綴                                        | `string`  | `'abp-even-descriptions'` |
| fixed       | 是否強制列保持指定的寬度                                   | `boolean` | `true`                     |
| proField    | 是否使用 ProDescriptions，為 `false` 時使用 antd Descriptions | `boolean` | `true`                     |
| columns     | ProDescriptions 的列設定（`proField` 為 `true` 時使用）     | `ProDescriptionsColumn[]`    | -           |
| items       | 描述項陣列（`proField` 為 `false` 時使用）                  | `DescriptionsProps['items']` | -           |

> 注意: 其他屬性繼承自 <a href="https://pro-components.antdigital.dev/components/descriptions.html" target="_blank">ProDescriptions</a>（`proField=true`）或 Ant Design 的 <a href="https://ant.design/components/descriptions-cn" target="_blank">Descriptions</a>（`proField=false`）組件。

## 關於列寬

`fixed` 只負責讓表格採用 `table-layout: fixed`：

- 若**未指定列寬**，各列會平均分配寬度，內容不會擠壓相鄰列（本組件的核心用途，見示範）；
- 若需**指定列寬**，可透過 `styles.label.width` / `styles.content.width` 設定：
  - `proField=true`：寫在 `columns` 的每一項上；
  - `proField=false`：寫在 `items` 的每一項上。

> 注意：`table-layout: fixed` 下列寬由**第一行單元格**決定，請確保同一列在第一行即指定寬度，且各行的寬度設定一致，否則後續行的寬度設定不會生效。
