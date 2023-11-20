import { it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Hello from '../app.vue'

const wrapper = mount(Hello)

it('testing Hello component', () => {
  expect(wrapper).toBeTruthy()
  expect(wrapper.text()).toContain('Hello world')
})
