import { RPCClient } from '@blockstack/rpc-client';

export const getAuthOrigin = () => {
  let authOrigin = 'http://localhost:8080';
  // In order to have deploy previews use the same version of the authenticator,
  // we detect if this is a 'deploy preview' and change the origin to point to the
  // same PR's deploy preview in the authenticator.
  const { origin } = location;
  if (origin.includes('deploy-preview')) {
    // Our netlify sites are called "authenticator-demo" for this app, and
    // "stacks-authenticator" for the authenticator.
    authOrigin = document.location.origin.replace('authenticator-demo', 'stacks-authenticator');
  } else if (origin.includes('authenticator-demo')) {
    authOrigin = 'https://app.blockstack.org';
  }
  return authOrigin;
};

export const getRPCClient = () => {
  const { origin } = location;
  const url = origin.includes('localhost') ? 'http://localhost:3999' : 'https://crashy-stacky.zone117x.com';
  // const url = 'https://crashy-stacky.zone117x.com';
  return new RPCClient(url);
};