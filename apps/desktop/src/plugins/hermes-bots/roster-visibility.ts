import type { RosterRow } from './types'

/** A non-remote roster row owned by the app-managed local gateway. */
export function isLocalGatewayBot(bot: Pick<RosterRow, 'connectionId' | 'connectionKind' | 'remoteSource'>): boolean {
  return (
    bot.remoteSource !== true &&
    (String(bot.connectionId || '').trim() === 'local' || String(bot.connectionKind || '').trim() === 'local')
  )
}

/** Presentation filter only. The complete roster remains available to routing,
 *  persistence, and recovery paths. */
export function filterRosterForLocalGateway(roster: RosterRow[], localGatewayEnabled: boolean): RosterRow[] {
  return localGatewayEnabled ? roster : roster.filter(bot => !isLocalGatewayBot(bot))
}
