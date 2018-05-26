// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  goodReadsKey : {
    key: '3xdQDEZ5adNQFFsHX12K1Q',
    secret: '8Bmnkz3AuUQz5vEiibktUmnrNSIQsmpqJfDK21DBI',
    url: 'https://www.goodreads.com/search/index.xml'
  }  
};
