import Vue from 'vue'
import Vuetify from 'vuetify'
Vue.use(Vuetify)

import { mount, createLocalVue } from '@vue/test-utils'
import TheTop from '@/components/TheTop.vue'

const localVue = createLocalVue()

describe('components/TheTop.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(TheTop, {
      localVue
    })
  })

  describe('template', () => {
    test('ユーザID入力input欄が存在することを確認', () => {
      expect(wrapper.contains(v-text-field)).toBe(true)
    })
  })
})
