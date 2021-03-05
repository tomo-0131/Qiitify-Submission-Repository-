import Vue from 'vue'
import Vuetify from 'vuetify'
import { mount, createLocalVue } from '@vue/test-utils'
import TheTest from '@/components/TheTest.vue'
Vue.use(Vuetify)
const localVue = createLocalVue()

describe('components/TheTop.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(TheTest, {
      localVue,
    })
  })
  describe('template', () => {
    test('ユーザID入力input欄が存在することを確認', () => {
      const inputForm = wrapper.find('#user-id-field')
      expect(inputForm.exists()).toBe(true)
    })
  })
})
