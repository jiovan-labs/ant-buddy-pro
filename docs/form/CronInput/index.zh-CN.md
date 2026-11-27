---
title: CronInput
toc: content
group: 表单
---

## 组件说明

CronInput 是一个可以通过可视化选项来生成 cron 表达式的组件。

## 导入组件

```tsx | pure
import { CronInput } from '@jiovan-labs/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-CN.tsx"></code>

## 关于「不指定」（`?`）

天和周的「不指定」选项会写入 `?`。这**不是** POSIX/Vixie 标准语法，而是 Quartz / Spring `CronExpression` 的扩展：`?` 只允许出现在**天**和**周**两个字段，表示该字段「无具体值」。

之所以需要它，是因为标准 cron 在这两个字段上取「或」：`* * 1 * 1` 表示「每月 1 号**或**每周一」；而 `* * 1 * *` 的周字段是 `*`、永远命中，等价于每天都执行。想只表达「只看天」或「只看周」，就必须把另一维写成 `?`，例如 `0 0 1 * ?`（每月 1 号）、`0 0 ? * 1`（每周一）。

本组件默认开启该能力（`showBlank` 默认为 `true`），校验器按 `useBlankDay` 放行，且只在**天**/**周**字段放行——写在分、时、月字段会直接报错。两侧同时选「不指定」得到 `* * ? * ?`，校验能通过，但语义退化，建议只在一侧使用。

如果表达式最终交给 Linux crontab / cronie 等不支持 `?` 的解析器执行，请关闭该选项：

```tsx | pure
<CronInput showBlank={false} />
```

关闭后：天/周面板不再渲染「不指定」，校验也会拒绝含 `?` 的表达式（历史数据里的 `?` 会表现为校验失败）。

## 组件属性

| 属性                | 说明                               | 类型                                                                | 默认值                   |
| ------------------- | ---------------------------------- | ------------------------------------------------------------------- | ------------------------ |
| clazzPrefix         | 组件的 CSS 类名前缀                | `string`                                                            | `'abp-cron-input'`       |
| addon               | 默认文本框的附属节点内容           | `React.ReactNode \| (() => React.ReactNode \| undefined)`           | `<FieldTimeOutlined/>`   |
| addonPos            | 默认文本框的附属节点位置           | `'before' \| 'after' \| false`                                      | `'after'`                |
| showSecond          | 秒字段是否参与表达式               | `boolean`                                                           | `false`                  |
| showYear            | 年字段是否参与表达式               | `boolean`                                                           | `false`                  |
| showBlank           | 天/周字段是否允许使用「不指定」    | `boolean`                                                           | `true`                   |
| defaultOpen         | 是否默认展开弹出层                 | `boolean`                                                           | -                        |
| monthAlias          | 月字段是否使用语义别名（如 `JAN`） | `boolean`                                                           | `false`                  |
| weekAlias           | 周字段是否使用语义别名（如 `MON`） | `boolean`                                                           | `true`                   |
| echoValidateError   | 是否回显验证错误到控制台           | `boolean`                                                           | -                        |
| triggerProps        | 弹出层的属性                       | `Omit<TriggerProps, 'popup' \| 'popupVisible' \| 'children'>`       | -                        |
| tabsProps           | 标签页的属性                       | `CronTabProps`                                                      | -                        |
| secondPanelProps    | 秒标签页的属性                     | `SecondPanelProps`                                                  | -                        |
| minutePanelProps    | 分标签页的属性                     | `MinutePanelProps`                                                  | -                        |
| hourPanelProps      | 时标签页的属性                     | `HourPanelProps`                                                    | -                        |
| dayPanelProps       | 天标签页的属性                     | `DayPanelProps`                                                     | -                        |
| monthPanelProps     | 月标签页的属性                     | `MonthPanelProps`                                                   | -                        |
| weekPanelProps      | 周标签页的属性                     | `WeekPanelProps`                                                    | -                        |
| yearPanelProps      | 年标签页的属性                     | `YearPanelProps`                                                    | -                        |
| validateRule        | 是否校验控件                       | `boolean`                                                           | `true`                   |
| locale              | 组件的语言, e.g. 'zh_CN'           | `string`                                                            | -                        |
| localeProps         | 多语言属性                         | `IntlLocaleProps`                                                   | -                        |
| onValidateError     | 验证错误时的回调函数               | `(express?: string, errors?: string[], income?: boolean) => void`   | -                        |
| allowOkEcho         | 是否允许确定按钮回显值             | `boolean`                                                           | -                        |

> 注意: 其他属性继承自 AddonInput 组件。

## 组件方法

通过 `ref` 可以访问以下方法：

| 方法名          | 参数            | 描述                   |
| --------------- | --------------- | ---------------------- |
| isShowSecond    | 无              | 检查是否显示秒标签页   |
| isShowYear      | 无              | 检查是否显示年标签页   |
