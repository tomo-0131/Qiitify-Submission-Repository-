import Vue from 'vue'
import Vuetify from 'vuetify'
Vue.use(Vuetify)

import { mount } from '@vue/test-utils'
import TheTop from '@/components/TheTop.vue'

describe('components/TheTop', () => {
  test('TheTopコンポーネントが存在することを確認', () => {
    const wrapper = mount(TheTop)
    Vuetify
    expect(wrapper.exists()).toBeTruthy()
  })
})
