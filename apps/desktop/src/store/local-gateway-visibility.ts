import { atom } from 'nanostores'

/** Renderer-owned presentation state shared by Gateway settings and Bot Mode.
 *  The local registry entry and backend remain intact when this is false. */
export const $localGatewayEnabled = atom(true)

export function setLocalGatewayEnabled(enabled: boolean): void {
  $localGatewayEnabled.set(enabled)
}
