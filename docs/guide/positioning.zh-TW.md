---
title: 產品定位
toc: content
group: 指南
order: 2
---

## 定位

Ant Buddy Pro **不是**要替代 Ant Design 或 Pro-Components，而是在它們之上填補企業級開發中那些"不得不寫一遍重複輪子"的細分場景。

| 層次 | 職責 | 代表組件 |
|------|-----|---------|
| 通用層 | 佈局、表格、表單骨架 | [Ant Design](https://ant.design) |
| 頁面層 | ProLayout / ProTable / ProForm | [Pro-Components](https://procomponents.ant.design) |
| **場景層** | **細交互 + 開箱即用** | **Ant Buddy Pro** |

## 核心場景組件

| 組件 | 解決的問題 |
|------|-----------|
| [CronInput](https://jiovan-labs.github.io/ant-buddy-pro/form/CronInput) | 定時任務表達式可視化編輯（圖形選擇 + 自然語言提示） |
| [MathInput](https://jiovan-labs.github.io/ant-buddy-pro/form/MathInput) | 數學公式錄入框（基於 MathLive，中文菜單、LaTeX 導入） |
| [IconSelect](https://jiovan-labs.github.io/ant-buddy-pro/form/IconSelect) | 圖標庫搜索 + 預覽 + 選擇（支援 Ant Design Icon） |
| [TagInput](https://jiovan-labs.github.io/ant-buddy-pro/form/TagInput) | 標籤式批量輸入（去重、長度限制、關鍵詞警告） |
| [LocaleInput](https://jiovan-labs.github.io/ant-buddy-pro/form/LocaleInput) | 含多語言下拉彈層的文本輸入字段 |
| [LocaleTextarea](https://jiovan-labs.github.io/ant-buddy-pro/form/LocaleTextarea) | 可切換多種語言輸人的多行文本框 |
| [CollapseForm](https://jiovan-labs.github.io/ant-buddy-pro/form/CollapseForm) | 可折疊展開的表單（適合評論回復場景） |
| [AvatarUpload](https://jiovan-labs.github.io/ant-buddy-pro/form/AvatarUpload) | 顯示頭像並支持上傳和裁切 |
| [MenuTabs](https://jiovan-labs.github.io/ant-buddy-pro/layout/MenuTabs) | 集成 Menu 選單的 Tab 組件（類似 Pro 設定頁） |
| [NotifyBadge](https://jiovan-labs.github.io/ant-buddy-pro/field/NotifyBadge) | 帶下拉彈層的徽標（適合通知和任務列表場景） |
| [RemoteField](https://jiovan-labs.github.io/ant-buddy-pro/field/RemoteField) | 使用遠端數據渲染字段的控件 |
| [DivideSelect](https://jiovan-labs.github.io/ant-buddy-pro/form/DivideSelect) | 選項的標籤和值分開顯示的選擇框 |
| [AddonInput](https://jiovan-labs.github.io/ant-buddy-pro/form/AddonInput) | 支持 addonBefore/addonAfter 的文本輸入框，還原早期 Ant Design Input 的 addon 效果 |
| [CaptchaInput](https://jiovan-labs.github.io/ant-buddy-pro/form/CaptchaInput) | 提供獲取驗證碼按鈕和輸入驗證碼文本框（支持更豐富的回調和依賴校驗） |
| [ChronoSelect](https://jiovan-labs.github.io/ant-buddy-pro/form/ChronoSelect) | 時間單位下拉選擇框（選項來源於 Java ChronoUnit） |
| [CipherStrength](https://jiovan-labs.github.io/ant-buddy-pro/form/CipherStrength) | 密碼強弱程度顯示條 |
| [StretchInput](https://jiovan-labs.github.io/ant-buddy-pro/form/StretchInput) | 可動態拉伸的文本框（點擊時展開） |
| [ExactInput](https://jiovan-labs.github.io/ant-buddy-pro/form/ExactInput) | 帶復選框的文本輸入字段，支持精確查詢特性 |
| [MaskInput](https://jiovan-labs.github.io/ant-buddy-pro/form/MaskInput) | 通過正則表達式限制輸入的文本框 |
| [SortableList](https://jiovan-labs.github.io/ant-buddy-pro/form/SortableList) | 為 ProFormList 增加拖拽排序能力 |
| [ServerTuple](https://jiovan-labs.github.io/ant-buddy-pro/form/ServerTuple) | 輸入服務器主機和端口的組合框 |
| [ChronoTuple](https://jiovan-labs.github.io/ant-buddy-pro/form/ChronoTuple) | 定時時長輸入器（數值 + 時間單位選擇，如"3 週"） |

> **設計原則**：每個組件只解決一個具體場景，API 盡量簡單，開箱即用。
> 它們與 Pro-Components 互不衝突 —— ProForm 負責錶單骨架，AntBuddyPro 負責填充骨架中「標準組件不夠用」的那些格子。
