---
title: CronInput
toc: content
group: 表单
---

## 組件說明

CronInput 是壹個可以通過可視化選項來生成 cron 表達式的組件。

## 導入組件

```tsx | pure
import { CronInput } from '@jiovan-labs/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-TW.tsx"></code>

## 關於「不指定」（`?`）

天和周的「不指定」選項會寫入 `?`。這**不是** POSIX/Vixie 標準語法，而是 Quartz / Spring `CronExpression` 的擴展：`?` 只允許出現在**天**和**周**兩個字段，表示該字段「無具體值」。

之所以需要它，是因為標準 cron 在這兩個字段上取「或」：`* * 1 * 1` 表示「每月 1 號**或**每周壹」；而 `* * 1 * *` 的周字段是 `*`、永遠命中，等價於每天都執行。想只表達「只看天」或「只看周」，就必須把另壹維寫成 `?`，例如 `0 0 1 * ?`（每月 1 號）、`0 0 ? * 1`（每周壹）。

本組件默認開啟該能力（`showBlank` 默認為 `true`），校驗器按 `useBlankDay` 放行，且只在**天**/**周**字段放行——寫在分、時、月字段會直接報錯。兩側同時選「不指定」得到 `* * ? * ?`，校驗能通過，但語義退化，建議只在壹側使用。

如果表達式最終交給 Linux crontab / cronie 等不支持 `?` 的解析器執行，請關閉該選項：

```tsx | pure
<CronInput showBlank={false} />
```

關閉後：天/周面板不再渲染「不指定」，校驗也會拒絕含 `?` 的表達式（歷史數據裏的 `?` 會表現為校驗失敗）。

## 組件屬性

| 屬性                | 說明                               | 類型                                                                | 預設值                   |
| ------------------- | ---------------------------------- | ------------------------------------------------------------------- | ------------------------ |
| clazzPrefix         | 組件的 CSS 類名前綴                | `string`                                                            | `'abp-cron-input'`       |
| addon               | 默認文本框的附屬節點內容           | `React.ReactNode \| (() => React.ReactNode \| undefined)`           | `<FieldTimeOutlined/>`   |
| addonPos            | 默認文本框的附屬節點位置           | `'before' \| 'after' \| false`                                      | `'after'`                |
| showSecond          | 秒字段是否參與表達式               | `boolean`                                                           | `false`                  |
| showYear            | 年字段是否參與表達式               | `boolean`                                                           | `false`                  |
| showBlank           | 天/周字段是否允許使用「不指定」    | `boolean`                                                           | `true`                   |
| defaultOpen         | 是否默認展開彈出層                 | `boolean`                                                           | -                        |
| monthAlias          | 月字段是否使用語義別名（如 `JAN`） | `boolean`                                                           | `false`                  |
| weekAlias           | 周字段是否使用語義別名（如 `MON`） | `boolean`                                                           | `true`                   |
| echoValidateError   | 是否回顯驗證錯誤到控制臺           | `boolean`                                                           | -                        |
| triggerProps        | 彈出層的屬性                       | `Omit<TriggerProps, 'popup' \| 'popupVisible' \| 'children'>`       | -                        |
| tabsProps           | 標簽頁的屬性                       | `CronTabProps`                                                      | -                        |
| secondPanelProps    | 秒標簽頁的屬性                     | `SecondPanelProps`                                                  | -                        |
| minutePanelProps    | 分標簽頁的屬性                     | `MinutePanelProps`                                                  | -                        |
| hourPanelProps      | 時標簽頁的屬性                     | `HourPanelProps`                                                    | -                        |
| dayPanelProps       | 天標簽頁的屬性                     | `DayPanelProps`                                                     | -                        |
| monthPanelProps     | 月標簽頁的屬性                     | `MonthPanelProps`                                                   | -                        |
| weekPanelProps      | 周標簽頁的屬性                     | `WeekPanelProps`                                                    | -                        |
| yearPanelProps      | 年標簽頁的屬性                     | `YearPanelProps`                                                    | -                        |
| validateRule        | 是否校驗控件                       | `boolean`                                                           | `true`                   |
| locale              | 組件的語言, e.g. 'zh_TW'           | `string`                                                            | -                        |
| localeProps         | 多語言屬性                         | `IntlLocaleProps`                                                   | -                        |
| onValidateError     | 驗證錯誤時的回調函數               | `(express?: string, errors?: string[], income?: boolean) => void`   | -                        |
| allowOkEcho         | 是否允許確定按鈕回顯值             | `boolean`                                                           | -                        |

> 注意: 其他屬性繼承自 AddonInput 組件。

## 組件方法

通過 `ref` 可以訪問以下方法：

| 方法名          | 參數            | 描述                   |
| --------------- | --------------- | ---------------------- |
| isShowSecond    | 無              | 檢查是否顯示秒標簽頁   |
| isShowYear      | 無              | 檢查是否顯示年標簽頁   |
