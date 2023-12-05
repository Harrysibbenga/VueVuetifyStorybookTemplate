import MyButton from './Buttons.vue';

export default {
  title: 'Components/Buttons',
  component: MyButton,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
    size: { control: 'select', options: ['x-small', 'small', 'default', 'large','x-large'] },
    disabled: { control: 'boolean' },
    appendIcon: { control: 'text' },
    prependIcon: { control: 'text' },
    variant: { control: 'select', options: ['text' , 'flat' , 'elevated' , 'tonal' , 'outlined' , 'plain'] },
    loading: Boolean,
    tile: { control: 'boolean' },
    flat: { control: 'boolean' },
    rounded: { control: 'boolean' },
    // Add additional props here as needed
  },
};

export const Primary = {
  args: {
    label: 'Button',
    color: 'primary',
  },
};

export const Secondary = {
  args: {
    label: 'Button',
    color: 'secondary',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

// Additional stories can be added here to demonstrate other combinations of props
