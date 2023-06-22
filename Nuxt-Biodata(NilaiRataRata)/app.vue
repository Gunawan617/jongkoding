<template>
    <div>
        <FormSiswa @siswa-added ="updateDaftarSiswa"></FormSiswa>
        <DaftarSiswa :siswa-baru ="siswaBaru"></DaftarSiswa>
    </div>  
</template>
<script>
import FormSiswa from './components/FormSiswa';
import DaftarSiswa from './components/DaftarSiswa';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default{
    components() {
        FormSiswa,
        DaftarSiswa;
    },
    data() {
        return{
            siswaBaru :null

        }
  
    },
    methods:{

        updateDaftarSiswa(siswa){
            this.siswaBaru =siswa;
        }

    }
  
}
</script>
