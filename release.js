const fs = require('fs');
const { execSync } = require('child_process');

// Read package.json
const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
const currentVersion = packageJson.version;

// Check if version has pre-release suffix
if (currentVersion.includes('-')) {
  // If it has pre-release, increment the number after -
  const [version, preRelease] = currentVersion.split('-');
  const newPreRelease = parseInt(preRelease) + 1;
  const newVersion = `${version}-${newPreRelease}`;

  // Update package.json
  packageJson.version = newVersion;
  fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2) + '\n');

  // Create git commit
  execSync('git add package.json');
  execSync(`git commit -m "Released ${newVersion}" --no-verify`);

  // Create git tag
  execSync(`git tag -a ${newVersion} -m "Released ${newVersion}"`);

  console.log(`Bumped version from ${currentVersion} to ${newVersion}`);
} else {
  // If no pre-release, do major bump with -0
  const [major, minor, patch] = currentVersion.split('.');
  const newVersion = `${parseInt(major) + 1}.0.0-0`;

  // Update package.json
  packageJson.version = newVersion;
  fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2) + '\n');

  // Create git commit
  execSync('git add package.json');
  execSync(`git commit -m "Released ${newVersion}" --no-verify`);

  // Create git tag
  execSync(`git tag -a ${newVersion} -m "Released ${newVersion}"`);

  console.log(`Bumped version from ${currentVersion} to ${newVersion}`);
}
