# Development Guide

This document describes the development conventions used in **NextBank UI**.

Following these conventions keeps the project consistent and easier to maintain.

---

# Project Structure

```text
src/
└── app/
    ├── core/
    ├── shared/
    ├── layout/
    └── features/
```

---

# Folder Responsibilities

## core

Contains application-wide services and infrastructure.

Examples:

* Authentication
* HTTP Interceptors
* Route Guards
* Global Services
* Configuration
* Error Handling

Do **not** place reusable UI components here.

---

## shared

Contains reusable UI components and utilities.

Examples:

* Buttons
* Inputs
* Dialogs
* Cards
* Pipes
* Directives
* Validators

A component belongs here only if it can be reused by multiple features.

---

## layout

Contains the application layouts.

Examples:

* Public Layout
* Authenticated Layout
* Header
* Sidebar

The layout defines the application's structure.

Business logic should never live here.

---

## features

Contains all business features.

Each feature owns its own pages, components, services and models.

Examples:

```text
features/
├── auth/
├── dashboard/
├── accounts/
├── transactions/
└── settings/
```


# Component Generation

Always use Angular CLI to generate components.

Generate a component:

```bash
ng generate component <path>
```

Short version:

```bash
ng g c <path>
```

Examples:

Generate a layout component:

```bash
ng g c layout/public/public-layout
```

Generate a shared component:

```bash
ng g c shared/components/button
```

Generate a feature component:

```bash
ng g c features/accounts/pages/account-list
```

---

# Component Naming

Use kebab-case for folders and files.

Examples:

```text
account-list
transaction-table
public-layout
```

Component classes use PascalCase.

Examples:

```text
AccountListComponent
TransactionTableComponent
PublicLayoutComponent
```

---

# General Rules

* Use Standalone Components.
* Keep components focused on a single responsibility.
* Avoid creating folders until they are needed.
* Do not duplicate components.
* Prefer reusable components whenever possible.
* Keep business logic out of layout components.
* Organize code by feature, not by technical layer.
