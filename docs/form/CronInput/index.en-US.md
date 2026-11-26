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

## Properties

| Property            | Description                                                       | Type                                                                | Default                  |
| ------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------ |
| clazzPrefix         | The CSS class prefix of the component                             | `string`                                                            | `'abp-cron-input'`       |
| addon               | The DOM of the addon for the entry field                          | `React.ReactNode \| (() => React.ReactNode \| undefined)`           | `<FieldTimeOutlined/>`   |
| addonPos            | The position of the addon for the entry field                     | `'before' \| 'after' \| false`                                      | `'after'`                |
| showSecond          | Whether the second field takes part in the expression             | `boolean`                                                           | `false`                  |
| showYear            | Whether the year field takes part in the expression               | `boolean`                                                           | `false`                  |
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
