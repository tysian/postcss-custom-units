import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: ['src/index'],
  clean: true,
  declaration: true,
  externals: ['postcss'],
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
  },
});
