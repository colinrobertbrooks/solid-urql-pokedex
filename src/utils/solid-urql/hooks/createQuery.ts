import { createRequest } from '@urql/core';
import { createResource, onCleanup } from 'solid-js';
import { pipe, subscribe } from 'wonka';

const fetcher = async (args) => {
  return new Promise((resolve) => {
    if (args.pause) return;

    const operation = args.client.createRequestOperation(
      'query',
      createRequest(args.query, args.variables),
      {
        requestPolicy: args.requestPolicy,
        ...args.context,
      }
    );

    const { unsubscribe } = pipe(
      args.client.executeRequestOperation(operation),
      subscribe(resolve)
    );

    onCleanup(() => unsubscribe());
  });
};

export function createQuery(args) {
  return createResource(args, fetcher);
}
