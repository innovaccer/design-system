const config = {
	compilationOptions: {
	preferredConfigPath: './tsconfig.json',
	},
	entries: [
		{
			filePath: 'core/index.type.tsx',
			outFile: 'types/innovaccer-design-system/index.d.ts',
		},
	],
};

module.exports = config;
