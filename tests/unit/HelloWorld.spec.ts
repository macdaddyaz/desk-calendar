import HelloWorld from '@/components/HelloWorld.vue';
import {shallowMount} from '@vue/test-utils';
import {Vue} from 'vue-property-decorator';
import Vuetify from 'vuetify';

// Prevent warnings about unknown elements
Vue.use(Vuetify);

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      propsData: {msg},
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
