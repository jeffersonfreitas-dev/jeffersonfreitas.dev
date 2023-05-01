<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 h-16 w-full bg-default-green-1">
      <div class="mx-auto flex h-full flex-nowrap border-b border-solid border-green-900 px-8">
        <a href="#hello" class="flex h-full w-full items-center text-xl">
          <strong class="text-slate-50">{{ company }}</strong>
        </a>

        <nav class="flex items-center ml-12 h-full w-full">
          <ul class="flex h-full list-none">
            <li class="h-full" v-for="item in menuItems" :key="item">
              <a :href="item.link" class="flex h-full items-center py-2.5 text-slate-50 ml-14">{{ item.name }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainNav",
  data() {
    return {
      company: "Jefferson Freitas",
      menuItems: [
        {name: "Sobre", link: "#about"},
        {name: "Projetos", link: "#projects"},
        {name: "Contato", link: "#contact"},
        // {name: "Blog", link: "#hello"}
      ]
    }
  }
}
</script>