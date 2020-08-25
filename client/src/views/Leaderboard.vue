<template>
<div>
  <table class="table-fixed container mx-auto mt-1">
  <thead>
    <tr>
      <th class="w-1/2 px-4 py-2">Username</th>
      <th class="w-1/4 px-4 py-2">Score</th>
      <th class="w-1/4 px-4 py-2">...</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border px-4 py-2">A</td>
      <td class="border px-4 py-2">30</td>
      <td class="border px-4 py-2">...</td>
    </tr>
    <tr class="bg-gray-100">
      <td class="border px-4 py-2">B</td>
      <td class="border px-4 py-2">20</td>
      <td class="border px-4 py-2">...</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">C</td>
      <td class="border px-4 py-2">10</td>
      <td class="border px-4 py-2">...</td>
    </tr>
  </tbody>
</table>
</div>
</template>

<script>
export default {
  name: 'Leaderboard',
  data: () => ({
  }),
};
</script>
