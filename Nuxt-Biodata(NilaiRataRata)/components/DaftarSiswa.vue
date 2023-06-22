<template>
    <div>
        <h1 class="display-4">Daftar Siswa</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">No Induk</th>
            <th scope="col">Nama</th>
            <th scope="col">Nilai</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(siswa, index) in daftarSiswa" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ siswa.induk }}</td>
            <td>{{ siswa.nama }}</td>
            <td>{{ siswa.nilai }}</td>
          </tr>
        </tbody>
      </table>
      <h2 class="mt-4">Rata-Rata Nilai Tugas: {{ rataRataNilai }}</h2>
    </div>
  </template>
<script>

export default {
  props: {
    siswaBaru: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      daftarSiswa: []
    };
  },
  computed: {
    rataRataNilai() {
      // Your computed property code rataRataNilai() {
      if (this.daftarSiswa.length === 0) {
        return 0;
      }
      const totalNilai = this.daftarSiswa.reduce(
        (sum, siswa) => sum + siswa.nilai,
        0
      );
      return (totalNilai / this.daftarSiswa.length).toFixed(2);
      
    }
  },
  watch: {
    siswaBaru(newSiswa) {
      if (newSiswa !== null) {
        this.daftarSiswa.push(newSiswa);
      }
    }
  }
};
</script>