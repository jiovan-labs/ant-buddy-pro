---
title: CronInput
toc: content
group: Form
---

## Description

CronInput, provides a capability that displaying a text input box with a dropdown div that can generate cron expression.

## Import

```tsx | pure
import { CronInput } from '@jiovan-labs/ant-buddy-pro';
```

## Example

<code src="./demo.en-US.tsx"></code>

## About the blank option (`?`)

The "Blank day" / "Blank week" options write `?`. This is **not** POSIX/Vixie syntax but a Quartz / Spring `CronExpression` extension: `?` is only allowed in the **day-of-month** and **day-of-week** fields, meaning that field has no specific value.

It exists because standard cron treats those two fields as an **OR**: `* * 1 * 1` means "on the 1st **or** on Monday", while `* * 1 * *` has `*` in day-of-week which always matches, i.e. it runs every day. To express "day only" or "week only", the other field has to be `?`, e.g. `0 0 1 * ?` (the 1st of every month) or `0 0 ? * 1` (every Monday).

The component enables this by default (`showBlank` defaults to `true`), the validator allows it via `useBlankDay`, and only in the **day**/**week** fields — using `?` in minute, hour or month is rejected. Selecting "blank" on both sides yields `* * ? * ?`, which validates but is degenerate; use it on one side only.

If the expression is consumed by a parser that does not support `?`, e.g. Linux crontab / cronie, turn the option off:

```tsx | pure
<CronInput showBlank={false} />
```

Once disabled: the day/week panels no longer render "Blank", and expressions containing `?` fail validation (including existing data with `?`).

## Properties

| Property            | Description                                                       | Type                                                                | Default                  |
| ------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------ |
| clazzPrefix         | The CSS class prefix of the component                             | `string`                                                            | `'abp-cron-input'`       |
| addon               | The DOM of the addon for the entry field                          | `React.ReactNode \| (() => React.ReactNode \| undefined)`           | `<FieldTimeOutlined/>`   |
| addonPos            | The position of the addon for the entry field                     | `'before' \| 'after' \| false`                                      | `'after'`                |
| showSecond          | Whether the second field takes part in the expression             | `boolean`                                                           | `false`                  |
| showYear            | Whether the year field takes part in the expression               | `boolean`                                                           | `false`                  |
| showBlank           | Whether the blank option (`?`) is available in day/week           | `boolean`                                                           | `true`                   |
| defaultOpen         | Whether the dropdown div is default open or not                   | `boolean`                                                           | -                        |
| monthAlias          | Whether to use the semantic alias (e.g. `JAN`) in the month field | `boolean`                                                           | `false`                  |
| weekAlias           | Whether to use the semantic alias (e.g. `MON`) in the week field  | `boolean`                                                           | `true`                   |
| echoValidateError   | Whether to echo the validation error to console or not            | `boolean`                                                           | -                        |
| triggerProps        | The properties of the dropdown div                                | `Omit<TriggerProps, 'popup' \| 'popupVisible' \| 'children'>`       | -                        |
| tabsProps           | The properties of the tabs                                        | `CronTabProps`                                                      | -                        |
| secondPanelProps    | The properties of the second panel                                | `SecondPanelProps`                                                  | -                        |
| minutePanelProps    | The properties of the minute panel                                | `MinutePanelProps`                                                  | -                        |
| hourPanelProps      | The properties of the hour panel                                  | `HourPanelProps`                                                    | -                        |
| dayPanelProps       | The properties of the day panel                                   | `DayPanelProps`                                                     | -                        |
| monthPanelProps     | The properties of the month panel                                 | `MonthPanelProps`                                                   | -                        |
| weekPanelProps      | The properties of the week panel                                  | `WeekPanelProps`                                                    | -                        |
| yearPanelProps      | The properties of the year panel                                  | `YearPanelProps`                                                    | -                        |
| validateRule        | Whether to validate field with rules                              | `boolean`                                                           | `true`                   |
| locale              | The locale of the component, e.g. 'en_US'                         | `string`                                                            | -                        |
| localeProps         | The props of locale                                               | `IntlLocaleProps`                                                   | -                        |
| onValidateError     | The callback function when validation error occurred              | `(express?: string, errors?: string[], income?: boolean) => void`   | -                        |
| allowOkEcho         | Whether to allow OK button to echo value                          | `boolean`                                                           | -                        |

> Note: Other properties are inherited from AddonInput component.

## Methods

The following methods can be accessed via `ref`:

| Method          | Parameters        | Description                      |
| --------------- | ----------------- | -------------------------------- |
| isShowSecond    | None              | Check if second tab is shown     |
| isShowYear      | None              | Check if year tab is shown       |
