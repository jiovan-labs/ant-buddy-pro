# @jiovan-labs/ant-buddy-pro

[![NPM version](https://img.shields.io/npm/v/@jiovan-labs/ant-buddy-pro.svg?style=flat)](https://npmjs.org/package/@jiovan-labs/ant-buddy-pro)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](LICENSE.txt)
[![NPM downloads](http://img.shields.io/npm/dm/@jiovan-labs/ant-buddy-pro.svg?style=flat)](https://npmjs.org/package/@jiovan-labs/ant-buddy-pro)

🏅 Awesome components based on Ant Design & Ant ProComponents ❤️

**Ant Buddy Pro** is a React components library based on [Ant Design](https://ant.design) & [Ant ProComponents](https://procomponents.ant.design), providing more customization and individual components, aiming to provide better experience for React developers.

## Features

🎁 Elegant default configurations assist developers to get started as simple as possible

🎄 Theme capabilities, for customizing complete theme components, are up to you

🚀 By combining Umi v4, esbuild, SWC, persistent cache and other schemes, it brings faster compilation speed than 0.x

🎨 Based on antd 5.0 CSS-in-JS style support, it fully unifies built-in styles and supports custom loading theme

🎮 Easy access, installation and use, fully integrated into Ant Design style

✨ Full support for Ant Design v6 and Pro Components v3. Continuously improving

## Positioning

Ant Buddy Pro is **not** intended to replace Ant Design or Pro-Components, but rather to fill the gaps in enterprise-level development — those niche scenarios where developers keep rewriting the same wheel.

| Layer | Responsibility | Representative Components |
|-------|---------------|---------------------------|
| Core | Layout, Table, Form skeleton | [Ant Design](https://ant.design) |
| Page | ProLayout / ProTable / ProForm | [Pro-Components](https://procomponents.ant.design) |
| **Scenario** | **Fine-grained interactions + Out-of-the-box** | **Ant Buddy Pro** |

### Core Scenario Components

| Component | Problem Solved |
|-----------|---------------|
| [CronInput](https://jiovan-labs.github.io/ant-buddy-pro/form/CronInput) | Visual cron expression editor (graphical selection + natural language hints) |
| [MathInput](https://jiovan-labs.github.io/ant-buddy-pro/form/MathInput) | Math formula input field (powered by MathLive, Chinese menu, LaTeX import) |
| [IconSelect](https://jiovan-labs.github.io/ant-buddy-pro/form/IconSelect) | Icon library search + preview + select (supports Ant Design Icon) |
| [TagInput](https://jiovan-labs.github.io/ant-buddy-pro/form/TagInput) | Tag-style batch input (deduplication, length limits, keyword warnings) |
| [LocaleInput](https://jiovan-labs.github.io/ant-buddy-pro/form/LocaleInput) | Text input field with multi-language dropdown popup |
| [LocaleTextarea](https://jiovan-labs.github.io/ant-buddy-pro/form/LocaleTextarea) | Multiline text input switchable between languages (via tabs) |
| [CollapseForm](https://jiovan-labs.github.io/ant-buddy-pro/form/CollapseForm) | Collapsible form (suitable for comment reply scenarios) |
| [AvatarUpload](https://jiovan-labs.github.io/ant-buddy-pro/form/AvatarUpload) | Displays avatar with upload and crop capability |
| [MenuTabs](https://jiovan-labs.github.io/ant-buddy-pro/layout/MenuTabs) | Integrates Menu with Tabs (similar to Pro settings page) |
| [NotifyBadge](https://jiovan-labs.github.io/ant-buddy-pro/field/NotifyBadge) | Badge with dropdown popup (suitable for notifications and task lists) |
| [RemoteField](https://jiovan-labs.github.io/ant-buddy-pro/field/RemoteField) | Renders fields using remote data |
| [DivideSelect](https://jiovan-labs.github.io/ant-buddy-pro/form/DivideSelect) | Select where label and value are displayed in separate columns |
| [AddonInput](https://jiovan-labs.github.io/ant-buddy-pro/form/AddonInput) | Text input supporting addonBefore/addonAfter, restores early Ant Design Input addon effect |
| [CaptchaInput](https://jiovan-labs.github.io/ant-buddy-pro/form/CaptchaInput) | Provides captcha retrieval button and verification code input (supports rich callbacks and dependent validation) |
| [ChronoSelect](https://jiovan-labs.github.io/ant-buddy-pro/form/ChronoSelect) | Dropdown select for time units (options from Java ChronoUnit) |
| [CipherStrength](https://jiovan-labs.github.io/ant-buddy-pro/form/CipherStrength) | Password strength meter |
| [StretchInput](https://jiovan-labs.github.io/ant-buddy-pro/form/StretchInput) | Dynamically stretchable text input (expands on click) |
| [ExactInput](https://jiovan-labs.github.io/ant-buddy-pro/form/ExactInput) | Text input with checkbox for exact query support |
| [MaskInput](https://jiovan-labs.github.io/ant-buddy-pro/form/MaskInput) | Text input constrained by regular expressions |
| [SortableList](https://jiovan-labs.github.io/ant-buddy-pro/form/SortableList) | Adds drag-to-sort capability to ProFormList |
| [ServerTuple](https://jiovan-labs.github.io/ant-buddy-pro/form/ServerTuple) | Combo input for server host and port |
| [ChronoTuple](https://jiovan-labs.github.io/ant-buddy-pro/form/ChronoTuple) | Duration input (number + time unit, e.g. "3 weeks") |

> **Design Principle**: Each component solves one specific scenario with a simple API, ready to use out of the box.
> They coexist harmoniously with Pro-Components — ProForm provides the form skeleton; AntBuddyPro fills the cells where standard components fall short.

## Quickstart

You can install this package in your React project as follows:

```bash
$ npm install @jiovan-labs/ant-buddy-pro --save
```

Then, you may import components as follows:

```jsx | pure
import { FooBar } from '@jiovan-labs/ant-buddy-pro';
```

Enjoy your coding journey with `ant-buddy-pro` ✌️

## Document

- GitHub pages: [https://jiovan-labs.github.io/ant-buddy-pro](https://jiovan-labs.github.io/ant-buddy-pro)

## License

This project is under the [MIT License](https://mit-license.org/).

## Copyright

Beijing Jiovan Technology Ltd.

## Website

- Jiovan: [https://joivan.com](https://joivan.com)
