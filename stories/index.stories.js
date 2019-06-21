import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../src/components/Button';

storiesOf('Button', module)
  .add('Normal', () => <Button label="enable" onClick={action('clicked')} />)
