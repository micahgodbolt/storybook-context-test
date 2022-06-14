import { Container } from "../container";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    container: Container
  }
}

export const decorators = [
  (Story, context) => (
    <div style={{ margin: '3em' }}>
      Foo is: {context.globals.foo ? 'true' : 'false'}
      <Story />
    </div>
  ),
];

// .storybook/preview.js

export const globalTypes = {
  foo: {
    name: 'foo',
    description: 'Global theme for components',
    defaultValue: 'true',
  },
};