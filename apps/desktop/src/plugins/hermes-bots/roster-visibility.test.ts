import { describe, expect, it } from 'vitest'

import { filterRosterForLocalGateway } from './roster-visibility'

describe('filterRosterForLocalGateway', () => {
  it('hides local bots while retaining remote bots', () => {
    const roster = [
      { connectionId: 'local', connectionKind: 'local', name: 'This device' },
      { connectionId: 'homelab', connectionKind: 'remote', name: 'Homelab', remoteSource: true },
      { connectionId: 'local', connectionKind: 'remote', name: 'Remote alias', remoteSource: true }
    ]

    expect(filterRosterForLocalGateway(roster, false)).toEqual([roster[1], roster[2]])
  })

  it('leaves the complete roster unchanged while local is enabled', () => {
    const roster = [{ connectionId: 'local', name: 'This device' }]

    expect(filterRosterForLocalGateway(roster, true)).toBe(roster)
  })
})
