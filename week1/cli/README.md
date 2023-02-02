Week 1 Command Line Basics

1. Directory Commands:
   mkdir <directoryName> - create new directory
   rmdir <directoryName> - delete directory
   rm -rf <direcoryName> - deletes a directoy and all of its contents

2. File Commands:
   touch <fileName> - create new file
   rm <fileName> - delete file
   less <fileName> - read out the contents of a file in the terminal by page

3. Moving and copying
   mv <source> <distination> - move one file or directory to another location
   cp <source> <distination> - copy one file or directory to another location

4. Navigation via cli
   cd <directory> - change directory
   cd .. - move up one director y
   ls - list the contents of a directory
   ls <directoryName> - list the contents of a directory wile staying in your current directory

5. Editing files with VIM: A command line interface for modifying text files
   vim <fileName> - open the file in the terminal, initially in read-only mode

   VIM commands with file open in terminal:
   i - means "insert": allows you to edit the file
   esc - escape key: puts you back in read-only mode after edit
   :q - allows you to exit the file
   :wq - allows you to save the file once it has been edited. This command is needed if you want to save you edits
