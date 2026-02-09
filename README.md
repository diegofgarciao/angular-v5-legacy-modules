# ComicHub: The Great Angular Evolution (v5 to v21)

[![Angular Version](https://img.shields.io/badge/Angular-v5.2.0-red.svg)](https://angular.io/)
[![Node Version](https://img.shields.io/badge/Node-v8.17.0-green.svg)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🚀 Project Overview
**ComicHub** is a comprehensive showcase of Angular's architectural evolution. This repository serves as a technical roadmap for modernizing a legacy comic book inventory system, starting from a **v5 foundation (2017)** and systematically upgrading through the most pivotal versions of the framework until reaching **v21**.

The goal is to demonstrate how to manage significant technical debt, stabilize legacy environments, and execute a seamless switchover to modern standards like Standalone Components and Signals.

---

## 🗺️ The Migration Roadmap

This project is divided into "Era-based" branches/phases:

| Phase | Angular Version | Key Focus | Status |
| :--- | :--- | :--- | :--- |
| **Phase 1** | **v5.2 (Legacy)** | NgModules, HttpModule, RxJS 5, Node 8, View Engine. | 🟢 Completed |
| **Phase 2** | **v13 (Modern)** | Ivy Compiler transition, RxJS 6/7, removal of View Engine. | 🟡 Next |
| **Phase 3** | **v17 (Signals)** | Standalone Components, Block Control Flow (`@if`, `@for`). | ⚪ Planned |
| **Phase 4** | **v21 (Future)** | Full Signals, Signal-based components, Enhanced SSR. | ⚪ Planned |

---

## 🛠️ Technical Highlights (Phase 1: v5 Legacy)

In this first stage, the project focuses on overcoming the constraints of 2017-era tooling:

* **Environment Stabilization:** Manual configuration of `package.json` and `tsconfig.json` to bypass legacy CLI dependency conflicts (Nullish coalescing errors in Node 8).
* **Architecture:** Implementation of the **Smart/Dumb Component pattern** using legacy `NgModules`.
* **Legacy Data Flow:** Utilizing `HttpModule` and `RxJS 5` operators for data fetching.
* **UI/UX:** Custom dashboard implementation using **Flexbox** and **Inline SVG** for charts, avoiding heavy external dependencies.



---

## 💻 Installation & Local Setup (v5)

> [!WARNING]  
> This phase requires **Node v8.17.0**. It is highly recommended to use **NVM** (Node Version Manager).

1.  **Switch to Node 8:**
    ```bash
    nvm use 8.17.0
    ```
2.  **Install Global CLI (v1.5.5):**
    ```bash
    npm install -g @angular/cli@1.5.5
    ```
3.  **Install Dependencies:**
    ```bash
    npm install
    ```
4.  **Run Development Server:**
    ```bash
    ng serve
    ```
    *Navigate to `http://localhost:4200`*

---

## 🧠 Strategic Migration Insights

As a **Tech Lead**, this repository highlights:
* **Refactoring over Rewriting:** How to preserve business logic while upgrading the underlying engine.
* **Dependency Management:** Handling the strict versioning requirements of older TypeScript and RxJS versions.
* **Performance Evolution:** Measuring the impact of the transition from `View Engine` to `Ivy`.

---

## 👤 Author
**Your Name / GitHub Profile**
* *Role:* Tech Lead / Senior Frontend Engineer
* *Purpose:* Demonstrating architectural mastery across the Angular ecosystem.

---
© 2026 ComicHub Project - Evolutionary Engineering.