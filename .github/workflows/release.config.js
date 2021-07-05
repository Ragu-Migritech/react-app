module.exports = {
  branches: [{name: "main", prerelease: true}],
  repositoryUrl: "https://github.com/Ragu-Migritech/react-app",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
  ],
};
