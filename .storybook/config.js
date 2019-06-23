import { load } from '@storybook/react';

load(require.context('../src', true, /\.stories\.[tj]sx?$/), module);
load(require.context('../src', true, /\.stories\.mdx$/), module);
