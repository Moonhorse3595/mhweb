---
sidebar_position: 1
---

# 教程簡介

讓我們來探索 **如何做出更好的網頁**.

## 開始

開始 **做個新網頁**.

或 **試docusaurus** 使用 **[docusaurus.new](https://docusaurus.new)**.

### 你需要的

- [Node.js](https://nodejs.org/en/download/) 版本 16.14 或更高:
  - 當在安裝Node.js時，你應該要確認依賴項

## 生成一個新網站

用 **經典模板** 生成一個新Docusaurus網站

當你跑下面的指令後，模板會自動載入你的專案:

```bash
npm init docusaurus@latest my-website classic
```

你可以在Command Prompt, Powershell, Terminal，或其他
被在編輯器中整合的terminal。

此指令也會自動安裝跑Docusaurus所需要的依賴項

## 執行你的網站

跑用來開發的伺服器(服務器):

```bash
cd my-website
npm run start
```

`cd` 指令會換成你正在工作的目錄。為了用你的Docusaurus網站，你需要
尋找terminal

`npm run start` 命令可以通過開發伺服器本地創建網站，接著用
http://localhost:3000/ 查看成果

打開 `docs/intro.md` (這一頁) 然後編輯一些**行**，這個網頁會 **自動重載**
就可以看到變更了
