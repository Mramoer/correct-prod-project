import type { Meta, StoryObj } from '@storybook/react';
import { ThemeEnum } from './Button';
import Button from './Button';

const meta = {
	title: 'shared/Button',
	component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		theme: ThemeEnum.OUTLINE,
		children: 'hello',
	},
	render: ({ children }) => {
		return <Button className='outline'>{children}</Button>;
	},
};

export const Default: Story = {};
