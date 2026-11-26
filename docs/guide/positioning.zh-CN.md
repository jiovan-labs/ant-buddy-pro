---
title: 产品定位
toc: content
group: 指南
order: 2
---

## 项目定位

Ant Buddy Pro **不是**要替代 Ant Design 或 Pro-Components，而是在它们之上填补企业级开发中那些"不得不写一遍重复轮子"的细分场景。

| 层次 | 职责 | 代表组件 |
|------|-----|---------|
| 通用层 | 布局、表格、表单骨架 | [Ant Design](https://ant.design) |
| 页面层 | ProLayout / ProTable / ProForm | [Pro-Components](https://procomponents.ant.design) |
| **场景层** | **细交互 + 开箱即用** | **Ant Buddy Pro** |

### 核心场景组件一览

| 组件 | 解决的问题 |
|------|-----------|
| [CronInput](https://jiovan-labs.github.io/ant-buddy-pro/form/CronInput) | 定时任务表达式可视化编辑（图形选择 + 自然语言提示） |
| [MathInput](https://jiovan-labs.github.io/ant-buddy-pro/form/MathInput) | 数学公式录入框（基于 MathLive，中文菜单、LaTeX 导入） |
| [IconSelect](https://jiovan-labs.github.io/ant-buddy-pro/form/IconSelect) | 图标库搜索 + 预览 + 选择（支持 Ant Design Icon） |
| [TagInput](https://jiovan-labs.github.io/ant-buddy-pro/form/TagInput) | 标签式批量输入（去重、长度限制、关键词警告） |
| [LocaleInput](https://jiovan-labs.github.io/ant-buddy-pro/form/LocaleInput) | 含多语言下拉框的文本输入字段 |
| [LocaleTextarea](https://jiovan-labs.github.io/ant-buddy-pro/form/LocaleTextarea) | 可切换多种语言输入的多行文本框 |
| [CollapseForm](https://jiovan-labs.github.io/ant-buddy-pro/form/CollapseForm) | 可折叠展开的表单（适合评论回复场景） |
| [AvatarUpload](https://jiovan-labs.github.io/ant-buddy-pro/form/AvatarUpload) | 显示头像并支持上传和裁剪 |
| [MenuTabs](https://jiovan-labs.github.io/ant-buddy-pro/layout/MenuTabs) | 集成 Menu 菜单的 Tab 组件（类似 Pro 设置页） |
| [NotifyBadge](https://jiovan-labs.github.io/ant-buddy-pro/field/NotifyBadge) | 带下拉框的徽标（适合通知和任务列表场景） |
| [RemoteField](https://jiovan-labs.github.io/ant-buddy-pro/field/RemoteField) | 使用远程数据渲染字段的控件 |
| [DivideSelect](https://jiovan-labs.github.io/ant-buddy-pro/form/DivideSelect) | 选项的标签和值分开显示的选择框 |
| [AddonInput](https://jiovan-labs.github.io/ant-buddy-pro/form/AddonInput) | 支持 addonBefore/addonAfter 的文本输入框，还原早期 Ant Design Input 的 addon 效果 |
| [CaptchaInput](https://jiovan-labs.github.io/ant-buddy-pro/form/CaptchaInput) | 提供获取验证码按钮和输入验证码文本框（支持更丰富的回调和依赖校验） |
| [ChronoSelect](https://jiovan-labs.github.io/ant-buddy-pro/form/ChronoSelect) | 时间单位下拉选择框（选项来源于 Java ChronoUnit） |
| [CipherStrength](https://jiovan-labs.github.io/ant-buddy-pro/form/CipherStrength) | 密码强弱程度显示条 |
| [StretchInput](https://jiovan-labs.github.io/ant-buddy-pro/form/StretchInput) | 可动态拉伸的文本框（点击时展开） |
| [ExactInput](https://jiovan-labs.github.io/ant-buddy-pro/form/ExactInput) | 带复选框的文本输入字段，支持精确查询特性 |
| [MaskInput](https://jiovan-labs.github.io/ant-buddy-pro/form/MaskInput) | 通过正则表达式限制输入的文本框 |
| [SortableList](https://jiovan-labs.github.io/ant-buddy-pro/form/SortableList) | 为 ProFormList 增加拖拽排序能力 |
| [ServerTuple](https://jiovan-labs.github.io/ant-buddy-pro/form/ServerTuple) | 输入服务器主机和端口的组合框 |
| [ChronoTuple](https://jiovan-labs.github.io/ant-buddy-pro/form/ChronoTuple) | 定时时长输入器（数值 + 时间单位选择，如"3 周"） |

> **设计原则**：每个组件只解决一个具体场景，API 尽量简单，开箱即用。
> 它们与 Pro-Components 互不冲突 —— ProForm 负责表单骨架，AntBuddyPro 负责填充骨架中"标准组件不够用"的那些格子。
