---
title: CardTabs
toc: content
group: 布局
---

## 組件說明

與 [Ant Design](https://ant.design) 的 [Tabs](https://ant.design/components/tabs) 組件類似，但 `CardTabs` 采用了卡片樣式和邊框。

## 導入組件

```tsx | pure
import { CardTabs } from '@jiovan-labs/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-TW.tsx"></code>

## 組件屬性

| 屬性           | 描述                 | 類型                                                                                                    | 預設值            |
|----------------|----------------------|---------------------------------------------------------------------------------------------------------|-------------------|
| clazzPrefix    | 組件的 CSS 類名前綴  | `string`                                                                                                | `'abp-card-tabs'` |
| containerClazz | 容器 div 的 CSS 類名 | `string`                                                                                                | -                 |
| containerStyle | 容器 div 的 CSS 樣式 | `React.CSSProperties`                                                                                   | -                 |
| tabBorder      | 是否顯示標簽的邊框   | `boolean`                                                                                               | `true`            |
| tabPlacement   | 標簽的位置           | `'top' \| 'top-end' \| 'bottom' \| 'bottom-end' \| 'start' \| 'end'`                                    | `'top'`           |
| contentBorder  | 是否顯示內容區的邊框 | `boolean`                                                                                               | `true`            |
| inkBar         | 是否顯示活躍指示條   | `boolean`                                                                                               | `true`            |
| inkInset    | 活躍指示條兩端內縮量 | `number`                                                                                                | `12`              |
| size           | 標簽的大小           | `'small' \| 'middle' \| 'large' \| 'extra-small'`                                                       | `'middle'`        |
| presetStyle    | 預設樣式             | `'padding-0' \| 'padding-xxs' \| 'padding-xs' \| 'padding-sm' \| 'padding-md' \| 'padding-lg' \| false` |

> 注意: `tabBorder` 或 `contentBorder` 開啟時 `inkInset` 預設為 `0`（指示條充當接縫），兩者都關閉時預設為 `12`；`tabBorder` 開啟時還會額外為標籤邊框讓出 `lineWidth`（1px），避免指示條端頭蓋住邊框線；內縮量最多取標籤長度的 20%，因此豎向佈局（`start`、`end`）會保留一段短指示條而不會縮成一個點。

> 注意: 其他屬性繼承自 Ant Design 的 <a href="https://ant.design/components/tabs" target="_blank">Tabs</a> 組件。
