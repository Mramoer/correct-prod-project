import type { Meta, StoryObj } from '@storybook/react';
import { ThemeEnum } from './Button';
import { Button } from './Button';

const meta = {
	title: 'shared/Button',
	component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		theme: ThemeEnum.OUTLINE,
	},
	render: () => {
		return <Button className='outline'>hello</Button>;
	},
};

export const Default: Story = {};
