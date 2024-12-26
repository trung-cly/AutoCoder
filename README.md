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
          openai_api_key: ${{ secrets.OPENAI_API_KEY }}
          issue_label: 'autocoder'
```

This configuration will invoke the AutoCoder action when an issue is labeled with the specified label.
