const config = {
	compilationOptions: {
	preferredConfigPath: './tsconfig.json',
	},
	entries: [
		{
			filePath: 'core/index.type.tsx',
			outFile: 'types/index.d.ts',
			libraries: {
                /**
                 * Array of package names from node_modules to import typings from.
                 * Used types will be imported using `import { First, Second } from 'library-name';`.
                 * By default all libraries will be imported (except inlined libraries and libraries from @types).
                 * Optional. Default value is `undefined`.
                 */
			importedLibraries: ['react'],
            },
		},
	],
};

module.exports = config;
