# Guideline for Pull Request Review

## Introduction

Code review is an essential part of the software development life cycle and is also one of the most challenging and time-consuming aspects of the software development process, requiring experienced team members to spend time reading, thinking about, assessing, and responding to new feature, fix, and system implementations.

Here are some guidelines to assist you in reviewing pull requests.

## Guidelines

Before jumping straight to the code changes, some obvious things should be addressed first.

**Pull Request Checklist:**

1. [Commit Message](https://github.com/innovaccer/design-system/blob/master/CONTRIBUTING.md#commit-guidelines) (spell checks, commit lint etc.)
2. Appropriate title of pull request
3. Number of commits (should be one commit, unless required)
4. Check if there should be single pull request or multiple pull requests
5. Source branch [naming convention](https://github.com/innovaccer/design-system/blob/master/CONTRIBUTING.md#branch-naming-conventions) and check the target branch of pull request
6. Check if recent changes have not broken any existing functionalities and that all pipeline checks have been passed

**Some mandatory Soft Skills for developers while reviewing pull request**

We should always keep three things in mind, no matter how strong your team bonding is at a personal level.

**HRT** - It stands for **H**umility, **R**espect, **T**rust

Just by simple selection of words we can create a lot of positive impact and eventually constructive disagreement.

**Best pull request review practices**

- **_Know what to look for in pull request._**

  It's important to go into code reviews knowing what to look for. Look for crucial elements such as logic, structure, style, functionality, performance, test coverage, design, readability, and maintainability.

  Review the code with certain questions in mind. For example:

  - Is it clear to me what the code does?
  - Does the code fulfil the requirements?
  - Is the code breaking some other functionality/creating new bug?

- **_Check no more than 400 lines at a time._**

  You're less likely to detect bugs if you try to evaluate too many lines of code at once. A code review session should be limited to 400 lines or less.

- **_Provide feedback that helps._**

  Try to be constructive rather than critical in your feedback. This can be accomplished by asking questions rather than making comments. Remember to give both constructive and positive feedback.

  | Do's                                                    | Dont's                                                                                                                                                             |
  | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
  | Variable names are not good and wrong. Change it.       | Can we have a better variable name? As this is a little ambiguous to me because showModal looks like an action and isVisibleModal can be a better name for a flag. |
  | Please shorten the function body                        | This function is too lengthy to preserve the context while reading. Can we break into two functions for getTableData and renderTable?                              |
  | This approach is wrong. Please change it to simpler one | This approach is fine. But following a simpler “for loop” can be more readable for this use case and it will be more readable. What say?                           |

- **_Decide on a process._**

  The author and the reviewer will share responsibility. The more explicit the review procedure, the less likely it is that anyone will make an error.

  Pull request review process:

  1. **DRAFT**: You can open a pull request in a draft state to show progress or request early feedback.
  2. **READY FOR REVIEW**: This is the state when your code should be ready, rebased, pipeline successful, and ready to merge. This way, the review can be done efficiently without wasting any time.
  3. **CHANGES REQUESTED**: Fix the requested changes or discuss whether a fix is needed. There should be necessary comments added to the pull request to support the discussion.
  4. **APPROVED**: The reviewer, after careful review, approves the pull request for merging.
  5. **MERGED**: After the pull request is approved, someone with merge access can take the changes forward and merge them into the target branch.

**Code Review**

1. Using proper names for variables, constants, and functions
   :x: | :heavy_check_mark:
   ----|----------------------
   `let showModal = false` | `let isVisibleModal = false`
   `let data = []`| `let usersList = [];`
   `getTableData().then(res => “bla bla”)`|`getUsersList().then(user => “bla bla”)`
   `let name = startCase(user.fullName)`|`let userDisplayName = startCase(user.fullName);`
   `let newUsersList = usersList`| `let usersListCopy = cloneDeep(usersList)`

2. File length and function Body length.

   If the length of the file exceeds 300-400 lines, then it should be broken into pure functions, and functions can be imported from other files to adhere to the SRP (Single Responsibility Principle).

   Same goes for lengthy function bodies. It should be broken into multiple functions.

   :x:

   ```js
   users.map(user, index) => {
      // code for conditions to check if data is valid
      // code for rendering if above condition is true
   }
   ```

   :heavy_check_mark:

   ```js
   // small pure functions that can be reused or moved to other files easily
   let isValidUser = (user) => {
     // return a boolean value for valid user
   };

   let renderUser = (user, index) => ;
   users.filter(isValidUser).map((user) => {
      // return jsx
   });
   ```

3. Mutation of global objects and other variables

   Mutating objects can lead to unwanted side effects, introduce bugs that are hard to trace, and make code difficult to test. We should always be more cautious while reviewing such code.

   :x:

   ```js
   let users = [1, 2, 3];
   // to add another user
   users.push(4);
   ```

   :heavy_check_mark:

   ```js
   let users = [1, 2, 3];
   // to add another user
   users = addNewUser(users, 4);
   ```

4. Avoid Code Repetition

   DRY (don’t repeat yourself): This clearly says that repetition is always bad for maintenance. But at the same time, we should not try to fit similar-looking components into one; differentiation on the basis of flags is a bad practice.

   :x:

   ```js
   let users = [1, 2];
   renderUserInfo(users[0]);
   renderUserInfo(users[1]);
   ```

   :heavy_check_mark:

   ```js
   let users = [1, 2];
   users.forEach((user) => renderUserInfo());
   ```

5. Using new native functions of programming languages

   We should aggressively use new features and educate others about them. At the end, we must harness the full power of any programming language.

   :x:

   ```js
   let count = parseInt(response.dataSize, 10)
   const doesContains = someList.indexOf(“foo”) > -1
   ```

   :heavy_check_mark:

   ```js
   let count += response.dataSize
   const doesContains = someList.includes(“foo”)
   ```

6. External dependencies or libraries

   A reviewer should carefully analyse the addition of new dependencies and libraries. External dependencies pose a significant threat to any application's long-term stability and viability. There are consequences that need to be considered if any dependency is added.

   - We’ll have no control over changes.
   - Libraries can be incompatible with each other.
   - Increase in bundle size
   - Security issues in the dependency or library code.

   See if the use of library can be avoided using features of the programming language itself.

   :x:

   ```js
   import reduce from “random-npm-reduce-package”
   let result = reduce(arr, myReduceFunction)
   ```

   :heavy_check_mark:

   ```js
   let result = arr.reduce(myReduceFunction);
   ```

7. Default imports

   Let's not spend resources on items we don't need right now. We will import them as needed. This results in a large chunk size and, eventually, a poor user experience.

   :x:

   ```js
   import {startCase} from “lodash”;
   ```

   :heavy_check_mark:

   ```js
   import startCase from “lodash/startCase”
   ```

8. Identifying error-prone areas

   Most of the time, our code breaks when we have not handled edge cases properly. Accessing nested objects and unhandled promises are very common error areas.

   :x:

   ```js
   let count = parseInt(response.dataSize, 10);
   ```

   :heavy_check_mark:

   ```js
   try {
     let count = parseInt(response.dataSize, 10);
   } catch (error) {
     handleAPIError(error);
   }
   ```

9. Writing meaningful comments

   The sole purpose of comments is to describe how and why code works to other developers, and to yourself. So, comments should be concise and meaningful to improve the developer experience.

   Some code comment practices:

   - Make use of code annotations or tags such as `@returns and @param`.
   - Explain why you are doing something.
   - Write comments as you code, instead of coding in one go and adding comments later on.

   :x:

   ```js
   function sum(a, b) {
     return a + b; // Adds a in b and returns the result
   }
   ```

   :heavy_check_mark:

   ```js
   /**
    * Returns the sum of a and b
    * @param {number} a
    * @param {number} b
    * @returns {number}
    */
   function sum(a, b) {
     return a + b;
   }
   ```
