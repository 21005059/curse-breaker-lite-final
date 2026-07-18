export const mockData = {
  JavaScript: {
    issues: [
      "[ERROR] Line 8: 'user' is not defined",
      "[WARNING] Line 22: Infinite loop detected",
      "[INFO] Line 1: Consider adding error handling"
    ],
    explanation: "Your code will crash because 'user' is not defined and the loop never ends.",
    fixedCode: `const user = {};
console.log(user);`,
    fixes: [
      "Declared the missing variable.",
      "Removed the infinite loop.",
      "Added safer code structure."
    ]
  },

  Python: {
    issues: [
      "[ERROR] Line 3: NameError",
      "[WARNING] Line 10: Unused variable",
      "[INFO] Line 1: Add exception handling"
    ],
    explanation: "Your Python code contains a variable that was never defined.",
    fixedCode: `user = {}
print(user)`,
    fixes: [
      "Defined the missing variable.",
      "Removed unused code.",
      "Suggested error handling."
    ]
  },

  "HTML/CSS": {
    issues: [
      "[ERROR] Missing closing tag",
      "[WARNING] Inline styles detected",
      "[INFO] Add alt attributes to images"
    ],
    explanation: "Your HTML has structural issues that may break rendering.",
    fixedCode: `<div>
  <h1>Hello</h1>
</div>`,
    fixes: [
      "Closed missing tags.",
      "Improved HTML structure.",
      "Suggested accessibility improvements."
    ]
  }
};
