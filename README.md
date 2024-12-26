## Using the AutoCoder Composite Action

To use this action, set up a `.github/workflows/main.yml` file in your repository like that below

```yaml
name: AutoCodeGen
on:
  issues:
    types: [labeled]

jobs:
  generate_code:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: AutoCoder Composite Action
        uses: trung-cly/AutoCoder@v1
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          repository: ${{ github.repository }}
          issue_number: ${{ github.event.issue.number }}
          openai_api_key: ${{ secrets.CHAT_GPT_API_KEY }}
          script_path: './scripts/script.sh'
          label: 'autocoder'
```

This configuration will invoke the AutoCoder action when an issue is labeled with the specified label.
Then, follow these steps:

1. Create a new issue in your repository and add the label specified in the workflow file (e.g., `autocoder`).
2. The AutoCoder action will be triggered automatically, fetching the issue details and generating code based on the issue description.
3. The generated code will be committed to a new branch and a pull request will be created for review.

### Inputs

The action requires the following inputs:

- `github_token` - The GitHub token to authenticate with the GitHub API.
- `repository` - The repository name.
- `issue_number` - The issue number to be processed.
- `openai_api_key` - The OpenAI API key for the GPT-3.5 model.
- `script_path` - The path to the script file used for code generation.
- `label` - The label that triggers the action.

### Outputs

The action does not provide any outputs.
