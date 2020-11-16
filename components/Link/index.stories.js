import mocks from './mocks.json'

export default {
  title: 'Link',
  argTypes: {
    label: {control: 'text', defaultValue: 'My Link'},
  },
}

export const Default = () => ({
  storyName: 'Link',
  data() {
    return {
      mock: mocks,
    }
  },
  props: {
    label: {
      type: String,
    },
  },
  template: '<Link to="https://google.com">{{label}}</Link>',
})
