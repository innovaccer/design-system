const core = require("@actions/core");
const { execSync } = require("child_process");
const { GitHub, context } = require("@actions/github");

const main = async () => {
	const repoName = context.repo.repo;
	const repoOwner = context.repo.owner;
	const githubToken = core.getInput("github-token");
	const testCommand = core.getInput("test-command") || "npx jest";

	const githubClient = new GitHub(githubToken);
	const commitPRs = await githubClient.repos.listPullRequestsAssociatedWithCommit(
		{
			repo: repoName,
			owner: repoOwner,
			commit_sha: context.sha
		}
	);
	const prNumber = commitPRs.data[0].number;

	const codeCoverage = execSync(testCommand).toString().slice(0, 500);
	let coveragePercentage = execSync(
		"npx coverage-percentage ./coverage/lcov.info --lcov"
	).toString();
	coveragePercentage = parseFloat(coveragePercentage).toFixed(2);

	const commentBody = `<p>Total Coverage: <code>${coveragePercentage}</code></p>
        <details><summary>Coverage report</summary>
        <p>
        <pre>${codeCoverage}</pre>
        </p>
        </details>`;

	await githubClient.issues.createComment({
		repo: repoName,
		owner: repoOwner,
		body: commentBody,
		issue_number: prNumber,
	});
};

main().catch(err => core.setFailed(err.message));
