---
title: NotifyBadge
toc: content
group: 控件
---

## 組件說明

NotifyBadge，提供了一個帶下拉框的徽標。

典型的應用場景是，顯示一個小圖標，下拉展示通知和任務列表。

## 導入組件

```tsx | pure
import { NotifyBadge } from '@jiovan-labs/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-TW.tsx"></code>

## 組件屬性

| 屬性            | 描述                     | 類型                                                         | 預設值               |
|-----------------|--------------------------|--------------------------------------------------------------|----------------------|
| clazzPrefix     | 組件的 CSS 類名前綴      | `string`                                                     | `'abp-notify-badge'` |
| hyperlinkProps  | 超鏈接的屬性             | `HyperlinkProps`                                             | -                    |
| badgeContent    | 徽標的內容節點           | `React.ReactNode`                                            | `<BellOutlined/>`    |
| badgeProps      | 徽標的屬性               | `Omit<BadgeProps, 'children'>`                               | -                    |
| dropdownEnabled | 是否允許下拉彈出層       | `boolean`                                                    | `true`               |
| dropdownProps   | 下拉彈出層的屬性         | `Omit<DropdownProps, 'popupRender' \| 'menu' \| 'children'>` | -                    |
| tabsProps       | 標簽頁的屬性             | `MixinTabsProps`                                             | -                    |
| locale          | 組件的語言，e.g. 'zh_TW' | `string`                                                     | -                    |
| localeProps     | 多語言屬性               | `IntlLocaleProps`                                            | -                    |

## 彈出層

下拉彈出層沒有固定寬度，會跟隨當前標簽頁的內容寬度變化，因此在內容長度不同的標簽頁之間切換時，寬度可能改變。若需固定寬度，可透過 `dropdownProps.styles.root` 設定——它是 [Dropdown](https://ant.design/components/dropdown-cn#semantic-dom) 的 `root` 語義插槽，作用於彈出層根節點：

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

組件預設在彈出層根節點上設定了 `minWidth: 320`，你可以透過 `styles.root` 覆蓋調整，以適配自己的內容。
