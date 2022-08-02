import * as React from "react";
import { DocsContainer } from "@storybook/addon-docs";
import addons from "@storybook/addons";

/**
 * A container that wraps storybook's native docs container to add extra components to the docs experience
 */
export const Container = ({ children, context }) => {
  const channel = addons.getChannel();
  const [value, updateValue] = React.useState(1);
  const handleClick = (e) => {
    updateValue(value + 1);
    console.log(value)
    channel.emit("updateGlobals", {
      globals: { foo: value },
    });
  };

  const story = context.storyById(context.id);
  const { globals } = context.getStoryContext(story);
  console.log(globals)

  
  return (
    <DocsContainer context={context}>
      <div>Foo is: {globals.foo}</div>
      <div>
        <label>
          Increase Foo
          <button style={{ marginLeft: 10 }} onClick={handleClick}>
            click
          </button>
        </label>
      </div>
      {children}
    </DocsContainer>
  );
};
