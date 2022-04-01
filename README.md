# node-ts-js-template

Template repository for Javascript and Typescript projects.

## Setup

### First commit

1. Update the README.md

2. Run the following:
```
git add README.md
git branch -M dev
git commit -m "update readme"
git push -u origin dev
```

### Create staging/master 

**NOTE** Only required if "Include all branches" was NOT checked at creation.
```
git checkout -b staging
git push -u origin staging

git checkout -b master
git push -u origin master
```

### Protect branches
1. Go to the repo in github
2. Click "settings->Branches"
3. Add rules for `dev`,`staging`, and `master`

    - Check "Require a pull request before merging"
    - Check "Require approvals"
    - Check "Restrict who can push to matching branches"
    - Click "Create" at bottom

### Update `package.json`
1. Update `name`
2. Update `repository`
3. Update `version`
4. Update `devDependencies`

### Update .vscode/settings.json
* Change `workbench.colorCustomizations` in .vscode/settings.json
    * use a color that has not been used prior

### Update Code
You are now ready to add your code.

## Standards

### Branches
#### Naming
All branches should be named `ENG-XXX-<< description >>`. The << description >> should summarize the work that is being done for the ticket ENG-XXX. A good starting point for << description >> could be the title of the ticket.

If there are muliple tickets addressed in the branch the name should be `ENG-XXX/ENG-YYY/ENG-ZZZ-<< description >>`
> **example**
>  
> \# ENG-111/ENG-112/ENG-113-critical-bug-fixes
> 
```
git checkout -b ENG-111/ENG-112/ENG-113-critical-bug-fixes
```

#### Pushing to protected branches
In very rare occasions there is a need to push directly to `dev`, `staging`, or `master`. 

When such an occasion occurs the following must happen:
1. Alert the slack [#dev](https://teamaikon.slack.com/archives/C66KSCW4C) channel of the reason.
2. Create a Jira task to review the commits. 

### PRs
Naming: Each PR should start with [ENG-XXX] - \<< description >>
 
If there are multiple tickets in the PR write them in a list: 
> **example**: 
> 
> [ENG-XXX,ENG-YYY,ENG-ZZZ] - Some description

See the [PR template](.github/pull_request_template.md).

## Build
New repos will use [.circleci/config.yml](.circleci/config.yml)

Existing repos may use a file in the root named `circleci.yml`

### Setup
Step to set up the environment. Things like `npm install` and setting up the development .env for testing.

### Test
Step to run the tests.

### Deploy
Step to deploy the application. This usually includes a `npm build` and possibly some type of deployment command. For AppEngine this would be a `gcloud app deploy`