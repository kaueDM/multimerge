# multimerge action

Action to merge a single branch into multiple branches

## Inputs

### `source`

**Required** Source branch. Default `master`.

### `targets`

**Required** Target branches to merge `source` into, separating with commas.

## Example

```yaml
jobs:
  multimerge:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: kaueDM/multimerge
        with:
          token: ${{ github.token }}
          source: master
          targets: foo,bar
```
