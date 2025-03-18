<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import AppLayout from '../layouts/AppLayout.vue'
import { FileText, Code, Globe } from 'lucide-vue-next'

defineOptions({
  layout: AppLayout,
})

// Sample features for the landing page
const features = [
  {
    icon: FileText,
    title: 'Documentation',
    description: 'Access comprehensive documentation to help you get started quickly.',
  },
  {
    icon: FileText,
    title: 'Components',
    description: 'Build your application with reusable, well-tested components.',
  },
  {
    icon: Code,
    title: 'Developer Experience',
    description: 'Enjoy a streamlined workflow with hot reloading and type safety.',
  },
  {
    icon: Globe,
    title: 'Scalable',
    description: 'Build anything from small projects to enterprise-grade applications.',
  },
]
</script>

<template>
  <AppHead title="Home" description="Welcome" />

  <div class="py-8">
    <!-- Hero Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Welcome to Your Application
        </h1>
        <p class="mt-3 max-w-2xl mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl">
          Get started building your next great idea
        </p>
        <div class="mt-8 flex justify-center">
          <div class="rounded-md shadow">
            <a
              href="#"
              class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark md:py-4 md:px-10"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
      <div class="text-center">
        <h2 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">Features</h2>
      </div>
      <div class="mt-10 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow"
        >
          <div class="px-6 py-5 flex items-center">
            <div class="flex-shrink-0 bg-primary-light rounded-md p-3">
              <component :is="feature.icon" class="h-5 w-5 text-primary" />
            </div>
            <h3 class="ml-4 text-lg font-medium text-gray-900">{{ feature.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>