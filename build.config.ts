import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: [
    {
      name: 'index',
      input: 'src/index',
    },
  ],
  clean: true,
  declaration: true,
  outDir: './dist',
  externals: ['postcss'],
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
  },
});
