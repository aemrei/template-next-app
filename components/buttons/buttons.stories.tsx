import { Meta, Story } from "@storybook/react";
import { Button, ButtonProps } from ".";

const ButtonStory = {
  title: "Button",
  component: Button,
} as Meta;

export default ButtonStory;

const Template: Story<ButtonProps> = (args: any) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "Button",
  onClick: () => {},
};
