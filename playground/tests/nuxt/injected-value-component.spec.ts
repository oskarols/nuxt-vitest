import { VUE_INJECTED_VALUE } from 'plugins/injectvalue'
import { describe, it, expect } from 'vitest'

import { mountSuspended } from 'vitest-environment-nuxt/utils'

import InjectedValueComponent from '~/components/InjectedValueComponent.vue'

describe('InjectedValueComponent', () => {
  it('can use injected values from a plugin', async () => {
    const component = await mountSuspended(InjectedValueComponent)
    expect(component.text()).toContain(VUE_INJECTED_VALUE)
  })
})
