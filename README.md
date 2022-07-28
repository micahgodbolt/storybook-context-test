# storybook-context-test

In storybook 6.4 changes to global variables would cause re-renders across the entire app (including the docs template). 

Upgrade to 6.5, then run again

In 6.5 those changes only occur in the stories themselves. 

Repro:

1. run `yarn storybook`
2. navigate to Button/Primary and click on "Docs page"
3. Click on "click" button
4. Note that foo increases in the story, but does not increase in the docs container until you navigate to canvas and back
