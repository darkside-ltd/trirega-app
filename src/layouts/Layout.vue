<template>
  <div class="min-h-full text-zinc-950">
    <div id="get tailwind to include these classes" class="bg-zinc-100 bg-zinc-50 sr-only"></div>
    <div class="bg-zinc-950 pb-32">
      <Disclosure as="nav" class="border-b border-zinc-300 border-opacity-25 bg-zinc-950 lg:border-none"
        v-slot="{ open }">
        <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
          <div
            class="relative flex h-16 items-center justify-between lg:border-b lg:border-zinc-400 lg:border-opacity-25">
            <div class="flex items-center px-2 lg:px-0">
              <div class="flex-shrink-0">
                <router-link to="/"><img class="block h-8 w-8" src="/images/logoipsum-249.svg?color=zinc&shade=300" alt="Your Company" /></router-link>
              </div>
              <div class="hidden lg:ml-10 lg:block">
                <div class="flex space-x-4">
                  <router-link v-for="item in navigation" :key="item.name" :to="item.href"
                    :class="[item.current ? 'bg-zinc-700 text-white' : 'text-white hover:bg-zinc-500 hover:bg-opacity-75', 'rounded-md py-2 px-3 text-sm font-medium']"
                    :aria-current="item.current ? 'page' : undefined"
                    exact-active-class="test-class1 bg-zinc-700 text-white"
                    exact-path-active-class="test-class2 router-link-active bg-zinc-700 text-white">{{ item.name
                    }}</router-link>
                </div>
              </div>
            </div>
            <div class="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
              <div class="w-full max-w-lg lg:max-w-xs">
                <SearchBox></SearchBox>
              </div>
            </div>
            <div class="flex lg:hidden">
              <!-- Mobile menu button -->
              <DisclosureButton
                class="inline-flex items-center justify-center rounded-md bg-zinc-600 p-2 text-zinc-200 hover:bg-zinc-500 hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-600">
                <span class="sr-only">Open main menu</span>
                <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
              </DisclosureButton>
            </div>
            <div class="hidden lg:ml-4 lg:block">
              <div class="flex items-center">
                <button type="button"
                  class="flex-shrink-0 rounded-full bg-zinc-600 p-1 text-zinc-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-600">
                  <span class="sr-only">View notifications</span>
                  <BellIcon class="h-6 w-6" aria-hidden="true" />
                </button>

                <!-- Profile dropdown -->
                <Menu as="div" class="relative ml-3 flex-shrink-0">
                  <div>
                    <MenuButton
                      class="flex rounded-full bg-zinc-600 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-600">
                      <span class="sr-only">Open user menu</span>
                      <img class="h-8 w-8 rounded-full" :src="user.imageUrl" alt="" />
                    </MenuButton>
                  </div>
                  <transition enter-active-class="transition ease-out duration-100"
                    enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                    leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
                    leave-to-class="transform opacity-0 scale-95">
                    <MenuItems
                      class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                      <router-link :to="item.href"
                        :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">{{ item.name
                        }}</router-link>
                      </MenuItem>
                    </MenuItems>
                  </transition>
                </Menu>
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel class="lg:hidden">
          <div class="space-y-1 px-2 pb-3 pt-2">
            <router-link v-for="item in navigation" :key="item.name" as="a" :to="item.href"
              :class="[item.current ? 'bg-zinc-700 text-white' : 'text-white hover:bg-zinc-500 hover:bg-opacity-75', 'block rounded-md py-2 px-3 text-base font-medium']"
              class="block rounded-md py-2 px-3 text-base font-medium" :aria-current="item.current ? 'page' : undefined"
              exact-active-class="bg-zinc-700 text-white" exact-path-active-class="bg-zinc-700 text-white">
              {{ item.name }}</router-link>
          </div>
          <div class="border-t border-zinc-700 pb-3 pt-4">
            <div class="flex items-center px-5">
              <div class="flex-shrink-0">
                <img class="h-10 w-10 rounded-full" :src="user.imageUrl" alt="" />
              </div>
              <div class="ml-3">
                <div class="text-base font-medium text-white">{{ user.name }}</div>
                <div class="text-sm font-medium text-zinc-300">{{ user.email }}</div>
              </div>
              <button type="button"
                class="ml-auto flex-shrink-0 rounded-full bg-zinc-600 p-1 text-zinc-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-600">
                <span class="sr-only">View notifications</span>
                <BellIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div class="mt-3 space-y-1 px-2">
              <router-link v-for="item in userNavigation" :key="item.name" as="a" :to="item.href"
                class="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-zinc-500 hover:bg-opacity-75">{{
                  item.name }}</router-link>
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>
      <header class="py-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="">
          <h1 class="text-3xl font-bold tracking-tight text-white">{{ h1 }}</h1>
        </div>
        <div class="md:flex justify-between">
          <div>
            <slot name="topleft"></slot>
          </div>
          <div>
            <slot name="topright"></slot>
          </div>
        </div>
      </header>
    </div>



    <template v-if="split">
      <main class="-mt-32">
        <div class="mx-auto max-w-7xl min-h-screen pb-12 sm:px-6 xl:px-0">
          <h1 class="sr-only">Page title</h1>
          <!-- Main 3 column grid -->
          <div class="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8 ">
            <!-- Left column -->
            <div class="grid grid-cols-1 gap-4 lg:col-span-2">
              <section aria-labelledby="section-1-title">
                <h2 class="sr-only" id="section-1-title">Section title</h2>
                <div class="overflow-hidden md:rounded-lg bg-white shadow">
                  <div class="p-6">
                    <!-- Your content -->
                    <slot name="content"></slot>
                  </div>
                </div>
              </section>
            </div>

            <!-- Right column -->
            <div class="grid grid-cols-1 gap-4">
              <section aria-labelledby="section-2-title">
                <h2 class="sr-only" id="section-2-title">Section title</h2>
                <div class="overflow-hidden md:rounded-lg bg-white shadow">
                  <div class="p-6">
                    <!-- Your content -->
                    <slot name="aside"></slot>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </template>

    <template v-else>
      <main class="-mt-32">
        <div class="mx-auto max-w-7xl min-h-screen px-4 pb-12 sm:px-6 lg:px-8 bg-white md:rounded-lg shadow">
          <slot></slot>
        </div>
      </main>
    </template>


  </div>
</template>
  
<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import SearchBox from '@/components/SearchBox.vue'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const navigation = [
  { name: 'Dashboard', href: '/' },
  { name: 'All Tasks', href: '/tasklist' },
  { name: 'Active', href: '/list/active' },
  { name: 'Completed', href: '/list/completed' },
]

const userNavigation = [
  { name: 'Settings', href: '/settings' },
  { name: 'Sign out', href: '/signout' },
]

const props = defineProps({
  h1: {
    type: String,
    required: true,
  },
  split: {
    type: Boolean,
    required: false,
    default: false,
  }
})

</script>