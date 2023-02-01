Week 1 git Basics

1. Download and install Git: type command "git version" to confirm
2. Create a github account
3. Download Visual Studio Code
4. Connect VSCode to GitHub
5. Initialize a new git project
   -create a new folder
   -open the new folder in VSCode
   -open a terminal in VSCode and type the command: "git init". This will initialize a new git project and allow versino control to your project.
   -create a new file in order to have something for git to track
   -Basic Git commands:
   1. Tracking git changes:
      git add -A - adds all changed file for git to track
      git add <fileName> - adds a specific file for git to track
      git commit -m '<commit message>' - enables you to write a message about what you are committing for future reference
   2. Branch commands
      git branch - check which branch you are currently working in
      git checkout <branchName> - check out a new branch based off of the branch you are currently working in
      git checkout -b <branchName> - creates and checks out a new branch based off the branch you are currently working in
      git branch -D <fileName> - deletes a branch by name (note you cannot run this branch with working in the branch to be deleted)
      git pull <branchName> - pulls down the latest changes in a remote branch on github
      git push origin <branchName> - pushes changes to a remote branch on github
      git fetch origin <branchName> - fetches a remote branch you don't have locally
