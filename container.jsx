import * as React from "react";
import { DocsContainer } from "@storybook/addon-docs";
import addons from "@storybook/addons";

/**
 * A container that wraps storybook's native docs container to add extra components to the docs experience
 */
export const Container = ({ children, context }) => {
  const channel = addons.getChannel();
  const toggleFoo = (e) => {
    channel.emit("updateGlobals", {
      globals: { foo: e.currentTarget.checked },
    });
  };

  return (
    <DocsContainer context={context}>
      <div>Foo is: {context.globals.foo ? "true" : "false"}</div>
      <div>
        <label>
          Toggle Foo
          <input
            checked={context.globals.foo}
            onChange={toggleFoo}
            type="checkbox"
          />
        </label>
      </div>
      {children}
    </DocsContainer>
  );
};
