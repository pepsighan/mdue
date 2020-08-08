const fs = require('fs');
const util = require('@mdi/util');
const { pascalCase } = require('pascal-case');

const meta = util.getMeta(true);

const indexFile = './mdue/src/index.ts';
// Delete old generated file.
if (fs.existsSync(indexFile)) {
  fs.unlinkSync(indexFile);
}

// Write components for each of the icon and expose them.
const components = meta.map((icon) => {
  const name = pascalCase(icon.name);

  return `const path${name} = /*#__PURE__*/createVNode("path", { d: "${icon.path}" }, null, -1 /* HOISTED */);
export const ${name} = defineComponent({
  name: '${name}',
  render: () => {
    return (openBlock(), createBlock('svg', svgCommonProps, [path${name}]));
  },
});`;
});

// Export the vue components from the index.ts.
const indexFileContent = `import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

const svgCommonProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
  version: '1.1',
  stroke: 'currentColor',
  fill: 'currentColor',
  height: '1em',
  width: '1em',
  viewBox: '0 0 24 24',
};

${components.join('\n')}
`;
fs.writeFileSync(indexFile, indexFileContent);
