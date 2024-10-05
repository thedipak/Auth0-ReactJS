# Auth0-ReactJS
This repository contains implementations of the most popular and commonly used Auth0 features. It can be used as a learning resource or as a guide for securely setting up Auth0 in your projects.


# Setup - installation

//below command uses bebel but it's much better if you use vite.

npx create-react-app frontend --template typescript

npm install react-router-dom auth0-react primereact axios

npm install @types/react-router-dom @types/axios



# Setting.json (user's settings)

{
  
  // ===================
  // Editor Settings
  // ===================
  "editor.fontSize": 13.7, // Set font size in the editor
  "editor.fontFamily": "Dank Mono", // Set font family for the editor
  "editor.fontLigatures": true, // Enable font ligatures (e.g., for certain programming fonts)
  "editor.lineNumbers": "on", // Disable line numbers in the editor
  "editor.cursorBlinking": "expand", // Set cursor blinking style to 'expand'
  "editor.cursorSmoothCaretAnimation": "on", // Enable smooth caret animation for the cursor
  "editor.find.cursorMoveOnType": false, // Disable cursor movement when typing in the find widget
  // "editor.formatOnSave": true, // Automatically format code on save
  "editor.defaultFormatter": "esbenp.prettier-vscode", // Set default code formatter
  "editor.accessibilitySupport": "off", // Disable accessibility support to improve performance
  "debug.console.fontSize": 14, // Set font size in the debug console
  "terminal.integrated.fontSize": 14, // Set font size in the terminal
  "chat.editor.fontSize": 14, // Set font size in the chat editor
  "editor.minimap.enabled": false, // Disable minimap in the editor
  // "editor.wordWrap": "on", // Enable word wrapping in the editor
  
  
  // ===================
  // Formatting and Linting
  // ===================
  "[typescriptreact]": {
    "editor.defaultFormatter": "vscode.typescript-language-features" // Set default formatter for TypeScript React
  },
  "[javascript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features" // Set default formatter for JavaScript
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode" // Set default formatter for TypeScript
  },
  "[jsonc]": {
    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint" // Set default formatter for JSON with comments (JSONC)
  },    
  "eslint.format.enable": true, // Enable ESLint formatting
  // "reactSnippets.settings.importReactOnTop": false, // Disable auto-importing React on top in React snippets
  
  
  // ===================
  // Appearance Settings
  // ===================
  "workbench.colorTheme": "Dark Vision", // Set the color theme of the workbench
  "workbench.iconTheme": "material-icon-theme", // Set the icon theme of the workbench
  "window.commandCenter": false, // Disable the command center
  // "workbench.layoutControl.enabled": false, // Disable layout control
  
  
  // ===================
  // Appearance Settings - Recommended for YouTubers
  // ===================
  // "window.menuBarVisibility": "compact", // Set the menu bar visibility to compact
  // "window.zoomLevel": 1, // Set the zoom level for the window
  // "workbench.statusBar.visible": false, // Hide the status bar
  // "workbench.activityBar.location": "hidden", // Hide the activity bar
  
  
  // ===================
  // File and Auto-Save Settings
  // ===================
  "files.autoSave": "afterDelay", // Auto-save files after a delay
  "files.autoSaveWorkspaceFilesOnly": true, // Only auto-save workspace files
  "explorer.confirmDragAndDrop": false, // Disable confirmation when dragging and dropping files
  "explorer.confirmDelete": false, // Disable confirmation when deleting files
  
  
  // ===================
  // Version Control (Git)
  // ===================
  "git.autofetch": true, // Enable automatic fetching for Git
  "git.openRepositoryInParentFolders": "never", // Never open Git repositories in parent folders
  // "scm.showOutgoingChanges": "never", // Never show outgoing changes in source control
  // "scm.showHistoryGraph": false, // Disable showing the Git history graph
  
  
  // ===================
  // Terminal Settings
  // ===================
  "terminal.integrated.defaultProfile.windows": "Git Bash", // Set Git Bash as the default terminal profile for Windows
  "terminal.integrated.env.windows": {}, // Set the environment variables for the integrated terminal in Windows
  
  
  // ===================
  // Diff Editor Settings
  // ===================
  "diffEditor.ignoreTrimWhitespace": false, // Show differences in whitespace in the diff editor
  "diffEditor.maxComputationTime": 0, // Disable the computation time limit for the diff editor
  
  
  // ===================
  // Miscellaneous
  // ===================
  "breadcrumbs.enabled": false, // Disable breadcrumbs in the editor
  "emmet.includeLanguages": {
    "javascript": "javascriptreact" // Enable Emmet for JavaScript React files
  },
  "javascript.updateImportsOnFileMove.enabled": "always", // Automatically update imports when moving JavaScript files
  "update.showReleaseNotes": false, // Disable showing release notes after updates
  "workbench.startupEditor": "none", // Do not show an editor on startup
  // "tabnine.experimentalAutoImports": true // Enable experimental auto-imports with Tabnine
  
  
}
