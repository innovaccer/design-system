# Contributing to Innovaccer Design System

We are happy that you wish to contribute to this project. For that reason, we
present you with this guide.

## Contents

- [Contents](#contents)
- [How Do I Contribute?](#how-do-i-contribute)
- [Development](#development)
- [Reporting Bugs](#reporting-bugs)
    - [Issue Search](#issue-search)
    - [Check If It's Been Fixed](#check-if-its-been-fixed)
- [Request Features](#request-features)
    - [Submitting a Pull Request](#submitting-a-pull-request)
    - [Make Changes and Commit](#make-changes-and-commit)
- [Update Tests](#update-tests)

## How Do I Contribute?

There are different ways to contribute, each with a different level
of involvement and technical knowledge required, such as:

* [Reporting Bugs](#reporting-bugs)
* [Request Features](#request-features)

**Please read this document carefully. It will help maintainers and readers
in solving your issue(s), evaluating your feature request, etc.**

## Development

```bash
#clone repository
git clone https://github.com/innovaccer/design-system.git

#install dependencies
npm install

#start development server
npm run dev
```

The server runs on a random port and url is opened automaticaly in browser as the project uses storybook for component developement and documentation.



## Reporting Bugs

We welcome clear, detailed bug reports.

**Bugs are considered features that are not working as described in
documentation.**

If you've found a bug, please file a report in our [issue tracker](https://github.com/innovaccer/design-system/issues).


### Issue Search

Search to see if it has already been reported via
the issue search.
If so, up-vote it (using GitHub reactions) or add additional helpful details to
the existing issue to show that it's affecting multiple people.
 
### Check If It's Been Fixed

Check if the issue has been fixed — try to reproduce it using the latest
`master` or development branch in the repository.

## Request Features

New feature requests are welcomed. Analyze whether the idea fits within the scope of the project. Then, detail your request, ensuring context and use case is provided.

**Please provide:**

* A detailed description of the advantages of your request
* A potential implementation or design
* Whatever else you have in your mind 🤓

### Submitting a Pull Request

The following are the steps you should follow when creating a pull request.
Subsequent pull requests only need to follow step 3 and beyond.

1. Fork the repository on GitHub
2. Clone the forked repository to your machine
3. Make your changes and commit them to your local repository
4. Rebase and push your commits to your GitHub remote fork/repository
5. Issue a Pull Request to the official repository
6. Your Pull Request is reviewed by a committer and merged into the repository

**NOTE**: While there are other ways to accomplish the steps using other tools,
the examples here will assume most actions will be performed via `git` on
command line.

For more information on maintaining a fork, please see the GitHub Help article
titled [Fork a Repo](https://help.github.com/articles/fork-a-repo/), and
information on [rebasing](https://git-scm.com/book/en/v2/Git-Branching-Rebasing).

### Make Changes and Commit

#### Before Commit

Before committing, **you must ensure there are no linting errors and
all tests pass.**

To ensure the above conditions, run:

For lint:
```bash
npm run lint
```
For tests:
```bash
npm test
```

Then, and only then, you can create your pull request.

#### Commit Guidelines

We follow the [conventional commit messages](https://conventionalcommits.org/)
convention in order to automate CHANGELOG generation and to automate
semantic versioning.

For example:

* `feat: A new feature`
* `fix: A bug fix`

A commit of the type **feat** introduces a new feature to the codebase
(this correlates with MINOR in semantic versioning).

e.g.:

```
feat: xxxxxxxxxx
```

A commit of the type **fix** patches a bug in your codebase (this correlates with PATCH in semantic versioning).

e.g.:

```
fix: xxxxxxxxxx
```

Commits types such as as `docs:`,`style:`,`refactor:`,`perf:`,`test:`
and `chore:` are valid but have no effect on versioning. **It would be great if you use them.**


**PRs that do not follow the commit message guidelines will not be merged.**

## Update Tests

**Any change in source code must include test updates**.


## Update Stories

**For any change in source code of components that changes the API or functioning of the component corresponding story should be updated or a new story should be included**.

