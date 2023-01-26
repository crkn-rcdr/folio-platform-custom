module.exports = {
  okapi: { 'url':'http://localhost:9130', 'tenant':'diku' },
  config: {
    logCategories: 'core,path,action,xhr',
    logPrefix: '--',
    maxUnpagedResourceCount: 2000,
    showPerms: false
  },
  modules: {
    '@folio/bulk-edit': {},
    '@folio/data-export' : {},
    '@folio/data-import' : {},
    '@folio/developer' : {},
    '@folio/eholdings' : {},
    '@folio/export-manager': {},
    '@folio/handler-stripes-registry': {},
    '@folio/inventory' : {},
    '@folio/marc-authorities': {},
    '@folio/myprofile' : {},
    '@folio/notes' : {},
    '@folio/oai-pmh' : {},
    '@folio/organizations' : {},
    '@folio/plugin-create-inventory-records' : {},
    '@folio/plugin-find-authority' : {},
    '@folio/plugin-find-contact': {},
    '@folio/plugin-find-eresource': {},
    '@folio/plugin-find-fund': {},
    '@folio/plugin-find-import-profile' : {},
    '@folio/plugin-find-instance' : {},
    '@folio/plugin-find-interface' : {},
    '@folio/plugin-find-organization': {},
    '@folio/plugin-find-package-title': {},
    '@folio/plugin-find-po-line': {},
    '@folio/plugin-find-user' : {},
    '@folio/quick-marc': {},
    '@folio/remote-storage' : {},
    '@folio/stripes-authority-components' : {},
    '@folio/stripes-erm-components': {},
    '@folio/tags': {},
    '@folio/tenant-settings' : {},
    '@folio/users' : {}
  },
  branding: {
    logo: {
      src: './tenant-assets/opentown-libraries-logo.png',
      alt: 'Opentown Libraries',
    },
    favicon: {
      src: './tenant-assets/opentown-libraries-favicon.png',
    },
  }
};
