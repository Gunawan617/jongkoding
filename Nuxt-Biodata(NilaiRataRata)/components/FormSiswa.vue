<template>
    <div>
      <h1 class="display-5">Form Nilai Tugas</h1>
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="induk" class="form-label">No Induk Siswa:</label>
          <input type="text" id="induk" v-model="siswa.induk" required class="form-control">
        </div>
        <div class="mb-3">
          <label for="nama" class="form-label">Nama:</label>
          <input type="text" id="nama" v-model="siswa.nama" required class="form-control">
        </div>
        <div class="mb-3">
          <label for="nilai" class="form-label">Nilai</label>
          <input type="number" id="nilai" v-model="siswa.nilai" required class="form-control">
        </div>
        <div>
          <button type="submit" class="btn btn-primary">Tambah</button>
        </div>
      </form>
    </div>
  </template>
<script>


export default {
    data() {
        return{
            siswa:{
                induk: '',
                nama: '',
                nilai: 0


            }
        };
        
    },
    methods:{
        submitForm(){
            this.$emit('siswa-added',{...this.siswa})
            this.siswa.induk= ''
            this.siswa.nama= ''
            this.siswa.nilai= 0;
        }
    }
};

</script>
