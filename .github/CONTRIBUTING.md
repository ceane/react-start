# Contribution guidelines

Before contributing, it's a good idea to read everything below to make sure you can move fast on contributions to the codebase.

## Development process

Fork the repo, commit features, submit a PR.

### Working with `git`

After forking the repo and cloning the repo, then:

```
git remote add upstream https://github.com/ceane/react-start.git
```

When updating...

```
git fetch upstream
git merge upstream/master
```

### Pull Requests

**Working on your first Pull Request?** You can learn how from this *free* series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

**Please label your PRs with the `Code Review: review-needed` label.** ~~CI will automatically run integration tests, and after passing~~ a reviewer will sign either off on the changes and merge your PR _or_ mark your PR with the `Code review: needs-revision` and leave feedback of what to change.    

*Before* submitting a pull request, please make sure the following is done…

1. Your branch has the latest changes from upstream/master.
2. If you've added code that should be tested, add tests!
3. If you've changed APIs, update the documentation.
4. ~~Ensure the test suite passes.~~ [COMING SOON]
5. ~~Make sure your code lints (`npm run lint`) - we've done our best to make sure these rules match our internal linting guidelines.~~ [OPTIONAL]

After the changes are merged in, the reviewer should update the labels to signify the code has shipped and delete the branch.


#### Debugging

[React Dev Tools Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

### Code Conventions (Global)
* 2 spaces for indentation (no tabs)

### Code Conventions (`.js`, `.jsx`)
* Don't avoid semicolons `;`
* Commas last `,`
* Prefer `'` over `"`
* 80 character line length

### Documentation
* Do not wrap lines at 80 characters
