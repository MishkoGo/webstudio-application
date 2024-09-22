<template>

      <!-- Each block is wrapped inside a flex container with a fixed height -->
      <div class=" shadow-lg flex flex-col h-full price-block" >
        <div class="p-9 flex-grow">
          <h2 class="text-2xl md:text-2xl text-slate-700 my-1 font-bold">{{ title }}</h2>
          <p class="text-2xl md:text-3xl text-slate-700 my-1 font-bold mt-6">{{ prices }}</p>
          <p class="text-2xl md:text-1xl mt-6 mb-6">{{ description }}</p>
          <ul v-for="dat in links" :key="dat">
            <li class="text-1xl md:text-1xl mt-2 gap-2 flex items-center"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAABAElEQVR4nGNgGP4g5b5vZMoD36lpZ9JYSdKYfN/bK+WBz6/UB77/Ux/4TidaY9o9P/PU+75fQBpT7vt8S3nobYuQ/c/AmHDHvS/+jkcEusa42+7aCbfd3ybecf+fcMf9d9Jtdz8UBRFX7HOjrtn9j7pq9y/qmm0lTDz2irVc5DXbxzC56Kt2SRjOCjhjbBN01uhd0Dmj/2B81nB26ElTicBzhtfhYueMK3D6y+u4qqbnMbW7XsfV/oPxMdUvMLbncdV+ggHjvFtK2HGf1CGn/VL/4Xif1LL6egYmBmKAxSoGTsttvCstt/H+t9jKs8X4DANpcQoCZmsZZBiItZHuAAD71nZFaaDW1wAAAABJRU5ErkJggg==">{{ dat }}</li>
          </ul>
        </div>
        <div class="mt-auto p-9">
          <button class="bg-blue-600 hover:bg-blue-700 outline-none px-10 py-3 rounded-full text-white text-lg font-medium">
            More details
          </button>
        </div>
      </div>
      
  </template>

<script setup>
    const props = defineProps(['title', 'prices', 'description', 'links'])
</script>

<style scoped>
.price-block:nth-child(2n) h2 {
    color: white !important;
}
.price-block:nth-child(2n) p {
    color: white !important;
}
.price-block:nth-child(2n) li {
    color: white !important;
}
</style>