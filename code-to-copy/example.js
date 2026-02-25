const core = require('@actions/core')

try {
  const allowedBranch = core.getInput('allowed_branch') || 'main'
  const currentBranch = process.env.GITHUB_REF_NAME

  core.info(`Allowed branch: ${allowedBranch}`)
  core.info(`Current branch: ${currentBranch}`)

  if (currentBranch !== allowedBranch) {
    core.setFailed(`This workflow must run on "${allowedBranch}"`)
  } else {
    core.info('✅ Branch check passed')
  }
} catch (error) {
  core.setFailed(error.message)
}
