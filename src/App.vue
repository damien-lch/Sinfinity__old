
  <template>
  <div>
    <Disclosure as="nav" class="bg-indigo-600" v-slot="{ open }">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex-shrink-0">
            <router-link to="/">
              <img
                class="h-8 w-8"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg"
                alt="Workflow"
              />
            </router-link>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <template v-for="item in navigation" :key="item">
                <router-link
                  :to="{ name: item.to }"
                  class="
                    text-white
                    hover:bg-indigo-500 hover:bg-opacity-75
                    px-3
                    py-2
                    rounded-md
                    text-sm
                    font-medium
                  "
                  :class="isActiveRoute(item.to) ? 'bg-green-400' : ''"
                  >{{ item.label }}
                </router-link>
              </template>
              <a
                href="https://sinovate.io"
                target="_blank"
                class="bg-white rounded px-3 py-2 flex items-center"
              >
                Sinovate
                <GlobeAltIcon class="h-4 w-4 text-indigo-600" />
              </a>
            </div>
          </div>

          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton
              class="
                bg-indigo-600
                inline-flex
                items-center
                justify-center
                p-2
                rounded-md
                text-indigo-200
                hover:text-white
                hover:bg-indigo-500 hover:bg-opacity-75
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-offset-indigo-600
                focus:ring-white
              "
            >
              <span class="sr-only">Open main menu</span>
              <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <template v-for="(item, itemIdx) in navigation" :key="item">
            <template v-if="itemIdx === 0">
              <!-- Current: "bg-indigo-700 text-white", Default: "text-white hover:bg-indigo-500 hover:bg-opacity-75" -->
              <a
                href="#"
                class="
                  bg-indigo-700
                  text-white
                  block
                  px-3
                  py-2
                  rounded-md
                  text-base
                  font-medium
                "
                >{{ item }}</a
              >
            </template>
            <a
              v-else
              href="#"
              class="
                text-white
                hover:bg-indigo-500 hover:bg-opacity-75
                block
                px-3
                py-2
                rounded-md
                text-base
                font-medium
              "
              >{{ item }}</a
            >
          </template>
        </div>
        <div class="pt-4 pb-3 border-t border-indigo-700">
          <div class="flex items-center px-5">
            <div class="flex-shrink-0">
              <img
                class="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium text-white">Tom Cook</div>
              <div class="text-sm font-medium text-indigo-300">
                tom@example.com
              </div>
            </div>
            <button
              type="button"
              class="
                ml-auto
                bg-indigo-600
                flex-shrink-0
                p-1
                rounded-full
                text-indigo-200
                hover:text-white
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-offset-indigo-600
                focus:ring-white
              "
            >
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>

    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/vue/outline";
import { GlobeAltIcon } from "@heroicons/vue/solid";
import { computed } from "@vue/reactivity";
import router from "./router/index";
const navigation = [{ label: "Decoder", to: "Step1" }];
const currentRouteName = computed(() => {
  console.log(router.currentRoute.value);
  return router.currentRoute.value.name;
});
const isActiveRoute = (routeName) => {
  const matched = router.currentRoute.value.matched.map((m) => m.name);
  if (matched.includes(routeName)) {
    return true;
  }
  return false;
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
