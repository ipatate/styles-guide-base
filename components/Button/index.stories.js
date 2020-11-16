import {action} from '@storybook/addon-actions'
import mocks from './mocks.json'

const variants = ['primary', 'success', 'warning', 'danger']

export default {
  title: 'Button',
  argTypes: {
    variant: {
      control: {type: 'select', options: variants, defaultValue: 'primary'},
    },
    label: {control: 'text', defaultValue: 'My Button'},
  },
}

export const Default = () => ({
  storyName: 'Button',
  data() {
    return {
      mock: mocks,
    }
  },
  props: {
    variant: {
      type: String,
    },
    label: {
      type: String,
    },
  },
  methods: {
    clicked: action('clicked'),
  },
  template: '<Button @click="clicked" :variant="variant">{{label}}</Button>',
})

export const Rounded = () => ({
  storyName: 'Rounded',
  data() {
    return {
      mock: mocks,
    }
  },
  props: {
    variant: {
      type: String,
    },
    label: {
      type: String,
    },
  },
  template:
    '<Button :variant="variant" :rounded="true">{{mock.label}}</Button>',
})

export const Outlined = () => ({
  storyName: 'Rounded',
  data() {
    return {
      mock: mocks,
    }
  },
  props: {
    variant: {
      type: String,
    },
    label: {
      type: String,
    },
  },
  template: '<Button :variant="variant" :outlined="true">{{label}}</Button>',
})

export const OutlinedRouned = () => ({
  storyName: 'Rounded',
  data() {
    return {
      mock: mocks,
    }
  },
  props: {
    variant: {
      type: String,
    },
    label: {
      type: String,
    },
  },
  template:
    '<Button :variant="variant" :rounded="true" :outlined="true">{{label}}</Button>',
})
