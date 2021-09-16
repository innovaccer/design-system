// @ts-check

/** @type import('./src/config-file/load-config-file').BundlerConfig */
const config = {
	compilationOptions: {
	preferredConfigPath: './tsconfig.json',
	},
	entries: [
		{
			filePath: 'dist/core/index.d.ts',
			outFile: 'types/innovaccer-design-system/index.d.ts',
		},
	],
};

module.exports = config;