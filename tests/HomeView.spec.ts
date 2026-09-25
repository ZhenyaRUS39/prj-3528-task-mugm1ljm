import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { createRouter, createMemoryHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

function makeRouter() {
  return createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', name: 'home', component: HomeView },
      { path: '/about', name: 'about', component: { template: '<div/>' } },
    ],
  });
}

describe('HomeView', () => {
  it('renders initial counter value of 0', () => {
    const wrapper = mount(HomeView, { global: { plugins: [makeRouter()] } });
    expect(wrapper.find('[data-testid="counter"]').text()).toBe('0');
  });

  it('increments counter on button click', async () => {
    const wrapper = mount(HomeView, { global: { plugins: [makeRouter()] } });
    await wrapper.find('button').trigger('click');
    await wrapper.find('button').trigger('click');
    expect(wrapper.find('[data-testid="counter"]').text()).toBe('2');
  });

  it('exposes a router-link to /about', () => {
    const wrapper = mount(HomeView, { global: { plugins: [makeRouter()] } });
    expect(wrapper.find('a').attributes('href')).toBe('/about');
  });
});
