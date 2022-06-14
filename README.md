# storybook-context-test

In storybook 6.4 changes to global variables would cause re-renders across the entire app (including the docs template). 

Upgrade to 6.5, then run again

In 6.5 those changes only occur in the stories themselves. Run this code locally, notice how the checkbox (controlled) changes when clicked, along with the 'foo' values. In 6.5 the checkbox will change the story value to 'false' but won't change again due to the 'checked' value not having changed in the page template.
