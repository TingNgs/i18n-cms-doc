---
sidebar_position: 1
---

# Integrate a standalone i18n repository into your app

## Add i18n repository as a submodule to your app codebase

For example:

The main repository of this app: https://github.com/TingNgs/i18n-cms

The i18n repository of this app: https://github.com/TingNgs/i18n-cms-locales


```cmd title="Add submodule by running this in the main repository"
git submodule add https://github.com/TingNgs/i18n-cms-locales public/locales
```

Learn more about [git submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules)


## Host json anywhere

TODO