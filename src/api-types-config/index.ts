/* eslint-disable @typescript-eslint/no-unsafe-return */
// Copyright 2017-2020 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import typesBundle from './bundle';
import typesChain from './chain';
import typesRpc from './rpc';
import typesSpec from './spec';

export function getChainTypes(
	specName: string,
	chainName: string
): Record<string, string | Record<string, unknown>> {
	return {
		...(typesSpec[specName as 'edgeware'] || {}),
		...(typesChain[chainName as 'Beresheet'] || {}),
	};
}

export { typesChain, typesSpec, typesBundle, typesRpc };
