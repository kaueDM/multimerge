const core = require('@actions/core')
const github = require('@actions/github')

async function multimerge() {
  const token = core.getInput('token')
  const source = core.getInput('source')
  const targets = core.getInput('targets').split(',')
  const octokit = github.getOctokit(token)
  const repo = github.context.repo

  try {
    for (let target of targets) {
      await octokit.repos.merge({
        owner: repo.owner,
        repo: repo.repo,
        base: target,
        head: source,
        commit_message: `[multimerge] Merged '${source}' into '${target}'`
      })
    }
  } catch (e) {
    core.setFailed(e.message)
  }
}

multimerge()
