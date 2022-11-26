---
sidebar_position: 1
---

# Variables

`variables` is a dictionary of any variables that you might want to use in the templates.

There is a list of predefined variables.

| Name        | Type      | Description                                                  | Required |
|-------------|:----------|:-------------------------------------------------------------|----------|
| root        | string    | The folder relative to which you want to create files.       | optional |
| createEmpty | boolean   | The flag tells whether to create empty files.                | optional |
| runLinter   | boolean   | The flag tells whether to run ESLint after applying changes. | optional |

After running the CLI and answering questions, all variables can be found in `answers.variables`.
