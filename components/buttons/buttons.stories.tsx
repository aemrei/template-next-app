import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from ".";

const ButtonStory = {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export default ButtonStory;

const Template: ComponentStory<typeof Button> = (args: any) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "Button",
  onClick: () => {},
};
