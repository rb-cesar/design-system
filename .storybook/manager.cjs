import { addons } from '@storybook/addons'

addons.setConfig({
  isFullscreen: true,
  showNav: true,
  showPanel: true,
  showToolbar: true,
  panelPosition: 'bottom',
  enableShortcuts: true,
  theme: undefined,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  sidebar: {
    showRoots: true,
    collapsedRoots: ['other'],
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
})
